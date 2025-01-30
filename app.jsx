const rootEl = document.getElementById('root')

const root = ReactDOM.createRoot(rootEl)

//creare una componente React
const App = (props) =>{
    return <main className="main">
        questa è una componente React
        {props.children}
    </main>

}

root.render( // scrivere in html, poi convertito in javaScript da babel
    <>
        <App>
            <h1>Using JSX</h1>
            <ul>
                <li>PHP</li>
                <li>JavaScript</li>
                <li>HTML</li>
            </ul>
        </App> 

    </>
)