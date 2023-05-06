import './Welcome.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import background_image from '../../assets/images/main_bg.png';

function Welcome() {
  return (
    <div className="Welcome">
      <img src={background_image} className="Background-Image" alt="logo" />
      <div className="Header">
        <div className="Right">
          <button className="btn btn-white-outline bg-transparent">
            <FontAwesomeIcon icon="fa-brands fa-github" /> &nbsp;
            GitHub
          </button>
        </div>
      </div>
      <div className="Content">
        <h1 className="secondary-font">Earthquake</h1>
        <h2>Disaster to think</h2>
      </div>
    </div>
  );
}

export default Welcome;
