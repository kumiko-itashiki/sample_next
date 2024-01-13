import { styled } from '@mui/system';
import * as React from 'react';

const DtComponent = styled('dt')({});

/** Dtのpropsの型 */
export interface DtProps {
  children: React.ReactNode;
}

/**
 * [atoms] HTMLのdtタグ
 * @param props - DtProps
 */
export const Dt = ({ children }: DtProps) => {
  return <DtComponent>{children}</DtComponent>;
};
