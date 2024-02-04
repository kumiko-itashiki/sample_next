import { Box as MuiBox } from "@mui/material";
import type { BoxProps } from "@mui/material";
import { styled } from "@mui/system";

/** Boxのpropsの型 */
interface StyledBoxProps extends BoxProps {
  bgColor?: "primary" | string;
  shadow?: "primary" | "gray" | string;
}

/**
 * [atoms] MuiのBoxにプロジェクト用themeを適用したコンポーネント
 * @param props - StyledBoxProps
 */
export const Box = styled(MuiBox, {
  shouldForwardProp: (props) => props !== "bgColor",
})<StyledBoxProps>(({ bgColor, shadow, theme }) => ({
  ...(bgColor == "primary"
    ? { background: theme.palette.primary.pale }
    : bgColor == "gray"
    ? { background: theme.palette.gray.light }
    : bgColor == "white"
    ? { background: theme.palette.white.main }
    : { background: bgColor }),
  ...(shadow == "primary"
    ? { boxShadow: `0 2px 4px 0 ${theme.palette.primary.main}` }
    : shadow == "gray"
    ? { boxShadow: `0 2px 4px 0 ${theme.palette.shadow.main}` }
    : { boxShadow: shadow }),
}));
