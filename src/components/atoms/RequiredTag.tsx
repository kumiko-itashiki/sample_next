import { Chip } from '@/components/atoms/Chip';
import { Typography } from '@/components/atoms/Typography';

/** RequiredTagのpropsの型 */
interface RequiredTagComponentProps {
  isRequired?: boolean;
}

/**
 * [atoms] 必須タグ用コンポーネント
 * @param props - RequiredTagComponentProps
 */
export const RequiredTag = ({
  isRequired = false,
}: RequiredTagComponentProps) => {
  return (
    <Chip
      rounded='small'
      bgColor={isRequired ? 'alert' : 'primary'}
      scale='tiny'
      sx={{
        ml: 0,
      }}
      label={
        <Typography
          variant='sinN5'
          sx={{
            color: 'white.main',
            display: 'block',
            lineHeight: 'normal',
          }}
        >
          {isRequired ? '必須' : '任意'}
        </Typography>
      }
    />
  );
};
