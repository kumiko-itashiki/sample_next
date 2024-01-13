import { Typography } from '../atoms/Typography';

interface UpdateTimeProps {
  updatedAt: string;
}

/**
 * @param props
 */
export const UpdateTime = ({ updatedAt }: UpdateTimeProps) => {
  return (
    <Typography variant='sinN5' sx={{ color: 'gray.sub' }}>
      最終更新：{updatedAt}
    </Typography>
  );
};
