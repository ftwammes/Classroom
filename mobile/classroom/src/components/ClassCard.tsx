"use client";

import Image from 'next/image'
import React from "react";
import { IconButton } from "@mui/material";
import { AssignmentIndOutlined, FolderOpenOutlined, MoreVert } from "@mui/icons-material";
import styles from "./ClassCard.module.css"; // Ajuste o caminho conforme necessário
import course_interface from "../interfaces/course";


const ClassCard: React.FC<course_interface> = ({ id, name, image, color, descriptionHeading, teacher, activities }) => {
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
          style={{ backgroundColor: color, opacity: 0.5 }}
        ></div>
           <IconButton className={styles.menuIcon}>
          <MoreVert />
        </IconButton>
        <div className={styles.classCard__upper}>
          <div className={styles.classCard__className}>{descriptionHeading}</div>
          <div className={styles.classCard__creatorName}>{teacher.name}</div>
          <Image src={teacher.image} className={styles.classCard__creatorPhoto} alt="Creator" width={85} height={85}/>
        </div>

      </div>
      <div className={styles.classCard__middle}>
        {
          activities.map(item => {
                return (
                  <section id={`activity_${item.id}`} className={styles.classCard__activity}>
                    <span className={styles.classCard__activityLabel}>Data de entrega: {item.dayOfWeek}</span>
                    <span className={styles.classCard__activityName}>{item.title}</span>
                  </section>
                )
          })
        }
      </div>
      <div className={styles.classCard__lower}>
        <div className={styles.classIcon}>
        <IconButton>
          <FolderOpenOutlined/>
        </IconButton>
        <IconButton>
          <AssignmentIndOutlined />
        </IconButton>
        </div>
      </div>
    </div>

  );
};

export default ClassCard;
