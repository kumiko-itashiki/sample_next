import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const MenuIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path d='M21 5.25a.75.75 0 0 1 .102 1.493L21 6.75H3a.75.75 0 0 1-.102-1.493L3 5.25h18zM21 11.25a.75.75 0 0 1 .102 1.493L21 12.75H3a.75.75 0 0 1-.102-1.493L3 11.25h18zM21 17.25a.75.75 0 0 1 .102 1.493L21 18.75H3a.75.75 0 0 1-.102-1.493L3 17.25h18z' />
        </g>
      </svg>
    </SvgIcon>
  );
};
