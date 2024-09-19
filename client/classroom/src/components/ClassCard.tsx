"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IconButton } from "@mui/material";
import { AssignmentIndOutlined, FolderOpenOutlined } from "@mui/icons-material";
import styles from "./ClassCard.module.css"; // Ajuste o caminho conforme necessário
import course_interface from "../interfaces/course";


const ClassCard: React.FC<course_interface> = ({ id, name, image, color, descriptionHeading, teacher }) => {
  // const router = useRouter();

  // const goToClass = () => {
  //   router.push(`/class/${id}`);
  // };

  return (
    <div className={styles.classCard}>
      <div
        className={styles.classCardHeader}
        style={{
          backgroundImage: `url(${image})`
        }}
      >
        <div
          className={styles.overlay}
          style={{ backgroundColor: color, opacity: 0.5 }} // Opacidade pode ser ajustada
        ></div>
        <div className={styles.classCard__upper}>
          <div className={styles.classCard__className}>{descriptionHeading}</div>
          <div className={styles.classCard__creatorName}>{teacher.name}</div>
          <img src={teacher.image} className={styles.classCard__creatorPhoto} alt="Creator" />
        </div>

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
