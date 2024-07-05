<cfscript>
    prc.result = queryExecute("INSERT INTO user(firstName,lastName,email,password,createdBy)
			VALUES ('test', 'test', 'test2355', 'test',1)"
		);
        writeDump(prc.result);abort;
</cfscript>