import { Modal as MuiModal } from '@mui/material';
import type { ModalProps } from '@mui/material';
import { styled } from '@mui/system';

/**
 * [atoms] MuiのModalにプロジェクト用themeを適用したコンポーネント
 * @param props - ModalProps
 */
export const Modal = styled(MuiModal)<ModalProps>(() => ({}));
