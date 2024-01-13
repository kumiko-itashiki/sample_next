import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const CheckIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <path d='M19.717 6.215 9.354 16.323a.76.76 0 0 1-1.063 0L4.283 12.41a.76.76 0 0 0-1.062 0 .723.723 0 0 0 0 1.037l4.009 3.91c.88.857 2.306.857 3.187 0L20.78 7.251a.723.723 0 0 0 0-1.036.76.76 0 0 0-1.063 0z' />
      </svg>
    </SvgIcon>
  );
};
