import LocalContextProvider from "./context/LocalContext"

const HocProvider = (Component) => (props) => {
    return(
        <LocalContextProvider>
            <Component {...props}/>
        </LocalContextProvider>
    )
}

export default HocProvider