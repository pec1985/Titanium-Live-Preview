/**
 * XHR Class (super old)
 *
 * @author      Rick Blalock
 */	
var Helper = {
	
	/**
	 * Basic XHR connection
	 *
	 * @version     $Revision$
	 * @author      Rick Blalock
	 * @param		(string) type
	 * @param		(object) post_data	
	 * @param		(string) source
	 * @param		(function) callback
	 */	
	xhr: function(type, post_data, source, callback)
	{
		// Setup the xhr object
		var request = Ti.Network.createHTTPClient();
		
		// Set a default timeout
		request.timeout = 10000;	

		// Error Handling
		request.onerror = function(e)
		{
			Ti.API.info(e.error);
		};


		// Execute when xhr is loaded
		request.onload = function()
		{
			// If successful
			try
			{
				if (this.responseText == 'null') {
					alert('Whoops.');
				} else {
					
					// Assign reponse
					var data = eval('('+this.responseText+')');

					// Execute a callback function
					callback(data);
				}

			}
			// If not successful
			catch(E) {
				// Alert the error message.  @TODO get this to do something intelligent
				alert(E);
			}
		};
		
		// Open the remote connection
		request.open(type, source);

		// send the data
		request.send(post_data);
	}
	
};