import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const YenRecommendIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path
            d='M10 20a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10zm0-18.5a8.5 8.5 0 1 0 8.5 8.5A8.509 8.509 0 0 0 10 1.5z'
            transform='translate(2 2)'
          />
          <path
            d='M7.5 15A7.5 7.5 0 1 1 15 7.5 7.509 7.509 0 0 1 7.5 15zM7.5.5a7 7 0 1 0 7 7 7.007 7.007 0 0 0-7-7z'
            transform='translate(4.5 4.5)'
          />
          <path
            d='M6.22.22 3.75 2.69 1.281.22A.75.75 0 0 0 .22 1.281L2.94 4H1.5a.75.75 0 0 0 0 1.5H3v1H1.5a.75.75 0 0 0 0 1.5H3v.75a.75.75 0 0 0 1.5 0V8H6a.75.75 0 0 0 0-1.5H4.5v-1H6A.75.75 0 0 0 6 4H4.561l2.72-2.719A.75.75 0 0 0 6.22.22'
            transform='translate(8.25 7.5)'
          />
        </g>
      </svg>
    </SvgIcon>
  );
};
