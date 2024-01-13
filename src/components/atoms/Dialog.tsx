import { Dialog as MuiDialog } from '@mui/material';
import type { DialogProps } from '@mui/material';
import { styled } from '@mui/system';

/**
 * [atoms] MuiのDialogにプロジェクト用themeを適用したコンポーネント
 * @param props - DialogProps
 */
export const Dialog = styled(MuiDialog)<DialogProps>(() => ({}));
