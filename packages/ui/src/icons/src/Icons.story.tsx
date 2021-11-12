import React from 'react';
import { Story } from '@storybook/react';
import { ButtonBase } from '../../core/src/ButtonBase';
import { Tooltip } from '../../core/src/Tooltip';
import { copyToClipboard } from '../../core/src/utils/clipboard';
import { createStory } from '../story';
import * as Icons from './index';

const story = createStory({
  title: 'Icons',
  style: {
    fontSize: '2.5rem',
  },
});

const Icon = ({ children }: any) => {
  const [copied, setCopied] = React.useState(false);
  const componentName = `<${children.type.displayName} />`;

  const onClick = () => {
    copyToClipboard(componentName).then(() => setCopied(true));
  };

  const onClose = () => {
    setCopied(false);
  };

  return (
    <Tooltip title={copied && <div>Copied</div>} onClose={onClose} disableFocusListener>
      <ButtonBase className="icon-cell" onClick={onClick}>
        {children}
        <div className="label">{componentName}</div>
      </ButtonBase>
    </Tooltip>
  );
};

export const Template: Story = () => {
  return (
    <div className="container">
      {Object.keys(Icons).map((icon, index) => (
        <Icon key={index}>{React.createElement((Icons as any)[icon])}</Icon>
      ))}
    </div>
  );
};
Template.storyName = 'Icons';

export default story;
