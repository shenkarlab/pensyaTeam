function dragStart(ev) {
   ev.dataTransfer.effectAllowed='move';
   console.log(ev.dataTransfer.setData("Text", ev.target.getAttribute('id')));
   console.log(ev.target.getElementsByTagName('article'));
   ev.dataTransfer.setDragImage(ev.target,100,100);
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
   var data = ev.dataTransfer.getData("Text");
   console.log(data);
   console.log(ev.target)
   if($(ev.target).prop("tagName") == 'IMG')
   	  ev.target.parentNode.parentNode.appendChild(document.getElementById(data));
   else
   	  ev.target.appendChild(document.getElementById(data));
   ev.stopPropagation();
   return false;
}