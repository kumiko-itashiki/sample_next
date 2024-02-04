import { Chip as MuiChip } from '@mui/material';
import type { ChipProps } from '@mui/material';
import { styled } from '@mui/system';

/** Chipのpropsの型 */
export interface StyledChipProps extends ChipProps {
  bgColor?:
    | 'primary'
    | 'blue'
    | 'brown'
    | 'graySub'
    | 'grayLight'
    | 'white'
    | 'alert'
    | string;
  rounded?: 'full' | 'medium' | 'small' | string;
  scale?: 'medium' | 'small' | 'tiny' | string;
  borderSize?: string;
  borderType?: 'solid' | string;
  borderColor?: 'primary' | string;
}

/**
 * [atoms] MuiのChipにプロジェクト用themeを適用したコンポーネント
 * @param props - StyledChipProps
 */
export const Chip = styled(MuiChip, {
  shouldForwardProp: (props) =>
    ['bgColor', 'borderSize', 'borderType', 'borderColor'].every(
      (prop) => prop !== props,
    ),
})<StyledChipProps>(
  ({
    bgColor,
    rounded = 'full',
    scale = 'medium',
    borderSize,
    borderType = 'solid',
    borderColor = 'primary',
    theme,
  }) => ({
    height: 'auto',
    ...(bgColor === 'primary'
      ? { background: theme.palette.primary.main }
      : bgColor === 'blue'
      ? {
          backgroundColor: theme.palette.blue.main,

          '&:hover': {
            backgroundColor: theme.palette.blue.main,
          },
        }
      : bgColor === 'brown'
      ? {
          backgroundColor: theme.palette.beige.sub,

          '&:hover': {
            backgroundColor: theme.palette.beige.sub,
          },
        }
      : bgColor === 'graySub'
      ? {
          backgroundColor: theme.palette.gray.sub,
        }
      : bgColor === 'grayLight'
      ? {
          backgroundColor: theme.palette.gray.light,
        }
      : bgColor === 'white'
      ? {
          backgroundColor: theme.palette.white.main,
        }
      : bgColor === 'alert'
      ? {
          backgroundColor: theme.palette.alert.main,
        }
      : { background: bgColor }),
    ...(scale == 'medium'
      ? {
          '.MuiChip-label': {
            padding: '7px 8px',
            lineHeight: '0',
            '.MuiTypography-root': {
              lineHeight: '1.2',
              whiteSpace: 'normal',
            },
          },
        }
      : scale == 'small'
      ? {
          '.MuiChip-label': {
            padding: '5px 8px',
            lineHeight: '0',
            '.MuiTypography-root': {
              lineHeight: '1.2',
              whiteSpace: 'normal',
            },
          },
        }
      : scale == 'tiny'
      ? {
          '.MuiChip-label': {
            padding: '1px 4px',
          },
        }
      : null),
    ...(rounded == 'full'
      ? { borderRadius: '100vw' }
      : rounded == 'medium'
      ? { borderRadius: '4px' }
      : rounded == 'small'
      ? { borderRadius: '2px' }
      : { borderRadius: rounded }),
    border: `${borderSize} ${borderType} ${
      borderColor === 'primary' ? theme.palette.primary.main : null
    }`,
  }),
);
