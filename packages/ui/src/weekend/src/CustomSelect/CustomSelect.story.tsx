import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { CustomSelect } from './index';
import { Option } from '@cb-general/core/Select';
import { Tooltip } from '@cb-general/core/Tooltip';
import { InfoPanel, InfoPanelItem } from '@cb-general/core/InfoPanel';

const story = createStory({
  title: 'CustomSelect',
  component: CustomSelect,
  argTypes: {
    disabled: { control: 'boolean' },
  },
  style: {
    marginTop: 100,
  },
});

export const Template: Story = (args) => {
  const [hoveredValue, setHoveredValue] = React.useState(0);

  return (
    <Tooltip
      title={
        <InfoPanel>
          <InfoPanelItem>{hoveredValue}</InfoPanelItem>
        </InfoPanel>
      }
      disableInteractive
      placement="top"
    >
      <span>
        <CustomSelect {...args}>
          <Option value={1} onMouseOver={() => setHoveredValue(1)}>
            1
          </Option>
          <Option value={5} onMouseOver={() => setHoveredValue(5)}>
            5
          </Option>
          <Option value={500} onMouseOver={() => setHoveredValue(500)}>
            500
          </Option>
        </CustomSelect>
      </span>
    </Tooltip>
  );
};
Template.storyName = 'CustomSelect';

export default story;
