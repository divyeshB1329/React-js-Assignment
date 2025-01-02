import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './components/Form'
import Button from './components/Button'
import DynamicInputForm from './components/DynamicInputForm'
import Counter from './components/Counter'
import UseEfect from './components/UseEfect'
import Clcomponent from './components/Clcomponent'
import UpdateUseClcomponents from './components/UpdateUseClcomponents'
// import './App.css'

function App() {

  return (
    <>
      {/* Task 1:Create a form with inputs for name, email, and password. Use state to control the
          form and display the form data when the user submits it. */}
      {/* Task 2:Add validation to the form created above. For example, ensure that the emailinput
          contains a valid email address */}

      <Form />



      {/* Task 1:Create a button in a React component that, when clicked, changes the text
          from"Not Clicked" to "Clicked!" using event handling. */}

      {/* <Button /> */}



      {/* Task 2:Create a form with an input field in React. Display the value of the input
          fielddynamically as the user types in it. */}

      {/* <DynamicInputForm /> */}



      {/* Task 1:Create a functional component with a counter using the useState()hook. Include
          buttons to increment and decrement the counter. */}

      {/* <Counter /> */}



      {/* Task 2:Use the useEffect()hook to fetch and display data from an API when the
          component mounts       */}

      {/* <UseEfect /> */}



      {/* Task 1:Create a class component that fetches data from an API when the
          componentmounts using componentDidMount(). Display the data in the
          component. */}

      {/* <Clcomponent /> */}



      {/* Task 2:Implement a component that logs a message to the console when it updates
          using componentDidUpdate(). Log another message when the component
          unmountsusing componentWillUnmount(). */}

      {/* <UpdateUseClcomponents /> */}
    </>
  )
}

export default App
