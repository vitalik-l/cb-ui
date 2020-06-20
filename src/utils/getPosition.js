export default function getPosition(e, parent){
	if(!e) return;
	let left = 0,
		top = 0;

	const checkParent = el => typeof parent === 'string' ? el.classList && !el.classList.contains(parent) : el !== parent;

	while ((e.offsetParent && !parent) || (e.offsetParent && parent && checkParent(e.offsetParent))){
		left += e.offsetLeft;
		top  += e.offsetTop;
		e	 = e.offsetParent;
	}

	left += e.offsetLeft;
	top  += e.offsetTop;

	return {x:left, y:top, left, top};
}