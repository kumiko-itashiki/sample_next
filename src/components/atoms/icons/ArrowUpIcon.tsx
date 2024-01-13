import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const ArrowUpIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <path d='M3.55 15.62a.75.75 0 0 1-.073-.976l.073-.084 6.52-6.52a2.736 2.736 0 0 1 3.724-.128l.136.128 6.52 6.52a.75.75 0 0 1-.976 1.133l-.084-.073-6.52-6.52a1.237 1.237 0 0 0-1.64-.089l-.1.09-6.52 6.52a.75.75 0 0 1-1.06 0z' />
      </svg>
    </SvgIcon>
  );
};
