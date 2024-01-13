import { Button as MuiButton } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import { styled } from '@mui/system';

/** Buttonのpropsの型 */
export interface StyledButtonProps extends ButtonProps {
  bgColor?: 'primary' | 'secondary' | 'white' | 'disable' | string;
  textColor?: string;
  rounded?: 'circle' | 'rounded' | string;
  borderSize?: string;
  borderType?: 'solid' | 'dotted';
  borderColor?: 'primary' | 'disable' | string;
  shadow?: 'primary' | 'gray' | string;
}

/**
 * [atoms] MuiのButtonにプロジェクト用themeを適用したコンポーネント
 * @param props - StyledButtonProps
 */
export const Button = styled(MuiButton, {
  shouldForwardProp: (props) =>
    ['borderType', 'bgColor', 'textColor', 'borderColor', 'borderSize'].every(
      (prop) => prop !== props,
    ),
})<StyledButtonProps>(
  ({
    bgColor,
    size = 'medium',
    textColor,
    borderSize,
    borderType = 'solid',
    borderColor = 'primary',
    rounded = 'circle',
    shadow,
    theme,
  }) => ({
    '&&': {
      ...(bgColor === 'primary'
        ? { background: theme.palette.gradation.primary }
        : bgColor === 'secondary'
        ? { background: theme.palette.primary.main }
        : bgColor === 'white'
        ? { background: theme.palette.white.main }
        : bgColor === 'disable'
        ? { background: theme.palette.gray.sub }
        : { background: bgColor }),
      ...(size === 'small'
        ? { paddingTop: '6px', paddingBottom: '7px' }
        : 'medium'
        ? { paddingTop: '13px', paddingBottom: '13px' }
        : 'large'
        ? { paddingTop: '13px', paddingBottom: '13px' }
        : null),
      color: textColor,
      ...(rounded === 'circle'
        ? { borderRadius: '100vw' }
        : rounded === 'rounded'
        ? { borderRadius: '4px' }
        : { borderRadius: rounded }),
      ...(shadow === 'primary'
        ? {
            boxShadow: `0 16px 32px 0 ${theme.palette.shadow.main}, 0 4px 8px 0 ${theme.palette.shadow.sub}, 0 2px 4px 0 ${theme.palette.shadow.main}`,
          }
        : shadow === 'gray'
        ? { boxShadow: `0 2px 4px 0 ${theme.palette.shadow.main}` }
        : shadow === 'light'
        ? { boxShadow: `0 3px 6px 0 ${theme.palette.shadow.main}` }
        : { boxShadow: shadow }),
      border: `${borderSize} ${borderType} ${
        // borderColor === 'primary' ? theme.palette.primary.main : null
        borderColor === 'primary'
          ? theme.palette.primary.main
          : borderColor === 'disable'
          ? theme.palette.gray.sub
          : borderColor
      }`,
    },
  }),
);
