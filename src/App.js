import logo from './logo.svg';
import './App.css';
import PlusButton from "./PlusButton";

function App() {
  const appClick = (n) => {
    console.log('App Click',n)
  }
  return (
    <div className="App">
     <PlusButton
     buttonText="Plus One"
     buttonOnClick={appClick}
     />
    </div>
  );
}

export default App;
