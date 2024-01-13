import { Radio as MuiRadio } from '@mui/material';
import type { RadioProps } from '@mui/material';
import { styled } from '@mui/system';

/**
 * [atoms] MuiのRadioにプロジェクト用themeを適用したコンポーネント
 * @param props - RadioProps
 */
export const Radio = styled(MuiRadio)<RadioProps>(({ theme }) => ({
  '&.MuiRadio-root .MuiSvgIcon-root': {
    color: theme.palette.gray.sub,
  },
  '&.MuiRadio-root.Mui-checked .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
  },
}));
