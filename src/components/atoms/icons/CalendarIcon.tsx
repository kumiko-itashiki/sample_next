import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const CalendarIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path
            d='M16.25 20H3.75A3.754 3.754 0 0 1 0 16.25v-11A3.754 3.754 0 0 1 3.75 1.5H4V.75a.75.75 0 0 1 1.5 0v.75h9V.75a.75.75 0 0 1 1.5 0v.75h.25A3.754 3.754 0 0 1 20 5.25v11A3.754 3.754 0 0 1 16.25 20zM1.5 9v7.25a2.253 2.253 0 0 0 2.25 2.25h12.5a2.253 2.253 0 0 0 2.25-2.25V9zm2.25-6A2.253 2.253 0 0 0 1.5 5.25V7.5h17V5.25A2.253 2.253 0 0 0 16.25 3H16v.75a.75.75 0 0 1-1.5 0V3h-9v.75a.75.75 0 0 1-1.5 0V3z'
            transform='translate(2 2)'
          />
          <path
            d='M1 2a1 1 0 1 0-1-1 1 1 0 0 0 1 1'
            transform='translate(6 13)'
          />
          <path
            d='M1 2a1 1 0 1 0-1-1 1 1 0 0 0 1 1'
            transform='translate(11 13)'
          />
          <path
            d='M1 2a1 1 0 1 0-1-1 1 1 0 0 0 1 1'
            transform='translate(16 13)'
          />
          <path
            d='M1 2a1 1 0 1 0-1-1 1 1 0 0 0 1 1'
            transform='translate(6 16.5)'
          />
          <path
            d='M1 2a1 1 0 1 0-1-1 1 1 0 0 0 1 1'
            transform='translate(11 16.5)'
          />
          <path
            d='M1 2a1 1 0 1 0-1-1 1 1 0 0 0 1 1'
            transform='translate(16 16.5)'
          />
        </g>
      </svg>
    </SvgIcon>
  );
};
