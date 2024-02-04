import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from '@/components/atoms/icons/SvgIcon';

export const FlagIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'>
        <g data-name='flag'>
          <path
            d='M1.4 0a1.4 1.4 0 0 1 1.378 1.206l.013.189V38.6a1.4 1.4 0 0 1-2.778.189L0 38.6V1.4A1.4 1.4 0 0 1 1.4 0z'
            transform='translate(8.861)'
          />
          <path
            d='M22.233 0c6.132 0 7.937 4.116 3.854 8.437l-.263.27-2.232 2.233a2.24 2.24 0 0 0-.175 3.06l2.407 2.405c4.295 4.295 2.6 8.531-3.222 8.7l-.37.005H1.4a1.4 1.4 0 0 1-.189-2.778l.189-.013h20.833c3.544 0 4.19-1.251 1.853-3.7l-2.4-2.41a4.972 4.972 0 0 1-.3-6.995l.236-.251 2.233-2.233c2.586-2.586 2.175-3.865-1.285-3.94L1.4 2.791A1.4 1.4 0 0 1 1.206.013L1.4 0z'
            transform='translate(8.861 3.721)'
          />
        </g>
      </svg>
    </SvgIcon>
  );
};
