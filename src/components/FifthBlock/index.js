import "./styles.css";
import imageSection5 from "../../assets/ImageSection5.png";

function FifthBlock() {
  return (
    <section className="fifth-block">
      <img src={imageSection5} alt="Coming soon..." />
      <h2>Coming soon: Nanny Share Daily Diary!</h2>
      <span>
        With the Hapu daily diary your nanny will be able to update you and your
        sharers with photos and commentary of the day. You and sharers will
        receive notifications and you’ll be able to login to view the daily
        adventures fo your little ones. We can’t wait!
      </span>
    </section>
  );
}

export default FifthBlock;
