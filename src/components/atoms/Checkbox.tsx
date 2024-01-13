import { Checkbox as MuiCheckbox } from '@mui/material';
import type { CheckboxProps } from '@mui/material';
import { styled } from '@mui/system';

/**
 * [atoms] MuiのCheckboxにプロジェクト用themeを適用したコンポーネント
 * @param props - CheckboxProps
 */
export const Checkbox = styled(MuiCheckbox)<CheckboxProps>(({ theme }) => ({
  color: theme.palette.gray.sub,
}));
