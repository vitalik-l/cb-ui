/// <reference types="react" />
export declare const createStoryFactory: ({ titlePrefix, defaultStyle, className, ...parameters }: {
    [x: string]: any;
    titlePrefix?: string | undefined;
    defaultStyle?: {} | undefined;
    className?: string | undefined;
}) => {
    createStory: ({ title, storyContainer, style, ...params }: any) => any;
    decorators: ((Story: any) => JSX.Element)[];
    StoryContainer: ({ children }: any) => any;
};
