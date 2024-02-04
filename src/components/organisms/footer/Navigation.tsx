import Link from "next/link";

import { Box } from "@/components/atoms/Box";
import { ImageWrapper } from "/components/atoms/ImageWrapper";
import { Stack } from "@/components/atoms/Stack";
import { Typography } from "@/components/atoms/Typography";
import { List } from "@/components/molecules/List";
import { FooterLinkListItem } from "@/components/organisms/list/FooterLink";
import { FOOTER_LINKS } from "@/constants";

/** フッター上のナビゲーション */
export const FooterNavigation = () => {
  return (
    <Box sx={{ backgroundColor: "kaigoOrange.10", pt: 3, pb: 4, px: 2 }}>
      <Stack
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          pb: 3,
          maxWidth: { xs: "100%", md: "980px" },
          mx: "auto",
        }}
      >
        <Box sx={{ minWidth: "64px" }}>
          <Link href="https://privacymark.jp/" passHref>
            <a target="_blank">
              <ImageWrapper
                src="/images/privacy.webp"
                alt="プライバシーマーク"
                width={50}
                height={50}
              />
            </a>
          </Link>
        </Box>
        <Typography variant="W3p10">
          <Typography variant="W6p10">
            徹底した管理体制で大切な個人情報をお守りします。
          </Typography>
          <br />
          介護ワーカーを運営する（株）トライトキャリアはプライバシーマークを取得しております。
        </Typography>
      </Stack>
      <List
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "commonGray.100",
        }}
      >
        {FOOTER_LINKS.map((item) => (
          <FooterLinkListItem
            key={item.text}
            text={item.text}
            path={item.path}
          />
        ))}
      </List>
    </Box>
  );
};
