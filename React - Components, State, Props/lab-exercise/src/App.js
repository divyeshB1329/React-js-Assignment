import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import WelcomeMessage from './components/WelcomeMessage';
import UserCard from './components/UserCard';
import Counter from './components/Counter';

function App() {
  const FirstBasicComponent = () => {
    return ("Hello React!");
  }

  const dec = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique quibusdam molestiae voluptatem quam quos nulla impedit, dolor ducimus magnam molestias iusto vel dignissimos, aliquid repudiandae quisquam, temporibus amet numquam possimus expedita quas? Nobis non autem et laboriosam est dicta quidem suscipit, iusto praesentium? Non aut exercitationem natus totam tempora!";
  return (
    <>
      {/*Task-1: Set up a new React.js project using create-react-app.
          Create a basic component that displays "Hello, React!" on the web page. */}
      {/* <FirstBasicComponent /> */}



      {/*Task-2: Create a React component that renders the following JSX elements:
        • A heading with the text "Welcome to JSX".
        • A paragraph explaining JSX with dynamic data (use curly braces to
          insertvariables). */}
      {/* <h1>Welcome to JSX</h1>
      <p>{dec}</p> */}



      {/* Task 3.0 : Create a functional component Greetingthat accepts a nameas a prop and displays "Hello, [name]!". */}
      {/* <Greeting name="divyesh" /> */}

      {/* Task 3.1: Create a class component WelcomeMessagethat displays "Welcome to React!" and a render()method. */}
      {/* <WelcomeMessage />  */}



      {/* Task 4.0 : Create a React component UserCard that accepts name, age, and location as props and displays them in a card format. */}
      {/* <UserCard name="divyesh" age="21" location="Ahmedabad" />  */}

      {/* Task 4.1: Create a Counter component with a button that increments a count value using React state. Display the current count on the screen. */}
      {/* <Counter /> */}

    </>
  );
}

export default App;
