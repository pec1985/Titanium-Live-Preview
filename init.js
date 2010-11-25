// Simple ajax helper...
Ti.include('remoteConnection.js');

/**
 * Your machine's IP or url.  In this case I get my machine's IP which by default has
 * Port 80 open as my web server.  Everyone's setup might be different.  You can also
 * put it on your website to test as well.
 *
 * NOTE:  This is against Apple's TOS so it's only good for TESTING your application on
 * a live device.  If you try to submit your app like this, it will probably get rejected. 
 * Make sure you put your app files from the json file BACK in the local files
 *
 * My app.json feed is on this server and I can build my app inside of app.json
 * to auto-update on the iPhone
 */	
var remoteUrl = 'http://192.168.1.115/testapp/Resources/app.json';

Helper.xhr('GET', '', remoteUrl, function(data) {
	// Once the JSON data is pulled form the XHR request, Execute the init() function in the app.json file
	data.init();	
});