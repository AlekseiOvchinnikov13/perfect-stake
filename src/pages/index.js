import styles from '../styles/Pages/Home.module.scss';
import SectionTitle from '../components/SectionTitle';
import {getCoinsMarkets} from './api/api';
import ProjectCard from '../components/ProjectCard';
import Loader from '../components/Loader';

const Home = ({projects}) => {
  // console.log(projects);

  return (
    <div className={styles.pageWrapper}>
      <p className={styles.description}>
        We&nbsp;are a&nbsp;provider of&nbsp;non-custodial betting services with a&nbsp;solid and reliable team
        of&nbsp;crypto enthusiasts and professionals. Our existing dedicated servers are located in&nbsp;specialized and
        highly qualified well-known high-level Data Centers around the world and are controlled by&nbsp;external
        independent control services.
      </p>
      <section className={`${styles.section} ${styles.homeSection}`} id="home">
        <SectionTitle label="Stake crypto with Perfect Stake" isRight/>
        <div className={styles.projectCardWrapper}>
          {projects.length > 0
            ? projects.map(project =>
              <ProjectCard key={project.id} project={project}/>)
            : <Loader/>}
        </div>
      </section>
      <section className={`${styles.section}`} id="projects"></section>
      <section className={`${styles.section}`} id="calculator"></section>
      <section className={`${styles.section}`} id="contact"></section>
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
