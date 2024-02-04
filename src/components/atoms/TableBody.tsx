import { TableBody as MuiTableBody } from '@mui/material';
import type { TableBodyProps } from '@mui/material';
import { styled } from '@mui/system';

/**
 * [atoms] MuiのTableBodyにプロジェクト用themeを適用したコンポーネント
 * @param props - TableBodyProps
 */
export const TableBody = styled(MuiTableBody)<TableBodyProps>(() => ({}));
