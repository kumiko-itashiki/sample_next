import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const RentIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path
            d='M15.75 20H4.25A2.253 2.253 0 0 1 2 17.75V9.12l-.742.68A.75.75 0 1 1 .242 8.7L9.491.2a.751.751 0 0 1 1.016 0l9.25 8.5a.75.75 0 0 1-1.016 1.1L18 9.12v8.63A2.253 2.253 0 0 1 15.75 20zM10 1.769 3.5 7.742V17.75a.751.751 0 0 0 .75.751h11.5a.751.751 0 0 0 .75-.751V7.742L10 1.769z'
            transform='translate(2 2)'
          />
          <path
            d='M1.281.22A.75.75 0 0 0 .22 1.281L2.94 4H1.5a.75.75 0 0 0 0 1.5H3v1H1.5a.75.75 0 0 0 0 1.5H3v.75a.75.75 0 0 0 1.5 0V8H6a.75.75 0 0 0 0-1.5H4.5v-1H6A.75.75 0 0 0 6 4H4.561l2.72-2.719A.75.75 0 0 0 6.22.22L3.751 2.69z'
            transform='translate(8.249 9.25)'
          />
        </g>
      </svg>
    </SvgIcon>
  );
};
