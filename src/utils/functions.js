export function defineStatus(status) {
	switch (status) {
		case 1:
			return "new"
		case 2:
			return "process"
		case 3:
			return "finished"
		default:
			throw new Error(`${status} is not status  `)
	}
}
export function checkAndSetStatus(status) {
	switch (status) {
		case 1:
			return 2
		default:
			return 3
	}
}
