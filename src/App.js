import "./App.css"
import TaskCards from "./components/TaskCards/TaskCards"
import TaskAdd from "./components/TaskAdd/TaskAdd"

function App() {
	return (
		<div className="App">
			<h1>Your ToDo list!!!</h1>
			<TaskCards />
			<TaskAdd />
		</div>
	)
}

export default App
