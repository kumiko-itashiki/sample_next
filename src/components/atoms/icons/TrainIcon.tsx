import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const TrainIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path
            d='M15 20a.742.742 0 0 1-.53-.22l-1.5-1.5a.721.721 0 0 1-.17-.28H5.2a.723.723 0 0 1-.171.28l-1.5 1.5a.75.75 0 0 1-1.06 0 .752.752 0 0 1 0-1.06l.771-.771A3.758 3.758 0 0 1 0 14.25V3.75A3.755 3.755 0 0 1 3.75 0h10.5A3.755 3.755 0 0 1 18 3.75v10.5a3.758 3.758 0 0 1-3.241 3.7l.771.771A.75.75 0 0 1 15 20zM1.5 10.75v3.5a2.253 2.253 0 0 0 2.25 2.25h10.5a2.253 2.253 0 0 0 2.25-2.25v-3.5zM3.75 1.5A2.253 2.253 0 0 0 1.5 3.75v5.5h15v-5.5a2.253 2.253 0 0 0-2.25-2.25z'
            transform='translate(3 2)'
          />
          <path
            d='M9.75 0h-9a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5'
            transform='translate(6.75 4.25)'
          />
          <path
            d='M1 2a1 1 0 1 0-1-1 1 1 0 0 0 1 1'
            transform='translate(7 14.75)'
          />
          <path
            d='M1 2a1 1 0 1 0-1-1 1 1 0 0 0 1 1'
            transform='translate(15 14.75)'
          />
        </g>
      </svg>
    </SvgIcon>
  );
};
