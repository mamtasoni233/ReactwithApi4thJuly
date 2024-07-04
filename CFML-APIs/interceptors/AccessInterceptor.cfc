/**
 * I am a new interceptor
 */
component extends="coldbox.system.Interceptor"{

	/**
	 * Configure the interceptor
	 */
	void function configure(){

	}

	void function preProcess(event,struct data){

        event.setHTTPHeader( name = "Access-Control-Allow-Origin", value = "*" );
        event.setHTTPHeader( name = "Access-Control-Allow-Methods", value = "POST,GET,OPTIONS,DELETE,PUT" );
        //event.setHTTPHeader( name = "Access-Control-Allow-Headers", value = "X-Requested-With, Cache-Control, Content-Type, Authorization" );
        event.setHTTPHeader( name = "Access-Control-Allow-Headers", value = "X-Requested-With, Cache-Control, Content-Type, Authorization, X-CSRF-Token" );


        if ( event.getHTTPMethod() == "OPTIONS" ) {
            log.debug( "No handler action for an OPTIONS request.  Returning a 200 OK." );
            event.noExecution();
            event.renderData( "plain", "Preflight OK" );
            return;
        }
		
		// if(event.getHTTPMethod() IS "OPTIONS"){
		// 	// .setStatusText("Options HTTP Method")
        //     var response = event.getResponse().setError( false ).setStatusCode(200);
		// 	// value = event.getHTTPHeader( "Origin", "*" )
        //     event.setHTTPHeader(
        //         name = "Access-Control-Allow-Origin",
        //         value = '*'
        //     );
        //     event.setHTTPHeader(
        //         name = "Access-Control-Allow-Credentials",
        //         value = true
        //     );
        //     event.setHTTPHeader(
        //         name = "Access-Control-Allow-Methods",
        //         value =  "GET,POST,OPTIONS,DELETE"
        //         // value =  event.getHTTPMethod()
        //     );
        //     event.setHTTPHeader(
        //         name = "Access-Control-Allow-Headers",
        //         value =  "content-type,Content-Type,Content-Length,Authorization,Cookie,stationTZOffset,x-requested-with,cache-control,token,Sec-Fetch-Dest,Sec-Fetch-Mode,Sec-Fetch-Site,User-Agent,Connection,Host,Origin,Referer"
        //     );

        //     // Render Out
        //     event.renderData( 
        //         type        = response.getFormat(),
        //         data        = response.getDataPacket( reset=true ),
        //         contentType = response.getContentType(),
        //         statusCode  = response.getStatusCode(),
        //         statusText  = response.getStatusText(),
        //         location    = response.getLocation(),
        //         isBinary    = response.getBinary()
        //     );
        //     // event.noExecution();
        //     return true;
        // }else{
		// 	writeDump("hiii");abort;
		// }

	}



}
