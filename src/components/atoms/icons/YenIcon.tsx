import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const YenIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path d='M15 1.25H9C3.586 1.25 1.25 3.586 1.25 9v6c0 5.414 2.336 7.75 7.75 7.75h6c5.414 0 7.75-2.336 7.75-7.75V9c0-5.414-2.336-7.75-7.75-7.75zm0 1.5c4.586 0 6.25 1.664 6.25 6.25v6c0 4.586-1.664 6.25-6.25 6.25H9c-4.496 0-6.184-1.6-6.248-5.984L2.75 9c0-4.496 1.6-6.184 5.984-6.248L15 2.75z' />
          <path d='M12.684 18v-2.047h2.359v-1.07h-2.36v-1.235h2.36v-1.07h-1.875l3.008-6h-1.492l-2.704 5.774L9.31 6.578h-1.5l2.96 6H8.942v1.07h2.352v1.235H8.941v1.07h2.352V18z' />
        </g>
      </svg>
    </SvgIcon>
  );
};
