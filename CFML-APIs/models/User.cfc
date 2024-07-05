/**
 * A user in the system.
 *
 * This user is based off the Auth User included in cbsecurity, which implements already several interfaces and properties.
 * - https://coldbox-security.ortusbooks.com/usage/authentication-services#iauthuser
 * - https://coldbox-security.ortusbooks.com/jwt/jwt-services#jwt-subject-interface
 *
 * It also leverages several delegates for Validation, Population, Authentication, Authorization and JWT Subject.
 */
component
	accessors     ="true"
	extends       ="cbsecurity.models.auth.User"
	transientCache="false"
	delegates     ="
		Validatable@cbvalidation,
		Population@cbDelegates,
		Auth@cbSecurity,
		Authorizable@cbSecurity,
		JwtSubject@cbSecurity
	"
{
	property name="userService" inject="UserService";

	property name="Id";
    property name="email";
    property name="Password";
    property name="firstName";
    property name="lastName";
	/**
	 * Constructor
	 */
	function init(){
		// super.init();
        variables.Id = "";
        variables.email = "";
        variables.Password  = "";
        variables.firstName  = "";
        variables.lastName  = "";

        variables.permissions = [ "write", "read" ];

        return this;
	}

	boolean function isLoaded(){
        return ( !isNull( variables.id ) && len( variables.id ) );
    }

	struct function getJwtCustomClaims(){
        var user = userService.retrieveUserNameById(this.getId());
		var oUser = userService.retrieveUserDetailsById(user.email);
        if( oUser.recordCount > 0){
            return { 
                'email' = oUser.email,
                'id' = oUser.id,
                'password' = oUser.password,
                'firstName' = oUser.firstName,
                'lastName' = oUser.lastName,
                'phone' = oUser.phone
            };
        }else{
            return {}
        }
    }

	/**
     * This function returns an array of all the scopes that should be attached to the JWT token that will be used for authorization.
     */
    array function getJWTScopes(){
        return variables.permissions;
    }

}
