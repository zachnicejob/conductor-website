import { useState } from "react";
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import './ContactForm.scss';

init(`${process.env.REACT_APP_EMAILJS_USER_ID}`);

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [renderWarning, setRenderWarning] = useState(false);
  
    const submit = (e) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const isValidEmail = emailRegex.test(email);
        e.preventDefault();
        
        if (name && isValidEmail && message) {
           const serviceId = `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`;
           const templateId = `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`;
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
            setRenderWarning(false);
            setEmailSent(true);
        } else {
            setRenderWarning(true);
        }
    }

    
    
    return (
        <form>
            <div className="title is-1 is-centered">Contact Me</div>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                </div>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    {emailSent ? <input className="input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /> : 
                        <input className="input" required type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    }
                </div>
            </div>
            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea className="textarea" placeholder="What's up?" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-primary" onClick={submit}>Submit</button>
                </div>
                {/* <div className="control">
                    <button className="button is-link is-light">Cancel</button>
                </div> */}
            </div>
            <div className="field bg-variant-title">
                {renderWarning ? <span className="text">Oops, please fill each field properly.</span> : 
                    <span className={emailSent ? "text" : "is-invisible"}>Thank you for your message, I'll get ya back soon!</span>
                }
            </div>
        </form>
    );
};

export default ContactForm;