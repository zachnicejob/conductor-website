import { useState } from "react";
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import { auth } from '../auth/auth';

init(`${auth.userId}`);
const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && isValidEmail && message) {
           const serviceId = `${auth.serviceId}`;
           const templateId = `${auth.templateId}`;
           const templateParams = {
            name,
            email,
            message
           };

           emailjs.send(serviceId, templateId, templateParams)
           .then(response => console.log(response))
           .then(error => console.log(error));
    
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    return (
        <form>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input class="input" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                </div>
            </div>
            <div className="field">
                <label className="label">email</label>
                <div class="control">
                    <input class="input is-danger" type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
            </div>
            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea className="textarea" placeholder="Textarea" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link" onClick={submit}>Submit</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Cancel</button>
                </div>
            </div>
            <div className="field">
                <span className={emailSent ? "text" : "is-invisible"}>Thank you for your message, I'll get ya back soon!</span>
            </div>
        </form>
    );
};

export default ContactForm;