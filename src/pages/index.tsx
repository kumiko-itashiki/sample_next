import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [count, setCount] = useState(0);

  const onUP = () => {
    setCount(count + 1);
  };

  function onDown() {
    setCount(count - 1);
  }

  return (
    <>
      <p style={{ fontSize: "30px" }}>{count}</p>
      <button onClick={onUP}>アップ</button>
      <button onClick={onDown}>ダウン</button>
    </>
  );
}
