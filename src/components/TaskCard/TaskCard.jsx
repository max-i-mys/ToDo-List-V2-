import { formatterDate, formatterDateAndTime } from "../../utils/constants"
import { defineStatus } from "../../utils/functions"

export default function TaskCard({ task }) {
	return (
		<>
			<div className="task">
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
