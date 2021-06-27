import { BASE_URL } from "../../api/constants"
import { fetchRemove } from "../../api/cruds"
import useCardsContext from "../../hooks/useCardsContext"
import "./TaskRestore.css"

export default function TaskDelete({ task }) {
	const [, dispatch] = useCardsContext()
	async function restoreTask(e) {
		e.preventDefault()
		await fetchRemove(BASE_URL, "tasks", task.id)
		dispatch({ type: "DELETE", payload: task.id })
	}
	return (
		<>
			{task.status === 3 && (
				<button onClick={restoreTask} className="btn-restore">
					Del
				</button>
			)}
		</>
	)
}
