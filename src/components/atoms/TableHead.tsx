import { TableHead as MuiTableHead } from '@mui/material';
import type { TableHeadProps } from '@mui/material';
import { styled } from '@mui/system';

/**
 * [atoms] MuiのTableHeadにプロジェクト用themeを適用したコンポーネント
 * @param props - TableHeadProps
 */
export const TableHead = styled(MuiTableHead)<TableHeadProps>(() => ({}));
