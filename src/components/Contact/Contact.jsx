import React from "react";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
return (
    <li className={styles.contact}>
    <p>
        <strong>{name}</strong>
    </p>
    <p>{number}</p>
    <button className={styles.deleteButton} onClick={() => onDelete(id)}>Delete</button>
    </li>
);
};

export default Contact;