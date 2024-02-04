import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const RookieIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path
            d='M7 20a1.5 1.5 0 0 1-1.03-.408l-5.5-5.175A1.5 1.5 0 0 1 0 13.331V1.5A1.506 1.506 0 0 1 1.5 0a1.489 1.489 0 0 1 .859.277L7 3.549 11.634.28a1.488 1.488 0 0 1 .86-.28A1.509 1.509 0 0 1 14 1.506V13.33a1.5 1.5 0 0 1-.472 1.09l-5.5 5.175A1.5 1.5 0 0 1 7 20zm5.5-18.5L7 5.385V18.5l5.5-5.175V1.504z'
            transform='translate(5 1.999)'
          />
        </g>
      </svg>
    </SvgIcon>
  );
};
