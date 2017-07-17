export default function getPosition(e, offsetClass){
	if(!e) return;
	var left = 0;
	var top  = 0;

	while ((e.offsetParent && !offsetClass) || (e.offsetParent && offsetClass && e.offsetParent.classList && !e.offsetParent.classList.contains(offsetClass))){
		left += e.offsetLeft;
		top  += e.offsetTop;
		e	 = e.offsetParent;
	}

	left += e.offsetLeft;
	top  += e.offsetTop;

	return {x:left, y:top};
}