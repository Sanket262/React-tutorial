
import './App.css'
import Component2 from './components/Component2';
import Component1 from './components/Component1';
function App() {

 const name="Sanket";
 if(name=="Sanket")
 {
    return <Component1/>
 }
 else
 {
    return <Component2/>
 }
  
}

export default App
