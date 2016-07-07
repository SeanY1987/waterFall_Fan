/**
 * Created by fanyifan1 on 2016/7/8.
 */


function waterFall(element, space, children) {
	/*参数初始化*/
	if (!element) return;/*想要实现瀑布流元素的父节点*/
	space = space || 10; /*上下间距*/
	children = children || element.getElementsByTagName('div');/*瀑布流元素,没有传入的话是所有div子节点,*/
	var wrap = element;
	var water = children;
	var spaceWidth = water[0].offsetWidth;
	var wrapWidth = wrap.offsetWidth;
	var colNum = Math.floor(wrapWidth / spaceWidth);/*计算列数*/

	var padding = Math.floor((wrapWidth - colNum * spaceWidth) / (colNum + 1));
	var column = new Array();
	var length = water.length;
	var maxHeight = 0;
	for (var i = 0; i < colNum; i++) {
		column[i] = new Array();
		column[i].top = space;
		column[i].left = (spaceWidth * i) + padding * (i + 1);
	}


	/*为元素添加样式*/
	for (var i = 0; i < length; i++) {
		var index = i + 1;
		if (index % colNum == 0) {
			sub = colNum;
		} else {
			sub = index % colNum;
		}
		_this = water;
		_this[i].style.position = "absolute";
		_this[i].style.top = column[sub - 1].top + "px";
		_this[i].style.left = column[sub - 1].left + "px";
		column[sub - 1].top += _this[i].offsetHeight + space;
	}
	for (var i = 0; i < colNum; i++) {
		if (column[i].top > maxHeight) maxHeight = column[i].top;
	}
	wrap.style.height = maxHeight + "px";
}