import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const TurnIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path
            d='M6.851 2.5a8.162 8.162 0 0 0-3.782.931l1.33-2.3A.75.75 0 0 0 3.1.375L.85 4.273A.75.75 0 0 0 1.124 5.3l3.9 2.25a.738.738 0 0 0 .374.1.75.75 0 0 0 .376-1.4L3.483 4.927A6.673 6.673 0 0 1 6.851 4 6.75 6.75 0 1 1 1.36 14.664a.75.75 0 0 0-1.22.872A8.247 8.247 0 1 0 6.851 2.5'
            transform='translate(4.45 2.501)'
          />
        </g>
      </svg>
    </SvgIcon>
  );
};
