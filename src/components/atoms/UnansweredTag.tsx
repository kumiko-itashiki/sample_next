import { Chip } from '@/components/atoms/Chip';
import { InformationIcon } from '@/components/atoms/icons/InformationIcon';
import { Stack } from '@/components/atoms/Stack';
import { Typography } from '@/components/atoms/Typography';

/** プロフィールにて使用されている未入力タグです */
export const UnansweredTag = ({}) => {
  return (
    <Chip
      rounded='rounded'
      bgColor='white'
      scale='small'
      sx={{ width: 'fit-content' }}
      label={
        <Stack direction='row' alignItems='center'>
          <InformationIcon
            sx={{
              color: 'accent.main',
              fontSize: '16px',
              mr: 0,
            }}
          />
          <Typography
            variant='sinB5'
            sx={{
              color: 'accent.main',
            }}
          >
            未入力項目があります
          </Typography>
        </Stack>
      }
    />
  );
};
