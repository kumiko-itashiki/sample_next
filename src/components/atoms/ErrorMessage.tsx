import type { SxProps } from '@mui/material';
import { FieldErrors, FieldValues, FieldError } from 'react-hook-form';

import { Box } from '@/components/atoms/Box';
import { Typography } from '@/components/atoms/Typography';

/** ErrorMessageのpropsの型 */
type ErrorMessageProps = {
  errors: FieldErrors<FieldValues>;
  title: string;
  sx?: SxProps;
  textAlignRight?: boolean;
};

/**
 * [atoms] エラーメッセージ表示用コンポーネント
 * @param props - ErrorMessage
 */
export function ErrorMessage({
  errors,
  title,
  sx,
  textAlignRight = false,
}: ErrorMessageProps) {
  return (
    <Box sx={sx}>
      {errors &&
        Object.entries(errors).map(([, value], index) => {
          const error = value as FieldError;
          return (
            <Box
              key={index}
              sx={{
                textAlign: textAlignRight ? 'right' : 'left',
              }}
            >
              <Typography
                variant='sinN4'
                sx={{
                  color: 'alert.main',
                }}
              >
                {JSON.stringify(value).indexOf(`${title}:`) > 0
                  ? error?.message?.replace(`${title}:`, '')
                  : null}
              </Typography>
            </Box>
          );
        })}
    </Box>
  );
}
