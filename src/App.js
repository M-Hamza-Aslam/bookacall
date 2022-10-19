import "./App.css";
import MentorList from "./Components/Mentors/MentorList";
import RootDiv from "./Components/UI/RootDiv";

function App() {
  return (
    <div className="App">
      <RootDiv>
        <MentorList />
      </RootDiv>
    </div>
  );
}

export default App;
