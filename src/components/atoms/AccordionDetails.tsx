import { AccordionDetails as MuiAccordionDetails } from '@mui/material';
import type { AccordionDetailsProps } from '@mui/material';
import { styled } from '@mui/system';

/**
 * [atoms] MuiのAccordionDetailsにプロジェクト用themeを適用したコンポーネント
 * @param props - AccordionDetailsProps
 */
export const AccordionDetails = styled(
  MuiAccordionDetails,
)<AccordionDetailsProps>(({ theme }) => ({
  color: theme.palette.black.main,
}));
