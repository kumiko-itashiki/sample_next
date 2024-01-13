import Image, { ImageProps } from 'next/image';

/**
 * [atoms] GSイメージのコンポーネント.
 * 環境変数からGSのドメインを取得し、そのURLとsrcを合わせたURLの画像を取得する
 * @param props - ImageProps
 */
function FacilityImage({
  src,
  className,
  width,
  height,
  objectFit,
  ...all
}: ImageProps) {
  const imageDomain = process.env.NEXT_PUBLIC_IMAGE_DOMAIN;

  return (
    <>
      {src && (
        <Image
          src={`${imageDomain}${src}`}
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

export default FacilityImage;
