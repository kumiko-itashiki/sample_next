import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const TabletIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path
            d='M13.75 20H2.25A2.253 2.253 0 0 1 0 17.75V2.25A2.253 2.253 0 0 1 2.25 0h11.5A2.253 2.253 0 0 1 16 2.25v15.5A2.253 2.253 0 0 1 13.75 20zM2.25 1.5a.751.751 0 0 0-.75.75v15.5a.751.751 0 0 0 .75.751h11.5a.751.751 0 0 0 .75-.751V2.25a.751.751 0 0 0-.75-.75z'
            transform='translate(4 2)'
          />
          <path
            d='M1 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1'
            transform='translate(11 18)'
          />
          <path
            d='M10.5 12H0V0h10.5v12zM2 5.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm0-3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 1 0 0-1.5z'
            transform='translate(6.75 5)'
          />
        </g>
      </svg>
    </SvgIcon>
  );
};
