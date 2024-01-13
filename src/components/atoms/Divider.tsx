import { Divider as MuiDivider } from '@mui/material';
import type { DividerProps } from '@mui/material';
import { styled } from '@mui/system';

/** Dividerのpropsの型 */
export interface StyledDividerProps extends DividerProps {
  borderColorLight?: boolean;
}

/**
 * [atoms] MuiのDividerにプロジェクト用themeを適用したコンポーネント
 * @param props - StyledDividerProps
 */
export const Divider = styled(MuiDivider, {
  shouldForwardProp: (props) => props !== 'borderColorLight',
})<StyledDividerProps>(({ theme, borderColorLight = true }) => ({
  ...(borderColorLight
    ? { borderColor: theme.palette.gray.light } // 罫線のデフォルト色
    : { borderColor: '#cfd8dc' }), //borderColorLightがfalseの場合、罫線は暗めの色
}));
