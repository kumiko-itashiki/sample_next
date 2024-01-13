import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const BedIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path
            d='M.5 1h.293l-.647.646A.5.5 0 0 0 .5 2.5H2a.5.5 0 0 0 0-1h-.293l.647-.646A.5.5 0 0 0 2 0H.5a.5.5 0 1 0 0 1'
            transform='translate(8.25 6.25)'
          />
          <path
            d='M.75 1.5h1.189L.22 3.22A.75.75 0 0 0 .75 4.5h3a.75.75 0 0 0 0-1.5H2.561L4.28 1.28A.75.75 0 0 0 3.75 0h-3a.75.75 0 0 0 0 1.5'
            transform='translate(12.25 3.5)'
          />
          <path
            d='M19.25 13.5a.751.751 0 0 1-.75-.75V11.5h-17v1.25a.75.75 0 0 1-1.5 0v-12a.75.75 0 0 1 1.5 0V6h2.353a2.25 2.25 0 1 1 2.794 0H8v-.75A2.253 2.253 0 0 1 10.25 3h7.5A2.253 2.253 0 0 1 20 5.25v7.5a.751.751 0 0 1-.75.75zM1.5 7.5V10h17V9H8V7.5zm8.75-3a.751.751 0 0 0-.75.75V7.5h9V5.25a.751.751 0 0 0-.751-.75zm-5-1a.75.75 0 1 0 .75.75.751.751 0 0 0-.75-.75z'
            transform='translate(2 7)'
          />
        </g>
      </svg>
    </SvgIcon>
  );
};
