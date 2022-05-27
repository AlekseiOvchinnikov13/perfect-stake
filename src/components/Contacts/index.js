import ContactRow from './ContactRow';
import {CONTACTS_DATA} from '../../data/contacts';
import styles from '../../styles/Components/Contacts.module.scss';

const Contacts = () => {

  return (
    <div className={styles.contactsWrapper}>
      {CONTACTS_DATA.map(contact =>
        <ContactRow key={contact.label} data={contact}/>
      )}
    </div>
  );
};

export default Contacts;