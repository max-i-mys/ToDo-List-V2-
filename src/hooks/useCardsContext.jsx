import { useContext } from "react"
import { DataContext } from "../contexts/CardsContext"

export default function useCardsContext() {
	return useContext(DataContext)
}
