import SectionTitle from '../components/SectionTitle';
import Accordion from '../components/Accordion';
import {ISS_DATA} from '../data/ISS';
import {useRouter} from 'next/router';
import Contacts from '../components/Contacts';
import styles from '../styles/Pages/InfrastructureSecurityStatement.module.scss';

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
      <SectionTitle
        isContact
        label="Contacts"
      />
      <Contacts/>
    </div>
  );
};

export default InfrastructureSecurityStatement;