
import './App.css';
import BsComponent from './components/BsComponent';
import Buttons from './components/Buttons';
import Lists from './components/Lists';

function App() {
  return (
    <div className="App">
      <h1>Hello from react app 1</h1>
      <Buttons  data="data is being passed form props" />
      <Lists />
      <BsComponent />
    </div>
  );
}

export default App;
