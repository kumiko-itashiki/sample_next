import Image, { ImageProps } from 'next/image';

import { getImageUrl } from '@/lib/common/util/image';

/**
 * [atoms]DR求人用イメージのコンポーネント.
 * DR求人用イメージは本来ならhttpから始まるはずだが、始まらなければダミー画像として扱う.
 * @param props - ImageProps
 */
function DrFacilityImage({
  src,
  className,
  width,
  height,
  objectFit,
  ...all
}: ImageProps) {
  return (
    <>
      {src && (
        <Image
          src={getImageUrl(src.toString())}
          className={className}
          width={width}
          height={height}
          alt={all.alt}
          objectFit={objectFit}
        />
      )}
    </>
  );
}

export default DrFacilityImage;
