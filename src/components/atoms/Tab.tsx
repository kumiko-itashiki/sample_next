import { Tab as MuiTab } from '@mui/material';
import type { TabProps } from '@mui/material';
import { styled } from '@mui/system';

/** Tabのpropsの型 */
interface StyledTabProps extends TabProps {
  isActive?: boolean;
  isSquare?: boolean;
}

/**
 * [atoms] MuiのTabにプロジェクト用themeを適用したコンポーネント
 * @param props - StyledTabProps
 */
export const Tab = styled(MuiTab, {
  shouldForwardProp: (props) =>
    ['isActive', 'isSquare'].every((prop) => prop !== props),
})<StyledTabProps>(({ theme, isActive, isSquare }) => ({
  minWidth: '45%',
  minHeight: '30px',
  // TODO 色指定の方法を見直す
  ...(isActive
    ? { backgroundColor: theme.palette.primary.pale }
    : { backgroundColor: '#fff', color: theme.palette.gray.sub }),
  // 直角かどうか
  ...(isSquare ? { borderRadius: '0' } : { borderRadius: '100px' }),
}));
