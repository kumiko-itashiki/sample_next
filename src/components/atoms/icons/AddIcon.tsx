import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const AddIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path d='M18 11.25a.75.75 0 0 1 .102 1.493L18 12.75H6a.75.75 0 0 1-.102-1.493L6 11.25h12z' />
          <path d='M12 5.25a.75.75 0 0 1 .743.648L12.75 6v12a.75.75 0 0 1-1.493.102L11.25 18V6a.75.75 0 0 1 .75-.75z' />
        </g>
      </svg>
    </SvgIcon>
  );
};
