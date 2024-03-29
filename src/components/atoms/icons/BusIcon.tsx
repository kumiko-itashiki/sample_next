import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const BusIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <path d='M16.9 1.25a3.86 3.86 0 0 1 3.85 3.85v13.8a3.853 3.853 0 0 1-3.85 3.85H7.1a3.86 3.86 0 0 1-3.85-3.85V5.1A3.86 3.86 0 0 1 7.1 1.25zm2.35 12.372a2.251 2.251 0 0 1-.75.128h-13c-.263 0-.515-.045-.75-.128V18.9a2.36 2.36 0 0 0 2.35 2.35h9.8a2.353 2.353 0 0 0 2.35-2.35zM8.504 16.45a1.25 1.25 0 0 1 .128 2.493l-.128.007a1.25 1.25 0 0 1-.137-2.494l.137-.006zm7 0a1.25 1.25 0 0 1 .128 2.493l-.128.007a1.25 1.25 0 0 1-.137-2.494l.137-.006zm2.997-7.7h-13a.748.748 0 0 0-.75.75v2c0 .416.334.75.75.75h13c.416 0 .75-.334.75-.75v-2a.748.748 0 0 0-.75-.75zm-1.6-6H7.1A2.36 2.36 0 0 0 4.75 5.1v2.278c.235-.083.487-.128.75-.128h13c.263 0 .516.045.75.128V5.1a2.36 2.36 0 0 0-2.35-2.35zm-2.4 1.5a.75.75 0 0 1 .102 1.493l-.102.007h-5a.75.75 0 0 1-.102-1.493L9.5 4.25h5z' />
      </svg>
    </SvgIcon>
  );
};
