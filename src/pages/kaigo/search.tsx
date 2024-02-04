import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { JobCard } from "@/components/jobCard";

// /kaigo/search

export default function Search() {
  return (
    <>
      <Grid container justifyContent="flex-start">
        <Grid
          container
          alignItems="flex-start"
          alignContent="center"
          flexDirection="column"
        >
          <JobCard
            title="水やり"
            price={3000}
            address="日本"
            onClick={() => {}}
          />
          <JobCard
            title="田植え"
            price={4000}
            address="アメリカ"
            onClick={() => {}}
          />
          <JobCard
            title="エンジニア"
            price={1000}
            address="日本"
            onClick={() => {}}
          />
          <p style={{ fontSize: "30px" }}>仕事検索</p>
        </Grid>
      </Grid>
    </>
  );
}
