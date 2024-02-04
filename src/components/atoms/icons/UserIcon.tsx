import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const UserIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path d='M12 1.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5zm0 1.5a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5zM12 14.25c5.127 0 9.34 3.43 9.34 7.75a.75.75 0 0 1-1.5 0c0-3.415-3.481-6.25-7.84-6.25-4.36 0-7.84 2.835-7.84 6.25a.75.75 0 1 1-1.5 0c0-4.32 4.213-7.75 9.34-7.75z' />
        </g>
      </svg>
    </SvgIcon>
  );
};
