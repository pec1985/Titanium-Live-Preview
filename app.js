/**
 * This is just a sample file for building tabs in case you need it.
 * Real magic happens in init.js
 */	

// ----- Build the tabs ----- //
var initial_tabs = Ti.UI.createTabGroup();

// Form window & tab
var window = Ti.UI.createWindow({  
	url: 'init.js',
	title: 'Window'
});
var window_tab = Ti.UI.createTab({  
    icon: 'images/icons/117-todo@2x.png',
    title: 'window',
    window: window
});

// Add the tabs to the window
initial_tabs.addTab(window_tab);
initial_tabs.open();