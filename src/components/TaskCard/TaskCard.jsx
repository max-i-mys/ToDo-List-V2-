import { BASE_URL } from "../../api/constants"
import { fetchMerge } from "../../api/cruds"
import useCardsContext from "../../hooks/useCardsContext"
import { formatterDate, formatterDateAndTime } from "../../utils/constants"
import { checkAndSetStatus, defineStatus } from "../../utils/functions"

export default function TaskCard({ task }) {
	const [, dispatch] = useCardsContext()
	async function setNewStatus(e) {
		e.preventDefault()
		const nextStatus = checkAndSetStatus(task.status)
		if (nextStatus !== task.status) {
			const taskWithNewStatus = await fetchMerge(BASE_URL, "tasks", task.id, {
				status: nextStatus,
				processAt: nextStatus === 2 ? Date.now() : task.processAt,
				finishAt: nextStatus === 3 ? Date.now() : task.finishAt,
			})
			dispatch({ type: "UPDATE", payload: taskWithNewStatus })
		}
	}
	return (
		<>
			<div className="task" onContextMenu={setNewStatus}>
				<h3>{task.title}</h3>
				<h5>{defineStatus(task.status)}</h5>
				<div>
					<p>{task.body}</p>
					<div>
						<span>
							Expiration date: {formatterDate.format(task.expirateAt)}
						</span>
						<div>
							<span>
								Created: {formatterDateAndTime.format(task.createdAt)}
							</span>
							{task.processAt && (
								<span>
									Process: {formatterDateAndTime.format(task.processAt)}
								</span>
							)}
							{task.finishAt && (
								<span>
									Finished: {formatterDateAndTime.format(task.finishAt)}
								</span>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
