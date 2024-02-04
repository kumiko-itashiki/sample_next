import { TextareaAutosize as MuiTextareaAutosize } from '@mui/material';
import type { TextareaAutosizeProps as MuiTextareaAutosizeProps } from '@mui/material';
import { styled } from '@mui/system';

/**
 * [atoms] MuiのMuiTextareaAutosizeにプロジェクト用themeを適用したコンポーネント
 * @param props -　MuiTextareaAutosizeProps
 */
export const TextareaAutosize = styled(
  MuiTextareaAutosize,
)<MuiTextareaAutosizeProps>(() => ({}));
