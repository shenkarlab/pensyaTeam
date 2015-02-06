var dragimg = document.createElement("img");
console.log('changing image');
dragimg.src = "images/Screen 2/Man_Up.png";

function dragStart(ev) {
   ev.dataTransfer.effectAllowed='move';
   ev.dataTransfer.setDragImage(dragimg, 100, 100);
   $('#office').attr("src", "images/Screen 2/Office_Empty.png");
   $('#sofa').attr("src", "images/Screen 2/Sofa_Empty.png");
   return true;
}

function dragEnter(ev) {
   ev.preventDefault();
   console.log("dragEnter");
   return true;
}

function dragOver(ev) {
	ev.preventDefault();
	console.log("dragOver");
	return false;
}

function dragDrop(ev) {
	if (ev.target.id == "office"){
		$('#office').attr("src", "images/Screen 2/Office_Man.png");
		$('aside').show();
	}
	else{
		$('#sofa').attr("src", "images/Screen 2/Sofa_Man.png");
	}
   return false;
}