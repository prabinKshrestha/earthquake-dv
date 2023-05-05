import './Prediction.scss';

import logo from '../../assets/images/main_bg.png';

function Prediction() {
  return (
    <>
      <div className="Century-Killed">
        <h3>
          Do you know how many people has earthquake killed in 21st century?
        </h3>
        <h1>4,049,136</h1>
      </div>
      <div className="Prediction-Prediction">
        <h3>Does it look massive?</h3>
        <h3>
          What if I say, in next 73 years, 5 times the above number may die
          because of earthquake??
        </h3>
        <h3> Scary! Isn't it?</h3>
        <h3> Lets see the data.</h3>
      </div>
      <div className="Prediction-visualization">
        <div className="visualization">
          <img src={logo} />
        </div>
        <div className="description">
          <h3>Here will be the description for all</h3>
          <h5>Growing each year. Blah blah</h5>
          <h5>Growing each year. Blah blah</h5>
          <h5>Growing each year. Blah blah</h5>
          <h5>Growing each year. Blah blah</h5>
          <h5>Growing each year. Blah blah</h5>
        </div>
      </div>
    </>
  );
}

export default Prediction;
