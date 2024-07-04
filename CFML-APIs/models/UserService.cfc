/**
 * This service provides user authentication, retrieval and much more.
 * Implements the CBSecurity IUserService: https://coldbox-security.ortusbooks.com/usage/authentication-services#iuserservice
 */
component accessors="true" singleton {



	property name="populator" inject="wirebox:populator";
	property name="wirebox"   inject="wirebox";
	property name="bcrypt" inject="@BCrypt";
	property name="auth" inject="authenticationService@cbauth";
	property name="cbSecurity" inject="cbSecurity@cbSecurity";


	/**
	 * TODO: Mock users, remove when coding
	 */
	property name="mockUsers";


	/**
	 * Constructor
	 */
	function init(){
		// We are mocking only 1 user right now, update as you see fit
		variables.mockUsers = [
			{
				"id"          : 1,
				"firstName"   : "admin",
				"lastName"    : "admin",
				"username"    : "admin",
				"password"    : "admin",
				"roles"       : [],
				"permissions" : []
			}
		];

		return this;
	}

	private string function hashSecurely( required string target ){
		return hash( arguments.target, static.hashAlgorithm, "UTF-8", static.hashIterations );
	}
	/**
	 * Construct a new user object via WireBox Providers
	 */
	User function new() provider="User"{
	}

	function create(required formData){

		queryExecute("INSERT INTO user (firstName,lasttName,email,password)
			VALUES (?, ?, ?, ?)",
			[
				arguments.formData.firstName,
				arguments.formData.lasttName,
				arguments.formData.email,
				bcrypt.hashPassword(arguments.formData.password)
			],
			{
				result: 'local.result'
			}
		);
		return local.result.generatedkey;
	}
	/**
	 * Retrieve a user by unique identifier
	 *
	 * @id The unique identifier
	 *
	 * @return User that implements JWTSubject and/or IAuthUser
	 */

	User function retrieveUserById( required id ){
		return populator.populateFromQuery(
			new(),
			queryExecute("select id from user where id = ?",[id]),
			1
		)
	}

	/**
	 * Retrieve a user by username
	 *
	 * @return User that implements JWTSubject and/or IAuthUser
	 */
	function retrieveUserByUsername( required username ){
	
		return populator.populateFromQuery(
			new(),
			queryExecute("select *, id, email, password from user where email = ?",[username]),
			1
		)
	}

	boolean function isValidCredentials( required username, required password ){
		var json = {'error':true,'messages':[],'results':{}, 'Rcount':0};
		
		var oUser = retrieveUserByUsername( arguments.username );
		
		var isSamePassword = false;
		if(oUser.isLoaded()){
			var isBcrypt = ( findNoCase( "$", oUser.getPassword()) ? true : false );

			if(isBcrypt EQ true){
				try{
					isSamePassword = bcrypt.checkPassword( arguments.password, oUser.getPassword());
				}catch(Any e){
					isSamePassword = false;
				}
			}else{
				isSamePassword = (compareNoCase(arguments.password,oUser.getPassword() ) eq 0 ? true : false );
			}
			if(isSamePassword){
				
				if(isBcrypt EQ false){
					var genPassword = bcrypt.hashPassword( arguments.password );
					var qx = new query();		
					var sqlx = 'UPDATE Users SET password =:password WHERE id = :userID';
					qx.addParam( name = "password", value = genPassword, cfsqltype = "varchar" );
					qx.addParam( name = "userID", value = oUser.getId(), cfsqltype = "integer" );
					qx.setSQL(sqlx);
					qx.execute();
				}
							
			}
		}
		return isSamePassword;			
	
	}


	public query function GetByUserName( required username ){
        return queryExecute(
            "select *, email AS username
			FROM user 
			WHERE email = :username", 
            { username : arguments.username },
            {returnType = "query"} 
		);
    }

	/**
	 * Verify if the incoming username/password are valid credentials.
	 *
	 * @username The username
	 * @password The password
	 */
	/* 	boolean function isValidCredentials( required username, required password ) {
		var oUser = retrieveUserByUsername( arguments.username );
		var rsData = GetByUserName( arguments.username );
		if( CheckCredentials( arguments.userName, arguments.password ) )
		{
			// populate user object
			populateUserByUsername( arguments.username );
			// writeDump(populateUserByUsername);abort;
			return true;
		}else{
			return false;
		}
	} */
	function retrieveUserDetailsById( required username ){

		var qparams = {};
		qparams['username'] = {cfsqltype = "cf_sql_varchar", value = arguments.username}; // permission name
		try{
			var sql = "SELECT *, email AS username FROM user WHERE email = :username";
			var results = queryExecute(sql, qparams);
			return results;

		}catch (any e) {
			// writeDump(e);
		}
	}

	function retrieveUserNameById( required id ){
		var qparams = {};
		qparams['id'] = {cfsqltype = "cf_sql_integer", value = arguments.id};
		var user = queryExecute("SELECT * from user where id = ?",[arguments.id]);
		return user;
	}


}
