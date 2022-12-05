import './App.css';
import AsyncAwait from './components/async-await';
import DadJokes from './components/dad-jokes';
import Posts from './components/placeholder';
import PlainOld from './components/plain-old';
import UseEffect from './components/use-effect';

function App() {
  return (
    <div className="App">
      <h3>Axios Test</h3>
      <PlainOld/>
      <AsyncAwait/>
      <UseEffect/>
      <DadJokes/>
      <Posts/>
    </div>
  );
}

export default App;
