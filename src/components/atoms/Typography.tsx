import { Typography as MuiTypography } from '@mui/material';
import type { TypographyProps, TypographyVariantsOptions } from '@mui/material';
import { styled } from '@mui/system';

import { ExOmit } from '@/util/type';

/** Typographyの型にReact.ElementTypeをオプショナルで追加 */
interface IExTypographyProps extends TypographyProps {
  component?: React.ElementType;
}

// TODO: ?外す　（影響範囲広そうなので一旦？つけてます）
/** Typographyの型 */
type TProps = ExOmit<IExTypographyProps, 'variant'> & {
  variant?: keyof TypographyVariantsOptions;
};

/**
 * [atoms] MuiのTypographyにプロジェクト用themeを適用したコンポーネント
 * @param props - TProps
 */
export const Typography = styled(MuiTypography)<TProps>(({ theme, color }) => ({
  color: color ?? theme.palette.black.main,
}));
