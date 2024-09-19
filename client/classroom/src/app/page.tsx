"use client";

import React from "react";
import styles from "./page.module.css";
import ClassCard from "../components/ClassCard";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    
    <div className={styles.page}>
      <Navbar></Navbar>
      <main className={styles.main}>
        <ClassCard
          name="Materia 1"
          creatorName="Professor 1"
          creatorPhoto="https://down-br.img.susercontent.com/file/br-11134207-7r98o-lykwcwv6r86ddf" 
          id="1"
        />
        <ClassCard
          name="Materia 2"
          creatorName="Professor 2"
          creatorPhoto="https://down-br.img.susercontent.com/file/br-11134207-7r98o-lykwcwv6r86ddf" 
          id="2"
        />
      </main>
    </div>
  );
}
