import React, { useEffect, useState, FC } from "react";
import { Box } from "@/components/atoms/Box";
import { Stack } from "@/components/atoms/Stack";
import { Typography, useMediaQuery, Card } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
}

// /lp/hellowrk-step

export default function helloWork() {
  return (
    <Stack
      sx={{
        width: { xs: "100%", md: "650px" },
        margin: "0 auto 70px",
      }}
    >
      <Stack sx={{ bgcolor: "#f7f6f1", padding: "0 0 5vh" }}>
        <Stack
          bgcolor="#FFF"
          direction="row"
          height="85px"
          justifyContent="space-between"
          alignItems="center"
          zIndex="999"
          boxShadow="0 3px 6px 0 rgba(0,0,0,.12)"
        >
          <Link href="/">
            <Box
              width="200px"
              height="25px"
              overflow="hidden"
              position="relative"
            >
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/logo.svg"
                alt="ロゴ"
              />
            </Box>
          </Link>
          <Link href="/">
            <Box
              width="170px"
              height="55px"
              overflow="hidden"
              position="relative"
            >
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/img-header-jobchange-success.png"
                alt="年間10,000人"
              />
            </Box>
          </Link>
        </Stack>

        <Box>
          <Box width="100%" overflow="hidden" position="relative">
            <Image
              layout="responsive"
              objectFit="contain"
              width={200}
              height={30}
              src="/images/img-hw-step-step1_30.png"
              alt="Step1"
            />
          </Box>
        </Box>
        <Stack
          direction="row"
          justifyContent="flex-end"
          bgcolor="#0a3d8e"
          padding="8px 1em"
        >
          <Typography color="#fff" fontWeight="bold" fontSize="14px">
            1月27日最新求人更新
          </Typography>
        </Stack>
        <Stack direction="row" padding="8px 0.5em">
          <Typography
            bgcolor="#f66"
            padding="4px 10px"
            margin="0 4px 5px 0"
            color=" #fff"
            lineHeight="1"
            display="inline-block"
            borderRadius="5px"
            fontSize="14px"
            fontWeight="700"
          >
            必須
          </Typography>
          <Typography fontSize="14px" fontWeight="700">
            どの資格をお持ちですか？
          </Typography>
        </Stack>
        <Stack spacing="12px" margin="0 auto 3vh">
          <Stack
            direction="row"
            spacing="12px"
            // margin="0 auto"
            // sx={{
            //   width: { xs: "90%", md: "550px" },
            // }}
          >
            <JobCard
              alt="正看護師"
              width={85}
              height={96}
              src="/images/img-entry-regular-nurse.png"
              title="正看護師"
            />
            <JobCard
              alt="准看護師"
              width={85}
              height={96}
              src="/images/img-entry-assistant-nurce.png"
              title="准看護師"
            />
          </Stack>
          <Stack direction="row" spacing="12px">
            <JobCard
              alt="助産師"
              width={85}
              height={96}
              src="/images/img-entry-midwife.png"
              title="助産師"
            />
            <JobCard
              alt="保健師"
              width={85}
              height={96}
              src="/images/img-entry-publick-health-nurse.png"
              title="保健師"
            />
          </Stack>
          <Stack direction="row" spacing="12px" alignItems="center">
            <JobCard
              alt=""
              width={0}
              height={0}
              src=""
              title="資格取得見込み"
            />
            <Typography fontSize="14px" fontWeight="700">
              複数選択可能
            </Typography>
          </Stack>
        </Stack>
        <Box
          width="70%"
          margin="auto"
          height="50px"
          bgcolor="#3c87d2"
          border="2px solid #36c"
          borderRadius="5px"
        >
          <Typography
            margin="auto"
            padding="15px 10px"
            fontSize="18px"
            fontWeight="700"
            color="rgb(255, 255, 255)"
            verticalAlign="baseline"
          >
            次へ
          </Typography>
        </Box>
      </Stack>
      <Stack>
        <Typography>厚生労働大臣許可:27-ユ-301770 派27-302147</Typography>
        <Typography>
          徹底した管理体制で大切な個人情報をお守りします
          看護師ワーカーを運営する（株）トライトキャリアはプライバシーマークを取得しております。
        </Typography>
        <Stack>
          <Box width="100%" overflow="hidden" position="relative">
            <Image
              src="/images/privacy.gif"
              alt="たいせつにします プライバシー"
              width={64}
              height={64}
            />
          </Box>

          <Typography>
            <a href="/company/sitepolicy/" target="_blank">
              利用規約
            </a>
          </Typography>
          <Typography>
            <a href="/company/handling/" target="_blank">
              個人情報の取扱い
            </a>
          </Typography>
          <Typography>
            <a href="/company/privacypolicy/" target="_blank">
              個人情報保護方針
            </a>
          </Typography>
          <Typography>
            <a
              href="https://tryt-group.co.jp/about/company_prof/"
              target="_blank"
            >
              会社概要
            </a>
          </Typography>
        </Stack>
      </Stack>
      <Box>
        <Typography>© TRYT Career ,Inc.</Typography>
      </Box>
    </Stack>
  );
}

// 画像とテキストのカードコンポーネントを作る
export const JobCard: FC<ImageProps> = ({ src, alt, width, height, title }) => {
  return (
    <Card
      sx={{
        width: "41vw",
        height: "98%",
        minHeight: "10vw",
        padding: "1.5vw",

        justifyContent: "space-around",
        backGround: "#fff",
        border: " 2px solid #d1d1d1",
        verticalAlign: "middle",
        borderRadius: "8px",
        display: "grid",
        alignItems: "center",
      }}
    >
      <Box overflow="hidden" position="relative" width={width} height={height}>
        <Image src={src} alt={alt} layout="fill" objectFit="contain" />
      </Box>

      <Typography gutterBottom fontSize="3.8vw" component="div">
        {title}
      </Typography>
    </Card>
  );
};
