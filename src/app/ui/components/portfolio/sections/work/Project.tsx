import React from 'react';
import styles from './propject.module.css';
import { ProjectProps } from '@/types/components/portfolio/project';
import Image from 'next/image';

const Project = ({ project }: ProjectProps) => {
  return (
    <a href={project.url} className={`${styles.project} ${project.type}`} target='noopener'>
      <Image src={project.imgUrl} alt={project.alt} className={styles.project__img} width={200} height={200} />
      <div className={styles.projcet__description}>
        <h3>{project.title}</h3>
      </div>
    </a>
  );
};

export default Project;
