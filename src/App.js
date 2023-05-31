import './App.css';
import { Data } from './components/DataTesla';
import { Discription } from './components/discription';


function App() {
  return (
    <div>
      <h2>Nicola Tesla</h2>
      <div class="data">
        <Data />
      </div>
      <div class="dicription">
        <Discription />
      </div>
    </div>
  );
}

export default App;
