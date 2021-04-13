import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import * as Icons from './index';

const story = createStory({
  title: 'Icons',
  style: {
    fontSize: '2rem',
  }
});

export const TrendDownIcon: Story = () => <Icons.TrendDownIcon />;
export const TrendUpIcon: Story = () => <Icons.TrendUpIcon />;
export const PointerIcon: Story = () => <Icons.PointerIcon />;
export const CrosshairIcon: Story = () => <Icons.CrosshairIcon />;
export const CandlesIcon: Story = () => <Icons.CandlesIcon />;
export const IndicatorIcon: Story = () => <Icons.IndicatorIcon />;
export const SplineChartIcon: Story = () => <Icons.SplineChartIcon />;
export const PenIcon: Story = () => <Icons.PenIcon />;
export const ZoomInIcon: Story = () => <Icons.ZoomInIcon />;
export const ZoomOutIcon: Story = () => <Icons.ZoomOutIcon />;
export const PauseIcon: Story = () => <Icons.PauseIcon />;
export const MAIcon: Story = (args) => <Icons.MAIcon {...args} />;
MAIcon.argTypes = {
  colored: { control: 'boolean' },
};

export default story;
