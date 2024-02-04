import { TableContainer as MuiTableContainer } from '@mui/material';
import type { TableContainerProps } from '@mui/material';
import { styled } from '@mui/system';

/**
 * [atoms] MuiのTableContainerにプロジェクト用themeを適用したコンポーネント
 * @param props - TableContainerProps
 */
export const TableContainer = styled(MuiTableContainer)<TableContainerProps>(
  () => ({}),
);
