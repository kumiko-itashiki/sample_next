import Image from "next/image";

interface ImageWrapperProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** 画像のファイルパス変更用のnext/imageのラッパー */
export const ImageWrapper = ({
  src,
  alt,
  width,
  height,
}: ImageWrapperProps) => {
  return (
    <Image
      src={`${src}`}
      alt={alt}
      width={width}
      height={height}
      loading="eager"
    />
  );
};
