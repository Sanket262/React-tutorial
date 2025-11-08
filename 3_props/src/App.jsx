
import './App.css'
import Student from './components/Student'
import House from './components/House'
function App() {
  
let a="Amit"
  return (
    <>
      {/* <Student name="sanket" age ={20}/>
      <Student name={a} age={12}/>
       <Student name="Ajay" age ={25}/>
        <Student name="Anshul" age ={2}/> */}



         <Student name="sanket" age ={20}>
          <p>this is a children Element</p>
         </Student>
      <Student name={a} age={12}> 
        <button type="button" value="Click">Click</button>
        </Student>
       <Student name="Ajay" age ={25}>
        <p>This is a Children 4</p>
        </Student>
        <Student name="Anshul" age ={2}> 
          <p>This is a Children 4</p>
          </Student>

          <House/>
    </>
  )
}

export default App
