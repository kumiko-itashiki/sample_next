import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const MinusIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <path d='M18 11.25a.75.75 0 0 1 .102 1.493L18 12.75H6a.75.75 0 0 1-.102-1.493L6 11.25h12z' />
      </svg>
    </SvgIcon>
  );
};
