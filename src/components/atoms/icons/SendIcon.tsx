import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const SendIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M2.358 18a2.182 2.182 0 0 1-2.011-.936c-.67-1.086-.356-3.047.884-5.523l.87-1.73a1.815 1.815 0 0 0 0-1.61L1.23 6.458C-.009 3.984-.322 2.023.349.937A2.184 2.184 0 0 1 2.362 0a9.686 9.686 0 0 1 4.1 1.229l8.56 4.28C16.877 6.437 17.9 7.677 17.9 9s-1.023 2.561-2.88 3.49l-8.56 4.28A9.712 9.712 0 0 1 2.358 18zm4.033-9.751A.751.751 0 0 0 5.64 9a.76.76 0 0 0 .751.75h5.4a.75.75 0 0 0 0-1.5z'
          transform='translate(3.049 3)'
          data-name='send'
        />
      </svg>
    </SvgIcon>
  );
};
