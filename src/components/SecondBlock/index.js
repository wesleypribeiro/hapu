import { useState } from "react";
import submitForm from '../../services/api';
import "./styles.css";

function SecondBlock() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const pattern = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i);

  const submit = (e) => {
    e.preventDefault();
    submitForm(name, email)
    setMessage('Thank you for subscribing! See you soon')
    setInterval(() => setMessage(''), 5000);
    setName('');
    setEmail('');
  }

  return (
    <section className="second-block">
      <h3>Are you a parent without a nanny and looking to share?</h3>
      <span>
        Leave us your name and email and we’ll update you as soon as a share
        becomes available in your area!
      </span>
      <form>
          <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)}></input>
          <input type="text" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <button onClick={(e) => submit(e)} disabled={ name === '' || !pattern.test(email) }>Send</button>
      </form>
      <h5 className="alert">{message}</h5>
    </section>
  );
}

export default SecondBlock;
