export function defineStatus(status) {
	switch (status) {
		case 1:
			return "New"
		case 2:
			return "Process"
		case 3:
			return "Finished"
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
