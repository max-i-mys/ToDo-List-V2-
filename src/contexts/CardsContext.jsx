import React, { useReducer, useEffect, createContext } from "react"
import { getTasks } from "../api/crud"

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
			case "UPDATE": {
				const newState = JSON.parse(JSON.stringify(state))
				const idX = newState.findIndex(task => task.id === action.payload.id)
				if (idX !== -1) {
					newState.splice(idX, 1, action.payload)
				}
				return newState
			}
			case "DELETE": {
				const newState = JSON.parse(JSON.stringify(state))
				const idX = newState.findIndex(task => task.id === action.payload)
				if (idX !== -1) {
					newState.splice(idX, 1)
				}
				return newState
			}
			default:
				throw new Error(`Wrong mean action.type: ${action.type}`)
		}
	}
	useEffect(() => {
		;(async function () {
			const [cardsData] = await getTasks()
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
