import React from 'react';
import { SvgIcon, SvgIconProps } from '@cb-general/core/SvgIcon';

type Props = SvgIconProps & {
  up?: boolean;
};

export const TrendIcon = (props:Props) => {
	const { up, ...restProps } = props;

	return (
		<SvgIcon className="svg-icon" viewBox="0 0 21 21" fill="none" style={up ? {transform: 'rotate(-90deg)'} : undefined} {...restProps}>
			<path d="M15.7134 5.23682L13.5049 5.23682L13.5049 11.942L6.01873 4.45588L4.45684 6.01776L11.943 13.5039L5.23779 13.5039L5.23779 15.7124L15.7134 15.7124L15.7134 5.23682Z" fill="currentColor"/>
		</SvgIcon>
	)
};