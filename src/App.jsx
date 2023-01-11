import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [weight, setWeight] = useState("")
  const [minutes, setMinutes] = useState("")
  const weightFormulaNumber = 30
  const numberlimit = 3


  //function to update the input value every time's update
  const onChangeHandlerWeight = event => {

    setWeight(event.target.value
      .slice(0, numberlimit));
 };

 const onChangeExericseInput = event => {
  setMinutes(event.target.value
    .slice(0, numberlimit));
  }
 
function evaluateResult(weightUnits, minuteUnits){
  let result = weightUnits / weightFormulaNumber

  
  if (minuteUnits != 0 || "")
  result = weightUnits / weightFormulaNumber + ((minuteUnits * 0.35) / 30 )

  return result
  }

  return (
    <div className="App">


    <div className="main-content">

    <div className='title-container'>
    <span className='text-2xl font-bold uppercase text-white'>water intake calculator</span>
    </div>

      <div className="form-group py-4">
        
        <div className='weight-component'>
          <div className='weight-divider'>

    <div className='font-container'>
        <span class="form-font pr-36">Weight</span>
        </div>
        <div className='form-container'>
      <input type="number" className='form-style shadow-xl' value={weight} 
      onChange={onChangeHandlerWeight} placeholder="Insert your weight in KG"></input>
      </div>
      </div>
      </div>

      <div className='minute-component'>
        <div className='minute-divider'>
      <div className='font-container'>
        <span class="form-font">Exercise Minutes Daily</span>
        </div>
        <div className='form-container'>
      <input className="form-style shadow-xl"type="number" placeholder="Insert your training minutes" value={minutes} onChange={onChangeExericseInput}></input>
      </div>
    </div>
    </div>




<div className='result-component m-0'>

<p className='uppercase text-white font-semibold'>You should drink {evaluateResult(weight, minutes).toFixed(2)} liters of water every day</p>


    </div>


    </div>
    </div>
    </div>
  )
}


export default App
