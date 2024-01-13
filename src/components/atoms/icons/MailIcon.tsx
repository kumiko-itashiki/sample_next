import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const MailIcon = ({ sx, htmlColor = 'white' }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g transform='translate(-173.594 104.053)'>
          <path d='M191.094-82.3h-10c-3.654,0-5.75-2.1-5.75-5.75v-7c0-3.655,2.1-5.75,5.75-5.75h10c3.655,0,5.75,2.1,5.75,5.75v7C196.844-84.4,194.749-82.3,191.094-82.3Zm-10-17c-2.86,0-4.25,1.39-4.25,4.25v7c0,2.86,1.39,4.25,4.25,4.25h10c2.86,0,4.25-1.39,4.25-4.25v-7c0-2.86-1.39-4.25-4.25-4.25Z' />
          <path d='M186.081-90.687a3.888,3.888,0,0,1-2.311-.762l-3.145-2.519a.75.75,0,0,1-.116-1.054.749.749,0,0,1,1.054-.117l3.12,2.5a2.4,2.4,0,0,0,2.837-.019l3.106-2.481a.751.751,0,0,1,1.054.118.749.749,0,0,1-.118,1.054l-3.13,2.5A3.961,3.961,0,0,1,186.081-90.687Z' />
          <g opacity='0'>
            <path d='M198.594-79.053h-25v-25h25Zm-24-1h23v-23h-23Z' />
          </g>
        </g>
      </svg>
    </SvgIcon>
  );
};