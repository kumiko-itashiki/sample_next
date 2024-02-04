import { Switch as MuiSwitch } from '@mui/material';
import type { SwitchProps } from '@mui/material';
import { styled } from '@mui/system';

/**
 * [atoms] MuiのSwitchにプロジェクト用themeを適用したコンポーネント
 * @param props - SwitchProps
 */
export const Switch = styled(MuiSwitch)<SwitchProps>(({ theme }) => ({
  width: 48,
  height: 26,
  padding: 0,
  position: 'relative',
  '&& .MuiSwitch-switchBase': {
    padding: 0,
    transitionDuration: '300ms',
    color: theme.palette.gray.sub,
    opacity: 0.7,
    position: 'absolute',
    transform: 'translateX(0)',
    left: '0',
    top: '0',
    bottom: '0',
    width: '100%',
    '.MuiSwitch-input': { width: '100%', left: '0' },
    '& + .MuiSwitch-track': {
      boxShadow: `0 1px 3px 0 rgba(84, 110, 122, 0.5) inset`,
      position: 'absolute',
      width: '100%',
    },
    '&.Mui-checked': {
      color: theme.palette.white.main,
      opacity: 1,
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
        border: 0,
      },
      '& .MuiSwitch-thumb': { left: '50%' },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 19,
    height: 19,
    boxShadow: '0 2px 4px 0 rgba(84, 110, 122, 0.5)',
    position: 'absolute',
    left: '10%',
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor:
      theme.palette.mode === 'light'
        ? theme.palette.gray.light
        : theme.palette.primary.main,
    opacity: 1,
  },
}));
