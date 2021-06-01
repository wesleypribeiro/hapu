import "./styles.css";
import Logo from "../../assets/badge-logo.svg";
import playButton from "../../assets/Play-button.png";
import imgHeader from "../../assets/ImageHeader.png";
import profileImage from "../../assets/ProfileImage.png";

function Main() {
  return (
    <main>
      <div className="part-1">
      <header>
        <div className="badge">
          <img src={Logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><a className="nav-link" href="#" alt="">Create your Nanny Share</a></li>
            <li><a className="nav-link" href="#" alt="">Browse Shares</a></li>
            <li><a className="nav-link" href="#" alt="">Our Story</a></li>
          </ul>
        </nav>
        <section id="signIn">
          <button>Become a Nanny Share Host</button>
          <a href="#">Sign In</a>
        </section>
      </header>
      <div className="content">
        <section className="left">
          <div className="information">
            <h1>Easily create or join a local nanny share with Hapu</h1>
            Hapu is Airbnb for nanny share. Share your home, nanny and costs and
            create new flexible, affordable solutions in childcare.
            <div className="play">
              <a className="play-button" href="#" alt="">
                <img src={playButton} alt="See hapu in action" />
              </a>
              <a className="play-button-3" href="#" alt="">See hapu in action (27 seconds)</a>
            </div>
          </div>
        </section>
        <section className="right">
          <img src={imgHeader} alt="Manage your Nanny Share" />
        </section>
      </div>
      </div>
      <div className="part-2">
        <img src={profileImage} alt="A profile image" />
        <a href="#" alt="">Sarah’s day care available now in North Sydney</a> Wednesday, Thursday, Friday - 7:30 - 5:30
      </div>
    </main>
  );
}

export default Main;
