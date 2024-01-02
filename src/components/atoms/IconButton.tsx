import { IconButton as MuiIconButton } from '@mui/material';
import type { IconButtonProps } from '@mui/material';
import { styled } from '@mui/system';

/** IconButtonのpropsの型 */
interface StyledIconButtonProps extends IconButtonProps {
  bgColor?: 'primary' | 'secondary' | string;
  shadow?: 'primary' | 'gray' | string;
  textColor?: string;
}

/**
 * [atoms] MuiのIconButtonにプロジェクト用themeを適用したコンポーネント
 * @param props - StyledIconButtonProps
 */
export const IconButton = styled(MuiIconButton, {
  shouldForwardProp: (props) => props !== 'bgColor',
})<StyledIconButtonProps>(({ bgColor, shadow, theme }) => ({
  ...(bgColor == 'primary'
    ? { background: theme.palette.primary.pale }
    : bgColor == 'secondary'
    ? { background: theme.palette.accent.main }
    : bgColor == 'white'
    ? { background: theme.palette.white.main }
    : { background: bgColor }),
  ...(shadow == 'primary'
    ? { boxShadow: `0 1px 4px 0 ${theme.palette.primary.main}` }
    : shadow == 'gray'
    ? { boxShadow: `0 1px 4px 0 ${theme.palette.gray.sub}` }
    : { boxShadow: shadow }),
}));
