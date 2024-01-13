import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const CloseOutlineIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx} viewBox='0 0 16 16'>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <circle
          cx='7.5'
          cy='7.5'
          r='7.5'
          style={{
            fill: '#212121',
            opacity: 0.2,
          }}
        />
        <path
          data-name='Vector'
          d='m0 5 5-5M5 5 0 0'
          transform='translate(5.204 5.204)'
          style={{
            fill: 'none',
            stroke: '#fff',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.5px',
            strokeDasharray: '0 0',
          }}
        />
      </svg>
    </SvgIcon>
  );
};
