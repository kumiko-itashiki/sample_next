import type { SxProps } from '@mui/material';
import React from 'react';

import { Box } from '@/components/atoms/Box';

/** Tagのpropsの型 */
interface TagComponentProps {
  children?: React.ReactNode;
  sx?: SxProps;
}

/**
 * [atoms]　タグ用コンポーネント
 * @param props -　TagComponentProps
 */
export const Tag = ({ children, sx }: TagComponentProps) => {
  return (
    <Box component='span' sx={sx}>
      {children}
    </Box>
  );
};
