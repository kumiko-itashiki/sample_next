import { TableCell as MuiTableCell } from '@mui/material';
import type { TableCellProps } from '@mui/material';
import { styled } from '@mui/system';

/**
 * [atoms] MuiのTableCellにプロジェクト用themeを適用したコンポーネント
 * @param props - TableCellProps
 */
export const TableCell = styled(MuiTableCell)<TableCellProps>(({ theme }) => ({
  color: theme.palette.black.main,
}));
