import React from 'react';
import { useFontSize } from '@cb-general/core/hooks/useFontSize';

export const useResizableTabs = ({ containerRef, onResize }: any) => {
  const fontSize = useFontSize();
  const dragPos: any = React.useRef();

  const startDrag = (event: any) => {
    dragPos.current =
      event.touches && event.touches.length ? event.touches[0].clientY : event.clientY;

    if (event.type === 'mousedown') {
      document.addEventListener('mousemove', changeTabHeight);
      document.addEventListener('mouseup', stopDrag);
    } else if (event.type === 'touchstart') {
      document.addEventListener('touchmove', changeTabHeight);
      document.addEventListener('touchend', stopDrag);
    }
  };

  const changeTabHeight = (event: any) => {
    let posY = event.touches && event.touches.length ? event.touches[0].clientY : event.clientY,
      deltaPos = dragPos.current - posY,
      newHeight = (containerRef.current.offsetHeight + deltaPos) / fontSize;
    dragPos.current = posY;
    containerRef.current.style.height = `${newHeight}rem`;
    if (onResize) {
      window.setTimeout(onResize());
    }
  };

  const stopDrag = () => {
    document.removeEventListener('mousemove', changeTabHeight);
    document.removeEventListener('mouseup', stopDrag);
    document.removeEventListener('touchmove', changeTabHeight);
    document.removeEventListener('touchend', stopDrag);
  };

  return {
    onMouseDown: startDrag,
    style: {
      cursor: 'row-resize',
    }
  }
};