import { useEffect, useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import styles from './App.module.css';

const LOCAL_STORAGE_KEY = 'phonebook_contacts';

const App = () => {
const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]);

const [filter, setFilter] = useState('');

useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) setContacts(JSON.parse(saved));
}, []);

useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
}, [contacts]);

const handleAddContact = (newContact, actions) => {
    const normalizedName = newContact.name.toLowerCase();
    const isDuplicate = contacts.some(
    contact => contact.name.toLowerCase() === normalizedName
    );

    if (isDuplicate) {
    alert(`${newContact.name} is already in contacts.`);
    return;
    }

    setContacts(prev => [...prev, newContact]);
    actions.resetForm();
};

const handleDelete = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
};

const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
);

return (
    <div className={styles.container}>
    <h1>Phonebook</h1>
    <ContactForm onSubmit={handleAddContact} />
    <SearchBox value={filter} onChange={setFilter} />
    <ContactList contacts={visibleContacts} onDelete={handleDelete} />
    </div>
);
};

export default App;
