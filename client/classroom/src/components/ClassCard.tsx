"use client";

import React from "react";
import { useRouter } from "next/router";
import { IconButton } from "@mui/material";
import { AssignmentIndOutlined, FolderOpenOutlined } from "@mui/icons-material";
import styles from "./ClassCard.module.css"; // Ajuste o caminho conforme necessário

interface ClassCardProps {
  name: string;
  creatorName: string;
  creatorPhoto: string;
  id: string | number;
  style?: React.CSSProperties;
}

const ClassCard: React.FC<ClassCardProps> = ({ name, creatorName, creatorPhoto, id, style }) => {
  // const router = useRouter();

  // const goToClass = () => {
  //   router.push(`/class/${id}`);
  // };

  return (
    <div className={styles.classCard} style={style} >
      <div className={styles.classCard__upper}>
        <div className={styles.classCard__className}>{name}</div>
        <div className={styles.classCard__creatorName}>{creatorName}</div>
        <img src={creatorPhoto} className={styles.classCard__creatorPhoto} alt="Creator" />
      </div>
      <div className={styles.classCard__middle}></div>
      <div className={styles.classCard__lower}>
        <IconButton>
          <FolderOpenOutlined />
        </IconButton>
        <IconButton>
          <AssignmentIndOutlined />
        </IconButton>
      </div>
    </div>
  );
};

export default ClassCard;
