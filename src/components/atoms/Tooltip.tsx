import { Tooltip as MuiTooltip, tooltipClasses } from '@mui/material';
import type { TooltipProps } from '@mui/material';
import { styled } from '@mui/system';

/**
 * [atoms] MuiのにTooltipプロジェクト用themeを適用したコンポーネント
 * @param props -　TooltipProps
 */
export const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.blue.sub,
    position: 'absolute',
    top: '0',
    left: '0',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.blue.sub,
    color: theme.palette.white.main,
    maxWidth: 128,
    fontSize: '12px',
    fontFamily: 'HiraginoSans-W3',
    lineHeight: 1.5,
    borderRadius: '4px',
    padding: '8px 16px 16px',
  },
  [`& .${tooltipClasses.tooltipPlacementBottom}.MuiTooltip-tooltip.MuiTooltip-tooltipArrow `]:
    {
      marginTop: '4px',
    },
}));
