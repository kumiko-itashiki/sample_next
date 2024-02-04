import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const LocationIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path d='M12 6.44a3.87 3.87 0 1 0 0 7.74 3.87 3.87 0 0 0 0-7.74zm0 1.5a2.37 2.37 0 1 1 0 4.74 2.37 2.37 0 0 1 0-4.74z' />
          <path d='M2.889 8.324c-1.05 4.638 1.046 8.965 4.98 12.756a5.944 5.944 0 0 0 8.252 0c3.942-3.786 6.04-8.106 4.99-12.746-2.136-9.439-16.075-9.448-18.222-.01zm16.76.342c.909 4.017-.965 7.872-4.568 11.333a4.444 4.444 0 0 1-6.171 0c-3.595-3.464-5.468-7.327-4.558-11.343C6.124.863 17.605.784 19.585 8.406l.064.26z' />
        </g>
      </svg>
    </SvgIcon>
  );
};
