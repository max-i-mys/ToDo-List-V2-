import React, { useState } from "react"
import { addTask } from "../../api/crud"
import useCardsContext from "../../hooks/useCardsContext"
import "./TaskAdd.css"

export default function TaskAdd() {
	const [, dispatchTask] = useCardsContext()
	const [title, setTitle] = useState("")
	const [body, setBody] = useState("")
	const [expDate, setExpDate] = useState("")
	async function addNewTask(e) {
		e.preventDefault()
		const [newTask] = await addTask({
			title: title,
			body: body,
			createdAt: Date.now(),
			processAt: null,
			finishedAt: null,
			expirateAt: Date.parse(expDate),
			status: 1,
		})
		dispatchTask({ type: "ADD", payload: newTask })
		e.target.reset()
	}

	return (
		<>
			<form onSubmit={addNewTask} className="task__add">
				<input
					className="task__add-title"
					type="text"
					onChange={e => setTitle(() => e.target.value)}
					placeholder="Title"
					required
				/>
				<textarea
					className="task__add-body"
					onChange={e => setBody(() => e.target.value)}
					placeholder="Description"
					required
				></textarea>
				<span>Enter expiration date</span>
				<input
					type="date"
					onChange={e => setExpDate(() => e.target.value)}
					required
				/>
				<button className="task__btn" type="submit">
					Add
				</button>
			</form>
		</>
	)
}
