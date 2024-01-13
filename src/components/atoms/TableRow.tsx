import { TableRow as MuiTableRow } from '@mui/material';
import type { TableRowProps } from '@mui/material';
import { styled } from '@mui/system';

/**
 * [atoms] MuiのTableRowにプロジェクト用themeを適用したコンポーネント
 * @param props - TableRowProps
 */
export const TableRow = styled(MuiTableRow)<TableRowProps>(() => ({}));
