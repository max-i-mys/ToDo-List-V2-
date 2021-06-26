import React, { useState } from "react"
import { BASE_URL } from "../../api/constants"
import { fetchAdd } from "../../api/cruds"
import useCardsContext from "../../hooks/useCardsContext"

export default function TaskAdd() {
	const [, dispatchTask] = useCardsContext()
	const [title, setTitle] = useState("")
	const [body, setBody] = useState("")
	const [expDate, setExpDate] = useState("")
	async function addNewTask(e) {
		e.preventDefault()
		const newTask = await fetchAdd(BASE_URL, "tasks", {
			title: title,
			body: body,
			createdAt: Date.now(),
			processAt: false,
			finishedAt: false,
			expirateAt: Date.parse(expDate),
			status: 1,
		})
		dispatchTask({ type: "ADD", payload: newTask })
		e.target.reset()
	}

	return (
		<>
			<form onSubmit={addNewTask}>
				<input
					type="text"
					onChange={e => setTitle(() => e.target.value)}
					required
				/>
				<textarea
					cols="50"
					rows="10"
					onChange={e => setBody(() => e.target.value)}
					required
				></textarea>
				<span>Enter expiration date</span>
				<input
					type="date"
					onChange={e => setExpDate(() => e.target.value)}
					required
				/>
				<button type="submit">Add</button>
			</form>
		</>
	)
}
