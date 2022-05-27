import styles from '../styles/Pages/Home.module.scss';
import SectionTitle from '../components/SectionTitle';
import {getCoinsMarkets} from './api/api';
import ProjectCard from '../components/ProjectCard';
import Loader from '../components/Loader';
import Contacts from '../components/Contacts';

const Home = ({projects}) => {

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
              <ProjectCard key={project.id} project={project}/>)
            : <Loader/>}
        </div>
      </section>
      <section className={`${styles.section} ${styles.calculatorSection}`} id="calculator">
        <SectionTitle label="Calculator" isLeft isLight/>
        <button className={`stake-button-view ${styles.stakeButton}`}>stake now</button>
      </section>
      <section className={`${styles.section} ${styles.issSection}`} id="infrastructure-security-statement">
        <SectionTitle label="Infrastructure & Security Statement"/>
        
      </section>
      <section className={`${styles.section} ${styles.contactSection}`} id="contact">
        <SectionTitle label="Contacts" isLight isContact/>
        <Contacts/>
      </section>
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
