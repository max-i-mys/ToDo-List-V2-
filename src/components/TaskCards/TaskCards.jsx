import useCardsContext from "../../hooks/useCardsContext"
import TaskCard from "../TaskCard/TaskCard"

export default function TaskCards() {
	const [cards] = useCardsContext()
	return (
		<>
			{cards.map(task => (
				<TaskCard key={task.id} task={task} />
			))}
		</>
	)
}
