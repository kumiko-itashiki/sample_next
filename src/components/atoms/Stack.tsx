import { Stack as MuiStack } from '@mui/material';
import type { StackProps } from '@mui/material';
import { styled } from '@mui/system';

/**
 * [atoms] MuiのStackにプロジェクト用themeを適用したコンポーネント
 * @param props - StackProps
 */
export const Stack = styled(MuiStack)<StackProps>(() => ({}));
