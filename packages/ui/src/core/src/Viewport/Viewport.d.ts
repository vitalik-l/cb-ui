/// <reference types="react" />
import { ViewportRendererProps } from './ViewportRenderer';
import { CalculatedViewportProps } from './CalculatedViewport';
export declare type ViewportProps = ViewportRendererProps & Omit<CalculatedViewportProps, 'children'>;
export declare const Viewport: (props: ViewportProps) => JSX.Element;
