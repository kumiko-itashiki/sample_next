import { FormControlLabel as MuiFormControlLabel } from '@mui/material';
import type { FormControlLabelProps } from '@mui/material';
import { styled } from '@mui/system';

/**
 * [atoms] MuiのFormControlLabelにプロジェクト用themeを適用したコンポーネント
 * @param props - FormControlLabelProps
 */
export const FormControlLabel = styled(
  MuiFormControlLabel,
)<FormControlLabelProps>(() => ({}));
