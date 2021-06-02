import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { DropzoneArea } from './index';
import { DropzoneBase, DropzoneProvider } from '../Dropzone';
import { getBetNumbers } from '../Dropzone/utils';
import { BetObject } from '../Dropzone/types';
import { BET_TYPES } from '../constants';
import { Tooltip } from '@cb-general/core/Tooltip';
import { InfoPanel, InfoPanelItem } from '@cb-general/core/InfoPanel';
import { ChipsStack } from '@cb-general/weekend/ChipsStack';
import { Chip } from '@cb-general/weekend/Chip';

const story = createStory({
  title: 'DropzoneArea',
  component: DropzoneArea,
});

const getBetNumbersFn = ({ betType, startNumber, typeBSide }: BetObject) => {
  if (betType && startNumber !== undefined) {
    return getBetNumbers({ betType, startNumber, typeBSide });
  }
  return [];
};

const Dropzone = React.memo((props: React.ComponentProps<typeof DropzoneBase>) => {
  const { betType, startNumber } = props;
  const [chips, setChips] = React.useState([]);
  let label;

  const onMouseDown = React.useCallback(() => {
    setChips([5]);
  }, []);

  switch (betType) {
    case BET_TYPES.DOZEN:
      label = startNumber === 1 ? '1st 12' : '2nd 12';
      break;
    case BET_TYPES.LOWHIGH:
      label = startNumber === 1 ? '1 TO 18' : '19 TO 36';
      break;
    case BET_TYPES.ODDEVEN:
      label = startNumber === 2 ? 'EVEN' : 'ODD';
      break;
    case BET_TYPES.COLUMN:
      label = '2to1';
      break;
  }

  return (
    <Tooltip
      title={
        <InfoPanel arrowPosition="top">
          <InfoPanelItem>SOME INFO</InfoPanelItem>
        </InfoPanel>
      }
      placement="bottom"
      disableInteractive
    >
      <DropzoneBase {...props} label={label} onMouseDown={onMouseDown}>
        {!!chips.length && (
          <ChipsStack>
            {chips.map(chip => <Chip value={chip} />)}
          </ChipsStack>
        )}
      </DropzoneBase>
    </Tooltip>
  );
});

export const Template: Story = (args) => (
  <DropzoneProvider getBetNumbersFn={getBetNumbersFn}>
    <DropzoneArea {...args} DropzoneComponent={Dropzone} />
  </DropzoneProvider>
);
Template.storyName = 'DropzoneArea';

export const LeftAndRight: Story = () => (
  <DropzoneProvider getBetNumbersFn={getBetNumbersFn}>
    <div className="d-flex">
      <DropzoneArea DropzoneComponent={Dropzone} />
      <DropzoneArea rightSide DropzoneComponent={Dropzone} />
    </div>
  </DropzoneProvider>
)

export default story;
