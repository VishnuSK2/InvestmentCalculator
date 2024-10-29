import { useState } from "react"
import Header from "./Components/Header"
import UserInput from "./Components/UserInput"
import Results from "./Components/Results"

function App() {
  const[UserInputComponent, setUserInputComponent]= useState({
    initialInvestment: undefined,
    annualInvestment:undefined,
    expectedReturn: undefined,
    duration:undefined
})

const inputIsValid = UserInputComponent.duration >=1

function handleChange(inputIdentifier, newValue){
    setUserInputComponent(prevUserInput => {
        return{
            ...prevUserInput,
            [inputIdentifier]: +newValue
        }
    })
}


  return (
    <>
    <Header />
    <UserInput input={UserInputComponent} onChange={handleChange} />
    {!inputIsValid && <p className="center mt-3">
      </p>}
    {inputIsValid && <Results input={UserInputComponent}/>}
    </>
  )
}

export default App
