import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const TrytIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 30 30'
      >
        <g>
          <path
            d='M10.428 5.381v2.9L0 18.7V30l10.428-10.426V24.1l5.372-5.372V0z'
            transform='translate(14.196)'
            fill='#006428'
          />
          <path
            d='M24.624 5.381h-2.9L11.3 15.8H0L10.422 5.381h-4.53L11.268 0H30z'
            fill='#3cb37a'
          />
        </g>
      </svg>
    </SvgIcon>
  );
};
