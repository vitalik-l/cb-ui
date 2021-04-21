import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story/createStory';

const story = createStory({
  title: 'Styles',
  style: false,
});

// uncomment next line
export const Default: Story = () => (
  <div>
    <div>
      <h3>Colors</h3>
      <div className="text-white">text-white</div>
      <div className="text-black">text-black</div>
    </div>
    <div>
      <h3>Sizes</h3>
      <div className="d-flex">
        <div>
          <b>rem</b>
          <div className="size_0_5">size_0_5</div>
          <div className="size_0_6">size_0_6</div>
          <div className="size_0_7">size_0_7</div>
          <div className="size_0_8">size_0_8</div>
          <div className="size_0_9">size_0_9</div>
          <div className="size_1">size_1</div>
          <div className="size_1_1">size_1_1</div>
          <div className="size_1_2">size_1_2</div>
          <div className="size_1_3">size_1_3</div>
          <div className="size_1_4">size_1_4</div>
          <div className="size_1_5">size_1_5</div>
          <div className="size_1_6">size_1_6</div>
          <div className="size_1_7">size_1_7</div>
          <div className="size_1_8">size_1_8</div>
          <div className="size_1_9">size_1_9</div>
          <div className="size_2">size_2</div>
          <div className="size_2_1">size_2_1</div>
          <div className="size_2_2">size_2_2</div>
          <div className="size_2_3">size_2_3</div>
          <div className="size_2_4">size_2_4</div>
          <div className="size_2_5">size_2_5</div>
          <div className="size_2_6">size_2_6</div>
          <div className="size_2_7">size_2_7</div>
          <div className="size_2_8">size_2_8</div>
          <div className="size_2_9">size_2_9</div>
          <div className="size_3">size_3</div>
        </div>
        <div className="ml-5">
          <b>em</b>
          <div className="size-em_0_5">size-em_0_5</div>
          <div className="size-em_0_6">size-em_0_6</div>
          <div className="size-em_0_7">size-em_0_7</div>
          <div className="size-em_0_8">size-em_0_8</div>
          <div className="size-em_0_9">size-em_0_9</div>
          <div className="size-em_1">size-em_1</div>
          <div className="size-em_1_1">size-em_1_1</div>
          <div className="size-em_1_2">size-em_1_2</div>
          <div className="size-em_1_3">size-em_1_3</div>
          <div className="size-em_1_4">size-em_1_4</div>
          <div className="size-em_1_5">size-em_1_5</div>
          <div className="size-em_1_6">size-em_1_6</div>
          <div className="size-em_1_7">size-em_1_7</div>
          <div className="size-em_1_8">size-em_1_8</div>
          <div className="size-em_1_9">size-em_1_9</div>
          <div className="size-em_2">size-em_2</div>
          <div className="size-em_2_1">size-em_2_1</div>
          <div className="size-em_2_2">size-em_2_2</div>
          <div className="size-em_2_3">size-em_2_3</div>
          <div className="size-em_2_4">size-em_2_4</div>
          <div className="size-em_2_5">size-em_2_5</div>
          <div className="size-em_2_6">size-em_2_6</div>
          <div className="size-em_2_7">size-em_2_7</div>
          <div className="size-em_2_8">size-em_2_8</div>
          <div className="size-em_2_9">size-em_2_9</div>
          <div className="size-em_3">size-em_3</div>
        </div>
      </div>
    </div>
  </div>
);
Default.storyName = 'Styles';

export default story;
