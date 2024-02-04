import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const ClockIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path
            d='M17.076 2.93A10 10 0 1 0 2.93 17.075 10 10 0 1 0 17.076 2.93M10 18.243A8.241 8.241 0 1 1 18.244 10 8.25 8.25 0 0 1 10 18.243'
            transform='translate(1.997 1.998)'
          />
          <path
            d='m14.481 11.871-3.442-1.987a1.041 1.041 0 0 0-.416-.722V3.116a.621.621 0 0 0-1.241 0v6.043A1.045 1.045 0 0 0 10 11.047a1.028 1.028 0 0 0 .419-.088l3.442 1.987a.621.621 0 0 0 .62-1.075'
            transform='translate(2 1.998)'
          />
        </g>
      </svg>
    </SvgIcon>
  );
};
