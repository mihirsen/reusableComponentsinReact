import "bulma/css/bulma.css";
import Alexa from "./images/alexa.png";
import Siri from "./images/siri.png";
import Crotona from "./images/cortana.png";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title"> Personal Digital Assistants</p>
        </div>
      </section>
      <div className="conatiner">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard title="Alexa" handle="@alexa34" image={Alexa} />
            </div>
            <div className="column is-3">
              <ProfileCard title="crotona" handle="@crona32" image={Siri} />
            </div>
            <div className="column is-3">
              <ProfileCard title="Sri" handle="@sri30" image={Crotona} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
