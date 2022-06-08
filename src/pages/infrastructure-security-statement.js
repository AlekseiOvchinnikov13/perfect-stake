import SectionTitle from '../components/SectionTitle';
import styles from '../styles/Pages/InfrastructureSecurityStatement.module.scss';
import Accordion from '../components/Accordion';
import {ISS_DATA} from '../data/ISS';
import {useRouter} from 'next/router';

const InfrastructureSecurityStatement = () => {
  const router = useRouter();
  const anchor = router.asPath.substring(router.asPath.indexOf('#') + 1);

  return (
    <div className={styles.issWrapper}>
      <SectionTitle
        label="Infrastructure & Security Statement"
      />
      <div className={styles.dataWrapper}>
        {ISS_DATA.map(item =>
          <Accordion
            key={item.title}
            data={item}
            isOpen={item.href === anchor}
          />
        )}
      </div>
    </div>
  );
};

export default InfrastructureSecurityStatement;