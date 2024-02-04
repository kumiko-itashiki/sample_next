import { Link } from '@mui/material';
import type { LinkProps } from '@mui/material';
import { styled } from '@mui/system';

/** Linkのpropsの型 */
export interface MuiLinkProps extends LinkProps {
  borderBottomType?: string;
  htmlColor?: string;
}

/**
 * [atoms] MuiのLinkにプロジェクト用themeを適用したコンポーネント
 * @param props - MuiLinkProps
 */
export const MuiLink = styled(Link, {
  shouldForwardProp: (props) =>
    ['borderBottomType', 'htmlColor'].every((prop) => prop !== props),
})<MuiLinkProps>(({ borderBottomType = '1px solid', htmlColor, theme }) => ({
  ...(htmlColor == 'gray'
    ? { color: theme.palette.gray.main }
    : { color: theme.palette.primary.main }),
  borderBottom: borderBottomType,
  textDecoration: 'none',
  cursor: 'pointer',
}));
