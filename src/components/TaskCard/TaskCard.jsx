import { useState } from "react"
import { BASE_URL } from "../../api/constants"
import { fetchMerge } from "../../api/cruds"
import useCardsContext from "../../hooks/useCardsContext"
import { formatterDate, formatterDateAndTime } from "../../utils/constants"
import { checkAndSetStatus, defineStatus } from "../../utils/functions"
import TaskDelete from "../TaskRestore/TaskRestore"
import "./TaskCard.css"

export default function TaskCard({ task }) {
	const [body, setBody] = useState(true)
	const [, dispatch] = useCardsContext()
	const stringStatus = defineStatus(task.status)
	async function setNewStatus(e) {
		e.preventDefault()
		const nextStatus = checkAndSetStatus(task.status)
		if (nextStatus !== task.status) {
			const taskWithNewStatus = await fetchMerge(BASE_URL, "tasks", task.id, {
				status: nextStatus,
				processAt: nextStatus === 2 ? Date.now() : task.processAt,
				finishedAt: nextStatus === 3 ? Date.now() : task.finishedAt,
			})
			dispatch({ type: "UPDATE", payload: taskWithNewStatus })
		}
	}
	return (
		<>
			<div className={`task ${stringStatus}`} onContextMenu={setNewStatus}>
				<div className="task__title">
					<h3>{task.title}</h3>
					<h5>({stringStatus})</h5>
				</div>
				<div className="task__desk-box">
					<p
						onClick={() => setBody(!body)}
						className={body ? "task__desk" : undefined}
					>
						{task.body}
					</p>
				</div>
				<div className="task__date">
					<span>Expiration date: {formatterDate.format(task.expirateAt)}</span>
					<span>Created: {formatterDateAndTime.format(task.createdAt)}</span>
					{task.processAt && (
						<span>Process: {formatterDateAndTime.format(task.processAt)}</span>
					)}
					{task.finishedAt && (
						<span>
							Finished: {formatterDateAndTime.format(task.finishedAt)}
						</span>
					)}
				</div>
				<TaskDelete task={task} />
			</div>
		</>
	)
}
