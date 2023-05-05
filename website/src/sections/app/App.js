import './App.scss';

import Prediction from '../predictions/Prediction';
import Welcome from '../welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Prediction />
    </div>
  );
}

export default App;
