export default function TaskCard({ task }) {
	return (
		<>
			<div className="task">
				<h3>{task.title}</h3>
				<h5>{task.status}</h5>
				<div>
					<p>{task.body}</p>
					<div>
						<span>Expiration date: {task.atExpirate}</span>
						<div>
							<span>Created: {task.atCreate}</span>
							{task.atProcess && <span>Process: {task.atProcess}</span>}
							{task.atFinish && <span>Finished: {task.atFinish}</span>}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
