import Reach, { useState } from "react";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    return (
        <form onSubmit={handleSubmit}>
            
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                </div>
            </div>
            <div className="field">
                <label className="label">email</label>
                <div class="control">
                    <input class="input is-danger" type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
            </div>
            <div class="field">
                <label class="label">Message</label>
                <div class="control">
                    <textarea class="textarea" placeholder="Textarea" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                </div>
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link" onClick={submit}>Submit</button>
                </div>
                <div class="control">
                    <button class="button is-link is-light">Cancel</button>
                </div>
            </div>
            <div class="field">
                <span className={emailSent ? 'visible' : null}>Thank you for your message, I'll get ya back soon!</span>
            </div>
        </form>
    );
};

export default ContactForm;