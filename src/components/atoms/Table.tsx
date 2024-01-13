import { Table as MuiTable } from '@mui/material';
import type { TableProps } from '@mui/material';
import { styled } from '@mui/system';

/**
 * [atoms] MuiのTableにプロジェクト用themeを適用したコンポーネント
 * @param props - TableProps
 */
export const Table = styled(MuiTable)<TableProps>(() => ({}));
