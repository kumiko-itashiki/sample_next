import { TextField as MuiTextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material';

/** TextAreaのpropsの型 */
type TextAreaProps = TextFieldProps & {
  border: boolean;
  /** formのid（キー名） */
  formId?: string;
};

/**
 * [atoms] MuiのTextFieldにプロジェクト用themeを適用したコンポーネント
 * @param props -　TextAreaProps
 */
export default function TextArea({
  value,
  maxRows,
  placeholder,
  required,
  onChange,
  error,
  border,
  rows,
  disabled,
  formId,
}: TextAreaProps) {
  return (
    <MuiTextField
      required={!!required}
      variant='outlined'
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      multiline
      fullWidth={true}
      maxRows={maxRows}
      rows={rows}
      error={error}
      disabled={disabled}
      sx={{
        '.MuiOutlinedInput-input': {
          color: 'black.main',
          fontSize: '14px',
          lineHeight: '1.5',
          '::placeholder': {
            color: 'gray.sub',
            opacity: '0.7',
          },
        },
        '.MuiOutlinedInput-root': {
          p: 3,
          '& textarea': { zIndex: '10' },
          '.MuiOutlinedInput-notchedOutline': {
            backgroundColor: 'white.main',
            borderRadius: '8px',
          },
        },
        //枠のデザインのスタイル分岐
        '.MuiOutlinedInput-notchedOutline': border
          ? {
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'gray.sub',
            }
          : {
              border: 'none',
              boxShadow: '0 2px 4px 0 rgba(144,164,174, 0.2)',
            },
      }}
      id={formId}
    />
  );
}
