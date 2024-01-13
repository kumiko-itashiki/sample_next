import type { SvgIconProps } from '@mui/material';

import { SvgIcon } from './SvgIcon';

export const Edit2Icon = ({ sx, htmlColor }: SvgIconProps) => {
  return (
    <SvgIcon htmlColor={htmlColor} sx={sx}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path d='m12.715 3.084-8.212 8.692c-.415.443-.785 1.237-.866 1.845l-.372 3.254c-.186 1.669 1.09 2.879 2.742 2.594l3.22-.55c.623-.11 1.4-.526 1.817-.984l8.201-8.68c1.966-2.076 2.113-4.191-.18-6.36-2.287-2.152-4.387-1.883-6.35.19zm5.321.902c1.637 1.549 1.555 2.721.12 4.238l-8.211 8.69c-.2.22-.676.474-.976.528l-3.215.549c-.667.115-1.074-.272-.999-.948l.37-3.238c.039-.287.273-.79.47-1l8.21-8.69c1.434-1.514 2.6-1.663 4.231-.129z' />
          <path d='M11.775 4.309a.75.75 0 0 1 .856.626 5.376 5.376 0 0 0 4.784 4.519.75.75 0 0 1-.15 1.492 6.876 6.876 0 0 1-6.116-5.78.75.75 0 0 1 .626-.857zM21 21.25a.75.75 0 0 1 .102 1.493L21 22.75H3a.75.75 0 0 1-.102-1.493L3 21.25h18z' />
        </g>
      </svg>
    </SvgIcon>
  );
};