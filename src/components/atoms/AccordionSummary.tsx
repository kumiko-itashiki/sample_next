import { AccordionSummary as MuiAccordionSummary } from '@mui/material';
import type { AccordionSummaryProps } from '@mui/material';
import { styled } from '@mui/system';

/**
 * [atoms] MuiのAccordionSummaryにプロジェクト用themeを適用したコンポーネント
 * @param props - AccordionSummaryProps
 */
export const AccordionSummary = styled(
  MuiAccordionSummary,
)<AccordionSummaryProps>(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
  },
  '& .MuiAccordionSummary-content': { margin: '0' },
}));
