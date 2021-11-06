import clsx from 'clsx';
import React from 'react';
import { useWindowSize } from '../WindowResizeListener';
import { useClasses } from '../hooks/useClasses';
import styles from './CoreViewport.module.scss';

type Classes = {
  root?: string;
  html?: string;
};

export type ViewportCssProps = {
  children?: React.ReactNode;
  className?: string;
  fixed?: boolean;
  classes?: Classes;
} & React.HTMLAttributes<HTMLDivElement>;

export const ViewportCss = ({
  className,
  classes: classesProp,
  ...restProps
}: ViewportCssProps) => {
  const viewportRef = React.useRef<HTMLDivElement>(null);
  const [width, height] = useWindowSize();
  const classes = useClasses(styles, classesProp);

  React.useLayoutEffect(() => {
    if (classes?.html) {
      document.documentElement.classList.add(classes?.html);
    }

    return () => {
      if (classes?.html) {
        document.documentElement.classList.remove(classes?.html);
      }
    };
  }, [classes]);

  React.useEffect(() => {
    const viewportWidth = viewportRef.current?.offsetWidth ?? 0;
    const viewportHeight = viewportRef.current?.offsetHeight ?? 0;

    (window as any).viewportSize = { width: viewportWidth, height: viewportHeight };

    window.dispatchEvent(
      new CustomEvent('viewport resize', {
        detail: {
          width: viewportWidth,
          height: viewportHeight,
          fontSize: 0,
        },
      }),
    );
  }, [width, height]);

  return <div ref={viewportRef} className={clsx(classes?.root, className)} {...restProps} />;
};
