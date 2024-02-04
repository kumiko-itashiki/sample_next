import { Input as MuiInput } from '@mui/material';
import type { InputProps as MuiInputProps } from '@mui/material';
import { styled } from '@mui/system';

/** Inputのpropsの型 */
type InputProps = MuiInputProps & {
  border: boolean;
};

/**
 * [atoms] MuiのInputにプロジェクト用themeを適用したコンポーネント
 * @param props - InputProps
 */
export const Input = styled(MuiInput)<InputProps>(({ theme, border }) => ({
  //枠のデザインのスタイル分岐
  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.white.main,
    },
  },
  ...(border
    ? {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme.palette.gray.sub,
        boxShadow: 'none',
      }
    : { boxShadow: '0 2px 4px 0 rgba(144,164,174, 0.2)' }),
}));
