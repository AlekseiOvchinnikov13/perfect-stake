import styles from '../../styles/Components/ProjectCard.module.scss';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import {COINS_DATA} from '../../data/coins';

const ProjectCard = ({project}) => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    project && setProjectData(COINS_DATA.find(item => item.id === project.id));
  }, [project]);

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectHeader}>
        <div className={styles.projectImgWrapper}>
          <Image
            width="56"
            height="56"
            layout="responsive"
            objectFit="contain"
            className={styles.projectImg}
            src={project.image}
            alt={project.name}
          />
        </div>
        <p className={styles.projectTitle}>{project.name}</p>
      </div>
      <div className={styles.apyWrapper}>
        <p className={styles.apyText}>Annual percentage yield</p>
        <span className={styles.apyNumber}>
          {projectData?.apy
            ? `+ ${projectData.apy}`
            : 'soon'}
        </span>
      </div>
      <button className={styles.stakeButton}>stake now</button>
    </div>
  );
};

export default ProjectCard;