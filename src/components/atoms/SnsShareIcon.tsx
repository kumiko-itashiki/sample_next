import Image, { ImageProps } from 'next/image';

import { Box } from '@/components/atoms/Box';
type ImgElementStyle = Pick<ImageProps, 'objectFit'>;

/** SNS共有アイコンのpropsの型 */
export interface SnsShareIconProps {
  sharedLink: string;
  width?: number | string;
  height?: number | string;
  src: string;
  alt?: string;
  objectFit?: ImgElementStyle['objectFit'];
  query?: { [key: string]: string };
}

export const SnsShareIcon = ({
  objectFit='contain',
  sharedLink,
  width,
  height,
  src,
  alt,
  query,
}: SnsShareIconProps) => {
  // 共有する際にクエリパラメータが必要なためqueryをクエリ文字列に変換
  const convertToQueryString = (params: { [key: string]: string }): string => {
    return Object.keys(params)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
  } 

  // クエリパラメータとURLを結合
  const appendQueryStringToUrl = (url: string, queryString: string): string => {
    const connector = url.includes('?') ? '&' : '?';
    return `${url}${connector}${queryString}`;
  }

  const conditionalLink = (query) ? appendQueryStringToUrl(sharedLink, convertToQueryString(query)) : sharedLink;
  return (
    <Box sx={{ width: { width }, height: { height } }}>
      <a href={conditionalLink} target="_blank" rel="noreferrer">
        <Image
          alt={alt}
          src={src}
          width={width}
          height={height}
          objectFit={objectFit}
        />
      </a>
    </Box >
  );
};