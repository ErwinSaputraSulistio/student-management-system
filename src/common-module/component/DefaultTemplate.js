const DefaultTemplate = ({ children, headerTitle }) => {
    return(
        <div className="container">
            <header>
                <h1>{ headerTitle }</h1>
            </header>
            <main>
                { children }
            </main>
        </div>
    )
}

export default DefaultTemplate