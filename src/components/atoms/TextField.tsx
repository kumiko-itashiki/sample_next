import { TextField as MuiTextField } from '@mui/material';
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { styled } from '@mui/system';

/** TextFieldのpropsの型 */
type TextFieldProps = MuiTextFieldProps & {
  border?: boolean;
};

/**
 * [atoms] MuiのTextFieldにプロジェクト用themeを適用したコンポーネント
 * @param props -　TextFieldProps
 */
export const TextField = styled(MuiTextField)<TextFieldProps>(
  ({ theme, border }) => ({
    backgroundColor: theme.palette.white.main,
    borderRadius: '8px',
    '.MuiOutlinedInput-root': {
      borderRadius: '8px',
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.white.main,
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.white.main,
      },
      '&.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.alert.main,
        borderRadius: '8px',
        borderWidth: '1px',
      },
    },
    '.MuiOutlinedInput-input': {
      height: '1em',
      '::placeholder': {
        color: theme.palette.gray.sub,
        opacity: '0.7',
      },
    },
    //枠のデザインのスタイル分岐
    ...(border
      ? {
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: theme.palette.gray.sub,
          boxShadow: 'none',
        }
      : { boxShadow: '0 2px 4px 0 rgba(144,164,174, 0.2)' }),
  }),
);
