import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const PaymentIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path
            d='m4.22 2.72-.72.72V.75a.75.75 0 1 0-1.5 0v2.69l-.719-.72A.75.75 0 0 0 .22 3.781l2 2a.747.747 0 0 0 .817.161.757.757 0 0 0 .244-.161l2-2A.75.75 0 0 0 4.22 2.72'
            transform='translate(9.25 14.5)'
          />
          <path
            d='M15.25 10.5h-13A2.253 2.253 0 0 1 0 8.25v-6A2.253 2.253 0 0 1 2.25 0h13a2.253 2.253 0 0 1 2.25 2.25v6a2.253 2.253 0 0 1-2.25 2.25zM1.5 6v2.25a.751.751 0 0 0 .75.75h13a.751.751 0 0 0 .75-.75V6h-2.25a.75.75 0 1 1 0-1.5H16V2.25a.751.751 0 0 0-.751-.75h-13a.751.751 0 0 0-.75.75V4.5H3.75a.75.75 0 0 1 0 1.5z'
            transform='translate(3.25 3.5)'
          />
          <path
            d='M3.146.146 2 1.292.853.146a.5.5 0 0 0-.707.707L1.292 2H.875a.5.5 0 0 0 0 1H1.5v.25H.875a.5.5 0 1 0 0 1H1.5v.25a.5.5 0 0 0 1 0v-.25h.625a.5.5 0 1 0 0-1H2.5V3h.625a.5.5 0 0 0 0-1h-.418L3.853.853a.5.5 0 0 0-.707-.707'
            transform='translate(10 6.25)'
          />
        </g>
      </svg>
    </SvgIcon>
  );
};
