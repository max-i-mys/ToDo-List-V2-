import React, { useReducer, useEffect, createContext } from "react"
import { BASE_URL } from "../api/constatns"
import { fetchList } from "../api/cruds"
const initialState = []

export const DataContext = createContext()
export default function CardsContext({ children }) {
	const [cards, dispatch] = useReducer(reducer, initialState)
	function reducer(state, action) {
		switch (action.type) {
			case "INITIAL":
				return action.payload
			default:
				break
		}
	}
	useEffect(() => {
		;(async function () {
			const cardsData = await fetchList(BASE_URL, "tasks")
			dispatch({ type: "INITIAL", payload: cardsData })
		})()
	}, [cards])

	return (
		<>
			<DataContext.Provider value={[cards, dispatch]}>
				{children}
			</DataContext.Provider>
		</>
	)
}
