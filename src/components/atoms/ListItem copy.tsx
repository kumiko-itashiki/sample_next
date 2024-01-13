import { ListItem as MuiListItem } from '@mui/material';
import type { ListItemProps } from '@mui/material';
import { styled } from '@mui/system';

/**
 * [atoms] MuiのListItemにプロジェクト用themeを適用したコンポーネント
 * @param props - ListItemProps
 */
export const ListItem = styled(MuiListItem)<ListItemProps>(() => ({
  padding: 0,
  margin: 0,
}));
