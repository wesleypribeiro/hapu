import "./styles.css";
import imageSection4 from '../../assets/ImageSection4.png';

function FourthBlock() {
  return (
    <section className="fourth-block">
      <h2>A framework built for the long term</h2>
      <span>
        Childcare is for the long term. And you need a framework you can count
        on that gives your share long term viability and success. That’s why
        we’ve defined Hapu around our three tribal principles; clearly defined
        process, transparency over money and equality of participation.
      </span>
      <a href="#" alt="">Read how Hapu’s tribal background defines our app </a>
      <img src={imageSection4} alt="A framework built for the long term" />
    </section>
  );
}

export default FourthBlock;
