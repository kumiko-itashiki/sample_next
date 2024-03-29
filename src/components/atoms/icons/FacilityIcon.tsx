import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const FacilityIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path d='M22 21.25a.75.75 0 0 1 .102 1.493L22 22.75H2a.75.75 0 0 1-.102-1.493L2 21.25h20z' />
          <path d='M17 1.25H7C3.832 1.25 2.25 3.082 2.25 6v16c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V6c0-2.918-1.582-4.75-4.75-4.75zm0 1.5.224.004C19.35 2.826 20.25 3.937 20.25 6v15.25H3.75V6c0-2.134.964-3.25 3.25-3.25h10z' />
          <path d='M14.06 14.25H9.93c-.926 0-1.69.758-1.69 1.69V22c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75v-6.06a1.671 1.671 0 0 0-1.68-1.69zm0 1.5.059.009c.073.023.123.09.121.167l-.001 5.324h-4.5l.001-5.31c0-.101.09-.19.19-.19h4.13zM12 5.25a.75.75 0 0 1 .743.648L12.75 6v5a.75.75 0 0 1-1.493.102L11.25 11V6a.75.75 0 0 1 .75-.75z' />
          <path d='M14.5 7.75a.75.75 0 0 1 .102 1.493l-.102.007h-5a.75.75 0 0 1-.102-1.493L9.5 7.75h5z' />
        </g>
      </svg>
    </SvgIcon>
  );
};
