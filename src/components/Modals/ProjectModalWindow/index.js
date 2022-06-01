import {toast} from 'react-toastify';
import ModalWindow from '../ModalWindow';
import Toast from '../../Toast';
import Image from 'next/image';
import {COINS_DATA} from '../../../data/coins';
import styles from '../../../styles/Components/ProjectModalWindow.module.scss';

const ProjectModalWindow = ({onClick, visible, project: {id, image, current_price, name}}) => {
  const {description, address, fee, link} = COINS_DATA.find(item => item.id === id);

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(address)
      .then(() => {
        toast.success('Copied!');
      })
      .catch(() => {
        toast.error('Something went wrong...');
      });
  };

  return (
    <ModalWindow onClose={onClick} visible={visible}>
      <div className={styles.projectModalWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            width="100"
            height="100"
            src={image}
            layout="responsive"
            objectFit="contain"
            alt={name}
          />
        </div>
        <h3 className={styles.projectTitle}>{name}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <h4 className={styles.projectPriceTitle}>price</h4>
        <span className={styles.projectPrice}>{`$${current_price}`}</span>
        <p className={styles.projectFee}>{`${fee} validator fee`}</p>
        <div className={styles.addressWrapper}>
          <p className={styles.addressText}>{address}</p>
          <button className={styles.addressBtn} onClick={copyToClipBoard}>+</button>
        </div>
        <a
          target="_blank"
          href={link}
          className={`${styles.stakeButton} stake-button-view`}
          rel="noreferrer"
        >
          stake now
        </a>
        <Toast/>
      </div>
    </ModalWindow>
  );
};

export default ProjectModalWindow;