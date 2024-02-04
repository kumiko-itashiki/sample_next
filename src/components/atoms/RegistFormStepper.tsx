import type { Theme } from '@mui/material';

import { Box } from '@/components/atoms/Box';
import { Stack } from '@/components/atoms/Stack';
import { Typography } from '@/components/atoms/Typography';

/** RegistFormStepperのpropsの型 */
interface StyledRegistFormStepperProps {
  theme: Theme;
  stepLabels: string[];
  activeIndex: number;
}

/**
 * [atoms] 会員登録時、1〜5でステップを表示するコンポーネント
 * @param props - StyledRegistFormStepperProps
 */
export const RegistFormStepper = ({
  theme,
  stepLabels,
  activeIndex,
}: StyledRegistFormStepperProps) => {
  return (
    <>
      <Stack
        alignItems='center'
        direction={'row'}
        divider={
          <Box
            sx={{
              width: '30px',
              height: '2px',
              backgroundColor: 'primary.pale',
            }}
          />
        }
      >
        {stepLabels.map((value, index) => (
          <Stack
            key={`step-${index}`}
            alignItems='center'
            justifyContent='center'
            sx={{
              width: '28px',
              height: '28px',
              borderRadius: '100vw',
              backgroundColor: 'primary.pale',
              background:
                activeIndex === index ? theme.palette.gradation.primary : null,
              boxShadow:
                activeIndex === index
                  ? `0 2px 4px 0 ${theme.palette.primary.main}`
                  : '0',
            }}
          >
            <Typography
              variant='sinB5'
              sx={{
                color: activeIndex === index ? 'white.main' : 'primary.sub',
              }}
            >
              {index + 1}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </>
  );
};
