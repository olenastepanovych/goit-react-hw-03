import React, { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import styles from "./App.module.css";
import "./App.module.css";

const App = () => {
const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
]);

const [filter, setFilter] = useState("");

const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
};

const deleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
};

const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
);

return (
    <div className={styles.container}>
    <h1 className={styles.title}>Phonebook</h1>
    <ContactForm onAddContact={addContact} />
    <SearchBox filter={filter} setFilter={setFilter} />
    <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
);
};

export default App;