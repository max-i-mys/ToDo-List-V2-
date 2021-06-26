import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import CardsContext from "./contexts/CardsContext"

ReactDOM.render(
	<React.StrictMode>
		<CardsContext>
			<App />
		</CardsContext>
	</React.StrictMode>,
	document.getElementById("root")
)
