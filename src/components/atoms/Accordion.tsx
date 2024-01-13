import { Accordion as MuiAccordion } from '@mui/material';
import type { AccordionProps as MuiAccordionProps } from '@mui/material';
import { styled } from '@mui/system';

/** Buttonのpropsの型 */
export interface AccordionProps extends MuiAccordionProps {
  summary?: string;
  detail?: string;
}

/**
 * [atoms] MuiのAccordionにプロジェクト用themeを適用したコンポーネント
 * @param props - AccordionProps
 */
export const Accordion = styled(MuiAccordion)<AccordionProps>(() => ({
  boxShadow: '0px 0px 0px 0px',
  '&.MuiAccordion-root:before': {
    content: 'none',
  },
}));
