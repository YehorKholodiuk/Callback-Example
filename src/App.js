import logo from './logo.svg';
import './App.css';
import PlusButton from "./PlusButton";
import {useState} from "react";

function App() {

    const [name, setName] = useState('ABC')
  //const appClick = (n) => {
    //console.log('App Click',n)


const onChangeName = (newValue) => {
    console.log('New value', newValue)
setName(newValue)
};
  return (
    <div className="App">
     <PlusButton
     //buttonText="Plus One"
     //buttonOnClick={appClick}
         value={name}
         onChange={onChangeName}
     />
    </div>
  );
}

export default App;
