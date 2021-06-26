import React, { useReducer, useEffect, createContext } from "react"
import { BASE_URL } from "../api/constants"
import { fetchList } from "../api/cruds"
const initialState = []

export const DataContext = createContext()
export default function CardsContext({ children }) {
	const [cards, dispatch] = useReducer(reducer, initialState)
	function reducer(state, action) {
		switch (action.type) {
			case "INITIAL":
				return action.payload
			case "ADD":
				return [...state, action.payload]
			default:
				throw new Error(`Wrong mean action.type: ${action.type}`)
		}
	}
	useEffect(() => {
		;(async function () {
			const cardsData = await fetchList(BASE_URL, "tasks")
			dispatch({ type: "INITIAL", payload: cardsData })
		})()
	}, [])

	return (
		<>
			<DataContext.Provider value={[cards, dispatch]}>
				{children}
			</DataContext.Provider>
		</>
	)
}
