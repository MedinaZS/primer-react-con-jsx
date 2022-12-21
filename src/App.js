// import logo from './logo.svg';
import './App.css';
import Titulo from './components/titulo';
import TaskList from './components/tasklist';

function App() {
  const taskList = ["Learn React", "Climb Mt. Everest","Run a marathon","Feed the dogs"];
  return (
    <>
      <Titulo />
      <TaskList tareas = {taskList}/>
    </>
  );
}

export default App;
