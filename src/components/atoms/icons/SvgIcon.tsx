import { SvgIcon as MuiSvgIcon } from '@mui/material';
import type {
  SvgIconProps as MuiSvgIconProps,
  SvgIconTypeMap,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { CustomTheme } from '@/styles/CustomTheme';
import { ExOmit } from '@/util/type';

type THTMLColorType =
  | 'primary'
  | 'gray'
  | 'gray.main'
  | 'white'
  | 'black'
  | (string & Record<never, never>);

type THTMLColor = {
  htmlColor?: THTMLColorType;
};

type TOverrideProps = ExOmit<MuiSvgIconProps, 'htmlColor'> & THTMLColor;

export const SvgIcon = styled(MuiSvgIcon, {
  shouldForwardProp: (props) => props !== 'htmlColor',
})<MuiSvgIconProps<SvgIconTypeMap['defaultComponent'], TOverrideProps>>(
  ({ htmlColor }) => ({
    ...(htmlColor === 'primary'
      ? { color: CustomTheme.palette?.primary?.main }
      : htmlColor === 'gray' // memo: gray.subにしたい
      ? { color: CustomTheme.palette?.gray?.sub }
      : htmlColor === 'gray.main'
      ? { color: CustomTheme.palette?.gray?.main }
      : htmlColor === 'white'
      ? { color: CustomTheme.palette?.white?.main }
      : htmlColor === 'black'
      ? { color: CustomTheme.palette?.black?.main }
      : { color: htmlColor }),
  }),
);
