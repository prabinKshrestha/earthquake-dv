import './Welcome.scss';

import background_image from '../../assets/images/main_bg.png';

function Welcome() {
  return (
    <div className="Welcome">
      <img src={background_image} className="Background-Image" alt="logo" />
      <div className="Content">
        <h1 className='secondary-font'>Earthquake</h1>
        <h2>Disaster to think</h2>
      </div>
    </div>
  );
}

export default Welcome;
