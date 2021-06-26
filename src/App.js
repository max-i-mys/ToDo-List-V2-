import "./App.css"
import TaskCards from "./components/TaskCards/TaskCards"
import TaskAdd from "./components/TaskTodo/TaskTodo"

function App() {
	return (
		<div className="App">
			<TaskCards />
			<TaskAdd />
		</div>
	)
}

export default App
