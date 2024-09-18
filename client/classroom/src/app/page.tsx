"use client";

import React from "react";
import styles from "./page.module.css";
import ClassCard from "../components/ClassCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ClassCard
          name="Mundo Digital"
          creatorName="Fernanda"
          creatorPhoto="" // Atualize o caminho da foto conforme necessário
          id="1"
        />
      </main>
    </div>
  );
}
