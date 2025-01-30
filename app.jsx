const rootEl = document.getElementById('root')

const root = ReactDOM.createRoot(rootEl)

//creare una componente React
const App = () =>{
    return <main className="main">
        questa è una componente React
    </main>

}

root.render( // scrivere in html, poi convertito in javaScript da babel
    <>
        <App></App> 
        <h1>Using JSX</h1>
        <ul>
            <li>PHP</li>
            <li>JavaScript</li>
            <li>HTML</li>
        </ul>
    </>
)