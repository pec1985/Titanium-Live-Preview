	var data = eval('({init: function() {'+Ti.UI.currentWindow.params+'}})');
	setTimeout(function(){
		data.init();
	},350);
