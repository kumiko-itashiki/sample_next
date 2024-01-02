import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { JobCard } from "@/components/jobCard";
import { CustomTheme_2 } from "@/styles/CustomTheme_2";

// /kaigo/search

export default function Search() {
  return (
    <>
      <JobCard title="水やり" price="3000" address="日本" onClick={() => {}} />
      <JobCard
        title="田植え"
        price="4000"
        address="アメリカ"
        onClick={() => {}}
      />
      <JobCard
        title="エンジニア"
        price="1000"
        address="日本"
        onClick={() => {}}
      />
      <p style={{ fontSize: "30px" }}>仕事検索</p>
    </>
  );
}
