import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const SettingIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path d='M22 5.75a.75.75 0 0 1 .102 1.493L22 7.25h-6a.75.75 0 0 1-.102-1.493L16 5.75h6zM6 5.75a.75.75 0 0 1 .102 1.493L6 7.25H2a.75.75 0 0 1-.102-1.493L2 5.75h4z' />
          <path d='M10 2.25a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm0 1.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5zM22 16.75a.75.75 0 0 1 .102 1.493L22 18.25h-4a.75.75 0 0 1-.102-1.493L18 16.75h4zM8 16.75a.75.75 0 0 1 .102 1.493L8 18.25H2a.75.75 0 0 1-.102-1.493L2 16.75h6z' />
          <path d='M14 13.25a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm0 1.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5z' />
        </g>
      </svg>
    </SvgIcon>
  );
};
