import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const SmsIcon = ({ sx, htmlColor }: SvgIconProps) => {
  const getColor = () => {
    switch (htmlColor) {
      case 'primary':
        return '#3cB37a';
        break;
      case 'gray':
        return '#90a4ae';
        break;
      case 'gray.main':
        return '#616161';
        break;
      case 'white':
        return '#ffffff';
        break;
      default:
        return '#90a4ae';
    }
  };

  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <g
        stroke={getColor()}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeDasharray='0,0'
        fill='none'
        fillRule='evenodd'
      >
        <path d='M7 20.5c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5H7z' />
        <path d='m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9' />
      </g>
    </SvgIcon>
  );
};
