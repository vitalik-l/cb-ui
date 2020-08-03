export default function getPosition(e, parent) {
  if (!e) return {};
  let element = e;
  let left = 0;
  let top = 0;

  const checkParent = (el) => (typeof parent === 'string' ? el.classList && !el.classList.contains(parent) : el !== parent);

  while ((element.offsetParent && !parent)
  || (element.offsetParent && parent && checkParent(element.offsetParent))) {
    left += element.offsetLeft;
    top += element.offsetTop;
    element = element.offsetParent;
  }

  left += element.offsetLeft;
  top += element.offsetTop;

  return {
    x: left, y: top, left, top,
  };
}
