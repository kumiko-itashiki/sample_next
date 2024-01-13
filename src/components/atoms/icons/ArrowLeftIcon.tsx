import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const ArrowLeftIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <path d='M16.538 20.45a.75.75 0 0 1-.977.073l-.084-.073-6.52-6.52a2.736 2.736 0 0 1-.127-3.724l.127-.136 6.52-6.52a.75.75 0 0 1 1.133.976l-.072.084-6.52 6.52a1.237 1.237 0 0 0-.09 1.64l.09.1 6.52 6.52a.75.75 0 0 1 0 1.06z' />
      </svg>
    </SvgIcon>
  );
};
