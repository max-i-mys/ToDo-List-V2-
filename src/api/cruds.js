async function fetchData(url, opts) {
	try {
		const res = await fetch(url, opts)
		if (!res.ok) {
			throw new Error(`Response error. Status ->> ${res.status}`)
		}
		const data = await res.json()
		return data
	} catch (e) {
		console.warn(e)
	}
}
//READ
export function fetchOne(base, path, id) {
	return fetchData(`${base}/${path}/${id}`)
}
export function fetchList(base, path) {
	return fetchData(`${base}/${path}`)
}
//CREATE
export function fetchAdd(base, path, data) {
	const opts = {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	}
	return fetchData(`${base}/${path}`, opts)
}
//UPDATE
export function fetchReplace(base, path, id, data) {
	const opts = {
		method: "PUT",
		body: JSON.stringify(data),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	}
	return fetchData(`${base}/${path}/${id}`, opts)
}
export function fetchMerge(base, path, id, data) {
	const opts = {
		method: "PATCH",
		body: JSON.stringify(data),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	}
	return fetchData(`${base}/${path}/${id}`, opts)
}
//DELETE
export function fetchRemove(base, path, id) {
	const opts = {
		method: "DELETE",
	}
	return fetchData(`${base}/${path}/${id}`, opts)
}
