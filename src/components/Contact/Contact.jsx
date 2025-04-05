import styles from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

const Contact = ({ contact, onDelete }) => {
return (
    <li className={styles.item}>
    <div className={styles.info}>
        <span className={styles.text}>
        <FaUser className={styles.icon} size={20} /> {contact.name}
        </span>
        <span className={styles.text}>
        <FaPhoneAlt className={styles.icon} size={20} /> {contact.number}
        </span>
    </div>
    <button className={styles.button} onClick={() => onDelete(contact.id)}>
        Delete
    </button>
    </li>
);
};

export default Contact;
