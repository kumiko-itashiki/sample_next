import { FormLabel as MuiFormLabel } from '@mui/material';
import type { FormLabelProps } from '@mui/material';
import { styled } from '@mui/system';

/**
 * [atoms] MuiのFormLabelにプロジェクト用themeを適用したコンポーネント
 * @param props - FormLabelProps
 */
export const FormLabel = styled(MuiFormLabel)<FormLabelProps>(() => ({}));
