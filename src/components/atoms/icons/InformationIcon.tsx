import type { SvgIconProps } from '@mui/material';
import { ComponentProps } from 'react';

import { Pretty } from '@/util/type';

import { SvgIcon } from './SvgIcon';

type TPick = Pick<SvgIconProps, 'sx' | 'fontSize'> &
  Pick<ComponentProps<typeof SvgIcon>, 'htmlColor'>;

type TProps = Pretty<TPick>;

export const InformationIcon = ({ sx, htmlColor, fontSize }: TProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} fontSize={fontSize} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path d='M12 21.999C17.5226 21.999 21.9995 17.5221 21.9995 11.9995C21.9995 6.47693 17.5226 2 12 2C6.47742 2 2.00049 6.47693 2.00049 11.9995C2.00049 17.5221 6.47742 21.999 12 21.999Z' />
          <path
            d='M11.9994 8.95874C12.5823 8.95874 13.0549 8.48616 13.0549 7.9032C13.0549 7.32024 12.5823 6.84766 11.9994 6.84766C11.4164 6.84766 10.9438 7.32024 10.9438 7.9032C10.9438 8.48616 11.4164 8.95874 11.9994 8.95874Z'
            fill='white'
          />
          <path
            d='M12.7091 11.5633C12.7091 11.1702 12.3905 10.8516 11.9974 10.8516C11.6043 10.8516 11.2856 11.1702 11.2856 11.5633V17.2039C11.2856 17.597 11.6043 17.9156 11.9974 17.9156C12.3905 17.9156 12.7091 17.597 12.7091 17.2039V11.5633Z'
            fill='white'
          />
        </g>
      </svg>
    </SvgIcon>
  );
};
