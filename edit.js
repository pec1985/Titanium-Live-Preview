//will add comments some other time


var win = Ti.UI.currentWindow;
var buildButton = Ti.UI.createButton({title:'build'});
win.rightNavButton = buildButton;
var textArea = Ti.UI.createTextArea({value:'var win = Ti.UI.currentWindow;',backgroundColor:'white',top:0,bottom:166,font:{fontSize:12},suppressReturn:false});
var button1 = Ti.UI.createLabel({top:170,right:5,text:'',width:20,height:22,font:{fontSize:35}});
win.add(textArea);
win.add(button1);
var x = 0;
var tr1 = Titanium.UI.create2DMatrix();
tr1 = tr1.rotate(180);
var a = Titanium.UI.createAnimation();
a.transform = tr1;
a.duration = 350;
var tr2 = Titanium.UI.create2DMatrix();
tr2 = tr2.rotate(0);
var b = Titanium.UI.createAnimation();
b.transform = tr2;
b.duration = 350;
var secondView = Ti.UI.createView({top:200,bottom:0,left:-1,right:0,backgroundColor:'#ccc',layout:'horizontal'});
var view1 = Ti.UI.createView({left:0,width:107,height:84,borderWidth:1,borderColor:'black'});
var view2 = Ti.UI.createView({left:0,width:107,height:84,borderWidth:1,borderColor:'black'});
var view3 = Ti.UI.createView({left:0,width:107,height:84,borderWidth:1,borderColor:'black'});
var view4 = Ti.UI.createView({left:0,width:107,height:84,borderWidth:1,borderColor:'black'});
var view5 = Ti.UI.createView({left:0,width:107,height:84,borderWidth:1,borderColor:'black'});
var view6 = Ti.UI.createView({left:0,width:107,height:84,borderWidth:1,borderColor:'black'});
var label1 = Ti.UI.createLabel({text:'View',textAlign:'center'});
var label2 = Ti.UI.createLabel({text:'Table View',textAlign:'center'});
var label3 = Ti.UI.createLabel({text:'Button',textAlign:'center'});
var label4 = Ti.UI.createLabel({text:'Label',textAlign:'center'});
var label5 = Ti.UI.createLabel({text:'TableView Row',textAlign:'center'});
var label6 = Ti.UI.createLabel({text:'Loop',textAlign:'center'});
view1.add(label1);
view2.add(label2);
view3.add(label3);
view4.add(label4);
view5.add(label5);
view6.add(label6);
secondView.add(view1);
secondView.add(view2);
secondView.add(view3);
secondView.add(view4);
secondView.add(view5);
secondView.add(view6);
win.add(secondView);

view1.addEventListener('click',function(){
	textArea.value=textArea.value+'\nvar view = Ti.UI.createView({\n\ttop:0,\n\tleft:0,\n\twidth:100,\n\theight:100,\n\tbackgroundColor:\'#ccc\'\n});\nwin.add(view);';
	switch(x){
		case 0:textArea.blur();button1.animate(a);x=1;break;
		case 1:textArea.focus();button1.animate(b);x=0;break;
	}
});
view2.addEventListener('click',function(){
	textArea.value=textArea.value+'\nvar data = [];\nvar tableView = Ti.UI.createTableView({\n\tdata:data\n});\nwin.add(tableView);';
	switch(x){
		case 0:textArea.blur();button1.animate(a);x=1;break;
		case 1:textArea.focus();button1.animate(b);x=0;break;
	}
});
view3.addEventListener('click',function(){
	textArea.value=textArea.value+'\nvar button = Ti.UI.createButton({\n\ttitle:\'button\',\n\ttop:0,\n\tleft:0,\n\theight:50,\n\twidth:50,\n\tfont:{fontSize:18}\n});\nwin.add(button);';
	switch(x){
		case 0:textArea.blur();button1.animate(a);x=1;break;
		case 1:textArea.focus();button1.animate(b);x=0;break;
	}
});
view4.addEventListener('click',function(){
	textArea.value=textArea.value+'\nvar label = Ti.UI.createLabel({\n\ttop:0,\n\tleft:0,\n\theight:50,\n\tbackgroundColor:\'#fff\',\n\tfont:{fontSize:18}\n});\nwin.add(label);';
	switch(x){
		case 0:textArea.blur();button1.animate(a);x=1;break;
		case 1:textArea.focus();button1.animate(b);x=0;break;
	}
});
view5.addEventListener('click',function(){
	textArea.value=textArea.value+'\nvar row = Ti.UI.createTableViewRow({title:\'row title\'});\ndata[?]=row;';
	switch(x){
		case 0:textArea.blur();button1.animate(a);x=1;break;
		case 1:textArea.focus();button1.animate(b);x=0;break;
	}
});
view6.addEventListener('click',function(){
	textArea.value=textArea.value+'\nfor(var i=0;i<10;i++){\n\t\n}\n';
	switch(x){
		case 0:textArea.blur();button1.animate(a);x=1;break;
		case 1:textArea.focus();button1.animate(b);x=0;break;
	}
});



button1.addEventListener('click',function(){
	switch(x){
		case 0:textArea.blur();button1.animate(a);x=1;break;
		case 1:textArea.focus();button1.animate(b);x=0;break;
	}
});
win.addEventListener('focus',function(){
	textArea.focus();
});
buildButton.addEventListener('click',function(){
	var newWin = Ti.UI.createWindow({
		url:'editbuild.js',
		params:textArea.value
	});
	Ti.UI.currentTab.open(newWin);
});