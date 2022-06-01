import styles from '../styles/Pages/Home.module.scss';
import SectionTitle from '../components/SectionTitle';
import {getCoinsMarkets} from './api/api';
import ProjectCard from '../components/ProjectCard';
import Loader from '../components/Loader';
import Contacts from '../components/Contacts';
import Accordion from '../components/Accordion';
import {ISS_DATA} from '../data/ISS';
import {useState} from 'react';
import ProjectModalWindow from '../components/Modals/ProjectModalWindow';
import CalculatorModalWindow from '../components/Modals/CalculatorModalWindow';

const Home = ({projects}) => {
  const [isProjectModalVisible, setIsProjectModalVisible] = useState(false);
  const [project, setProject] = useState(undefined);
  const buttonProjectHandler = (project) => {
    setIsProjectModalVisible(!isProjectModalVisible);
    setProject(project);
  };

  const [isCalcVisible, setIsCalcVisible] = useState(false);
  const calcHandler = () =>
    setIsCalcVisible(!isCalcVisible);

  return (
    <div className={styles.pageWrapper}>
      <section className={`${styles.section} ${styles.homeSection}`} id="home">
        <p className={styles.description}>
          We&nbsp;are a&nbsp;provider of&nbsp;non-custodial betting services with a&nbsp;solid and reliable team
          of&nbsp;crypto enthusiasts and professionals. Our existing dedicated servers are located in&nbsp;specialized
          and
          highly qualified well-known high-level Data Centers around the world and are controlled by&nbsp;external
          independent control services.
        </p>
      </section>
      <section className={`${styles.section} ${styles.projectSection}`} id="projects">
        <SectionTitle label="Stake crypto with Perfect Stake"/>
        <div className={styles.projectCardWrapper}>
          {projects.length > 0
            ? projects.map(project =>
              <ProjectCard
                key={project.id}
                project={project}
                onClick={buttonProjectHandler}
                isVisible={isProjectModalVisible}
              />)
            : <Loader/>
          }
        </div>
      </section>
      <section className={`${styles.section} ${styles.calculatorSection}`} id="calculator">
        <SectionTitle label="Calculator" isLeft isLight/>
        <button onClick={calcHandler} className={`stake-button-view ${styles.stakeButton}`}>stake now</button>
      </section>
      <section className={`${styles.section} ${styles.issSection}`} id="infrastructure-security-statement">
        <SectionTitle label="Infrastructure & Security Statement"/>
        <div className={styles.accordionWrapper}>
          {ISS_DATA.map(item =>
            <Accordion
              key={item.title}
              data={item}
              isHome
            />
          )}
        </div>
      </section>
      <section className={`${styles.section}`} id="contact">
        <SectionTitle label="Contacts" isLight isContact/>
        <Contacts/>
      </section>
      {project &&
        <ProjectModalWindow
          onClick={buttonProjectHandler}
          visible={isProjectModalVisible}
          project={project}
        />}
      <CalculatorModalWindow
        onClose={calcHandler}
        visible={isCalcVisible}
      />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await getCoinsMarkets();

  return {
    props: {
      projects: res
    }
  };
}

export default Home;
