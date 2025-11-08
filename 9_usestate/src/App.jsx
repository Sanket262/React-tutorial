
import './App.css'
import USComponent from './components/USComponent'
import USComponentwithobject from './components/USComponentwithobject'
import USCompWithArray from './components/USCompWithArray'
import USCompWithArraymstate from './components/USCompWithArraymstate'
import USCompwithnumarray from './components/USCompwithnumarray'

function App() {
 

  return (
    <div>
      <USComponent/>
      <USCompWithArray/>
      <USCompWithArraymstate/>
      <USComponentwithobject/>
      <USCompwithnumarray/>
    </div>
  )
}

export default App
