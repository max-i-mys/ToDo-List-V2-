import { restoreTask } from "../../api/crud"
import useCardsContext from "../../hooks/useCardsContext"
import "./TaskRestore.css"

export default function TaskRestore({ task }) {
	const [, dispatch] = useCardsContext()
	async function resTask(e) {
		e.preventDefault()
		await restoreTask(task.id)
		dispatch({ type: "DELETE", payload: task.id })
	}
	return (
		<>
			{task.status === 3 && (
				<button onClick={resTask} className="btn-restore">
					Del
				</button>
			)}
		</>
	)
}
