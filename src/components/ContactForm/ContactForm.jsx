import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactForm = ({ onSubmit }) => {
const handleSubmit = (values, actions) => {
    const newContact = {
    id: nanoid(),
    name: values.name,
    number: values.number,
    };
    onSubmit(newContact, actions);
};

return (
    <Formik
    initialValues={{ name: '', number: '' }}
    validationSchema={ContactSchema}
    onSubmit={handleSubmit}
    >
    <Form className={styles.form}>
        <label className={styles.label}>
        Name
        <Field className={styles.input} name="name" />
        <ErrorMessage className={styles.error} name="name" component="div" />
        </label>
        <label className={styles.label}>
        Number
        <Field className={styles.input} name="number" />
        <ErrorMessage className={styles.error} name="number" component="div" />
        </label>
        <button type="submit" className={styles.button}>Add Contact</button>
    </Form>
    </Formik>
);
};

export default ContactForm;
