import './styles.css';
import imageSection from '../../assets/ImageSection1-1.png'

function Share() {
  return (
    <section className="first-block">
      <article className="left">
        <h2>Share your home, nanny and costs</h2>
        <span>You have a fantastic home, a fantastic nanny and wouldn’t cutting your
        costs in half be, well, fantastic?! If only it was easy to connect with
        other parents to share your costs? Well now it is, with Hapu. <a href="#" alt="">Hapu means
        tribe</a> and it’s our foundational 3 tribal principles that empowers you to
        create and manage your own tribe. A tribe that together has the power to
        create new affordable solutions in childcare that work for you and your
        community.</span>
        <a className="readyLink" href="#" alt="">Ready to get started?</a>
      </article>
      <article className="right">
        <img src={ imageSection } alt="Share your home, nanny and costs" />
      </article>
    </section>
  );
}

export default Share;
