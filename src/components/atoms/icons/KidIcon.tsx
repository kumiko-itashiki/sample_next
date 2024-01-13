import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const KidIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path
            d='M10 20a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10zM7.188 1.988A8.478 8.478 0 1 0 10 1.5a1.5 1.5 0 1 0 0 3A.75.75 0 0 1 10 6a3 3 0 0 1-3-3 2.931 2.931 0 0 1 .188-1.012z'
            transform='translate(2 2)'
          />
          <path
            d='M5.25 0a.75.75 0 0 0-.75.75c0 .306-.584.75-1.5.75S1.5 1.056 1.5.75a.75.75 0 0 0-1.5 0C0 2.012 1.318 3 3 3s3-.988 3-2.25A.75.75 0 0 0 5.25 0'
            transform='translate(9 15.25)'
          />
          <path
            d='M2 1a1 1 0 1 0-1 1 1 1 0 0 0 1-1'
            transform='translate(8 10)'
          />
          <path
            d='M1 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1'
            transform='translate(14 10)'
          />
        </g>
      </svg>
    </SvgIcon>
  );
};
