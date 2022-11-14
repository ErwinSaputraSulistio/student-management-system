import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { GlobalContextProvider } from "./common-module/context/GlobalContext"
import AppRouter from "./common-module/config/router"
import "./App.css"

const App = () => {
	return(
		<GlobalContextProvider>
			<Router>
				<Routes>
					{ AppRouter.map((route) => {
						return <Route key={ route.id } path={ route.path } element={ route.element }/>
					}) }
				</Routes>
			</Router>
		</GlobalContextProvider>
	)
}

export default App
