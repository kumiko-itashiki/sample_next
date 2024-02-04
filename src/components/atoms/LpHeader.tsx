import { Box } from "@/components/atoms/Box";
import { Typography } from "@/components/atoms/Typography";
import Image from "next/image";
import Link from "next/link";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** ヘッダー */
export const LpHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        width: "100%",
      }}
    >
      <Link href="/" passHref>
        <a target="_blank">
          <Image
            src="https://iryouworker.com/img/logo.svg"
            alt="ロゴ"
            width={148}
          />
        </a>
      </Link>
    </Box>
  );
};
