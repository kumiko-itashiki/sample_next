import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ja from 'date-fns/locale/ja';

import { Box } from '@/components/atoms/Box';
import { TextField } from '@/components/atoms/TextField';

/** Calendarのpropsの型 */
interface CalendarProps {
  label?: string;
  value?: Date | null;
  disablePast?: boolean;
  onChange: (event: Date | null) => void;
}

/**
 * [atoms] 日数選択可能なカレンダー
 * @param props - CalendarProps
 */
export const Calendar = ({
  label,
  value,
  disablePast,
  onChange,
}: CalendarProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <Box sx={{ mt: '6px', mb: 2, width: '100%' }}>
        <DatePicker
          label={label}
          value={value}
          onChange={onChange}
          disablePast={disablePast}
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>
    </LocalizationProvider>
  );
};
