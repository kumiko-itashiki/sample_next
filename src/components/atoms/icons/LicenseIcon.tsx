import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const LicenseIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path
            d='M16.25 15H3.75A3.755 3.755 0 0 1 0 11.25v-7.5A3.755 3.755 0 0 1 3.75 0h12.5A3.754 3.754 0 0 1 20 3.75v7.5A3.754 3.754 0 0 1 16.25 15zM3.75 1.5A2.253 2.253 0 0 0 1.5 3.75v7.5a2.253 2.253 0 0 0 2.25 2.25h12.5a2.253 2.253 0 0 0 2.25-2.25v-7.5a2.253 2.253 0 0 0-2.25-2.25z'
            transform='translate(2 4.5)'
          />
          <path
            d='M3.75 0h-3a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5'
            transform='translate(5.25 11.25)'
          />
          <path
            d='M3.75 0h-3a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5'
            transform='translate(5.25 14.25)'
          />
          <path
            d='M5.25 0H.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5'
            transform='translate(5.25 8.25)'
          />
          <path
            d='M5.649 5.777a.751.751 0 0 1-.614-.318 2.236 2.236 0 0 0-3.672 0 .757.757 0 0 1-.615.317A.748.748 0 0 1 .137 4.6a3.746 3.746 0 0 1 1.205-1.08A2.225 2.225 0 0 1 .95 2.25a2.25 2.25 0 1 1 4.108 1.266A3.739 3.739 0 0 1 6.262 4.6a.75.75 0 0 1-.613 1.182zM3.2 1.5a.75.75 0 1 0 .75.75.751.751 0 0 0-.75-.75z'
            transform='translate(12.25 9.224)'
          />
        </g>
      </svg>
    </SvgIcon>
  );
};
