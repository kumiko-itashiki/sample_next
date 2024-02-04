import { MenuItem as MuiMenuItem } from '@mui/material';
import type { MenuItemProps } from '@mui/material';
import { styled } from '@mui/system';

/**
 * [atoms] MuiのMenuItemにプロジェクト用themeを適用したコンポーネント
 * @param props - MenuItemProps
 */
export const MenuItem = styled(MuiMenuItem)<MenuItemProps>(({ theme }) => ({
  color: theme.palette.black.main,
}));
