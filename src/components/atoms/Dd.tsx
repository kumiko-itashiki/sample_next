import { styled } from '@mui/system';
import * as React from 'react';

const DdComponent = styled('dd')({});

/** Ddのpropsの型 */
export interface DdProps {
  children: React.ReactNode;
}

/**
 * [atoms] HTMLのddタグ
 * @param props - DdProps
 */
export const Dd = ({ children }: DdProps) => {
  return <DdComponent sx={{ color: 'black.main' }}>{children}</DdComponent>;
};
