import "./styles.css";
import imageSection from "../../assets/ImageSection3-1.png";

function ThirdBlock() {
  return (
    <section className="third-block">
      <article className="left">
        <img src={imageSection} alt="Shared payments made simple" />
      </article>
      <article className="right">
        <h2>Shared payments made simple</h2>
        <span>
          Sometimes it’s hard enough just sharing a restaurant bill. Try sharing
          that bill week in, week out and you might encounter more than a few
          snares. But not with Hapu. Simply set your rates and our automated
          payment system takes care of the rest. You need never talk money or
          who owes what.
        </span>
        <a href="#" alt="">Read how Bridget’s share (without Hapu) ended over $15</a>
      </article>
    </section>
  );
}

export default ThirdBlock;
