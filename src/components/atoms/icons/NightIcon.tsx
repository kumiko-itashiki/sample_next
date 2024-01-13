import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const NightIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path
            d='M9.562 19.562A9.965 9.965 0 0 1 .035 12.6a.751.751 0 0 1 .943-.943A8.5 8.5 0 0 0 11.66.978a.748.748 0 0 1 .94-.942 10 10 0 0 1-3.038 19.526zM2 13.438A8.5 8.5 0 1 0 13.437 2a10.06 10.06 0 0 1 .124 1.567A10 10 0 0 1 2 13.438z'
            transform='translate(2.439 2.219)'
          />
          <path
            d='m.573 2.853.927-.487.927.487-.177-1.032L3 1.09 1.963.939 1.5 0l-.464.939L0 1.09l.75.731z'
            transform='translate(9 2.941)'
          />
          <path
            d='M1.146 5.706 3 4.731l1.854.975L4.5 3.641 6 2.179l-2.073-.3L3 0l-.927 1.878L0 2.179l1.5 1.462z'
            transform='translate(2 7.05)'
          />
        </g>
      </svg>
    </SvgIcon>
  );
};
