/**
 * This is just a sample file for building tabs in case you need it.
 * Real magic happens in init.js
 */	

var initial_tabs = Ti.UI.createTabGroup();

// create initial window and add a button to navigate to your externally created window
var win = Ti.UI.createWindow({title:'Your App'});
win.hideTabBar();
var button = Ti.UI.createButton({left:20,right:20,height:80,title:'Open'});
win.add(button);

// Form window & tab
var window_tab = Ti.UI.createTab({  
    icon: 'images/icons/117-todo@2x.png',
    title: 'window',
    window: win
});
// Add the tabs to the window
initial_tabs.addTab(window_tab);

initial_tabs.open();

//when button is clicked, new window opens with exteral contenet
//this way, it refreshes the content everytime
button.addEventListener('click',function(){
	var window = Ti.UI.createWindow({  
		url: 'init.js',
		title: 'Window'
	});
	window_tab.open(window);
});

// create an instance of all of the elements so that there are no errors later.
var a;
a=Ti.UI.create2DMatrix;
a=Ti.UI.create3DMatrix;
a=Ti.UI.createActivityIndicator;
a=Ti.UI.createAlertDialog;
a=Ti.UI.createAnimation;
a=Ti.UI.createButton;
a=Ti.UI.createButtonBar;
a=Ti.UI.createCoverFlowView;
a=Ti.UI.createDashboardItem;
a=Ti.UI.createDashboardView;
a=Ti.UI.createEmailDialog;
a=Ti.UI.createImageView;
a=Ti.UI.createLabel;
a=Ti.UI.createOptionDialog;
a=Ti.UI.createPicker;
a=Ti.UI.createPickerColumn;
a=Ti.UI.createPickerRow;
a=Ti.UI.createProgressBar;
a=Ti.UI.createScrollView;
a=Ti.UI.createScrollableView;
a=Ti.UI.createSearchBar;
a=Ti.UI.createSlider;
a=Ti.UI.createSwitch;
a=Ti.UI.createTab;
a=Ti.UI.createTabGroup;
a=Ti.UI.createTabbedBar;
a=Ti.UI.createTableView;
a=Ti.UI.createTableViewRow;
a=Ti.UI.createTableViewSection;
a=Ti.UI.createTextArea;
a=Ti.UI.createTextField;
a=Ti.UI.createToolbar;
a=Ti.UI.createView;
a=Ti.UI.createWebView;
a=Ti.UI.createWindow;
a=null;