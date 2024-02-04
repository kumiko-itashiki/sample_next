import Image from 'next/image';

import { Stack } from '@/components/atoms/Stack';
import { Typography } from '@/components/atoms/Typography';

/**
 * [atoms] ログイン画面に表示されるロゴのコンポーネント
 */
export const LoginLogo = () => {
  return (
    <Stack mx='auto'>
      <Typography variant='sinN5' textAlign='center' mb='15px'>
        医療福祉業界の転職/就職をフルサポート
      </Typography>
      <Typography variant='h1' display='contents'>
        <Image
          src='/image/logo/logo-mark-type-tryt.svg'
          width={240}
          height={32}
          alt='トライトワーカー'
        />
      </Typography>
    </Stack>
  );
};
