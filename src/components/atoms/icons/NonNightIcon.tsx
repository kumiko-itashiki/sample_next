import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const NonNightIcon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path
            d='m.573 2.853.927-.487.927.487-.177-1.032L3 1.09 1.964.939 1.5 0l-.463.939L0 1.09l.75.731z'
            transform='translate(9 3.16)'
          />
          <path
            d='M3.927 1.878 3 0l-.927 1.878L0 2.179l1.5 1.462-.354 2.065L3 4.731l1.854.975L4.5 3.641 6 2.179z'
            transform='translate(2 7.269)'
          />
          <path
            d='M1.09 8.927a9.929 9.929 0 0 0 1.575-5.365 10.014 10.014 0 0 0-.124-1.567 8.468 8.468 0 0 1 4.624 7.567A8.435 8.435 0 0 1 6 13.837l1.09 1.09a9.929 9.929 0 0 0 1.575-5.365A9.965 9.965 0 0 0 1.705.036a.75.75 0 0 0-.943.942 8.474 8.474 0 0 1 .4 2.584A8.435 8.435 0 0 1 0 7.837z'
            transform='translate(13.335 2.437)'
          />
          <path
            d='M19.25 20a.742.742 0 0 1-.53-.22l-2.22-2.217A9.964 9.964 0 0 1 .473 13.04a.75.75 0 0 1 .943-.943A8.432 8.432 0 0 0 9.442 10.5L.22 1.28A.75.75 0 0 1 1.28.22l18.5 18.5a.75.75 0 0 1-.53 1.28zM2.434 13.875A8.469 8.469 0 0 0 15.442 16.5L10.5 11.562a9.9 9.9 0 0 1-8.069 2.313z'
            transform='translate(2 2)'
          />
        </g>
      </svg>
    </SvgIcon>
  );
};
