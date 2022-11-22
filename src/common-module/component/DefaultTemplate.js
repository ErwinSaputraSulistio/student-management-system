const DefaultTemplate = ({ children, headerTitle }) => {
    return(
        <div className="container">
            <header className="p-3">
                <h1>{ headerTitle }</h1>
            </header>
            <main>
                { children }
            </main>
        </div>
    )
}

export default DefaultTemplate