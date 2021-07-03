import axios from "axios"
import { BASE_URL } from "./constants"

const crud = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Content-type": "application/json; charset=UTF-8",
	},
})

crud.interceptors.response.use(
	response => {
		return [response.data, null]
	},
	error => {
		return [null, error]
	}
)

export async function getTasks() {
	return await crud.get("/tasks")
}
export async function addTask(data) {
	return await crud.post("/tasks", data)
}
export async function updateTask(id, data) {
	return await crud.patch(`/tasks/${id}`, data)
}
export async function restoreTask(id) {
	return await crud.delete(`/tasks/${id}`)
}
