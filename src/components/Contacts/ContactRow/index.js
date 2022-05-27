import Image from 'next/image';
import styles from '../../../styles/Components/Contacts.module.scss';

const ContactRow = ({data}) => {

  return (
    <a href={data.link} className={styles.contactRow}>
      <Image src={data.img} alt={data.label}/>
      <p className={styles.text}>{data.label}</p>
    </a>
  );
};

export default ContactRow;