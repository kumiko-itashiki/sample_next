import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const SearchIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path d='M11.5 1.25C5.84 1.25 1.25 5.84 1.25 11.5S5.84 21.75 11.5 21.75s10.25-4.59 10.25-10.25S17.16 1.25 11.5 1.25zm0 1.5a8.75 8.75 0 1 1 0 17.5 8.75 8.75 0 0 1 0-17.5zM19.47 19.47a.75.75 0 0 1 .976-.073l.084.073 2 2a.75.75 0 0 1-.976 1.133l-.084-.073-2-2a.75.75 0 0 1 0-1.06z' />
        </g>
      </svg>
    </SvgIcon>
  );
};
