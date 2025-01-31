const rootEl = document.getElementById('root')

const root = ReactDOM.createRoot(rootEl)

//creare una componente React
const App = ({children}) =>{ //props passa le informazioni e le proprietà dei figli alla componente, oppure si usa children
    return <main className="main">
        questa è una componente React
        {children}
    </main>

}

function List() { // altra componente
    return <ul>
                <li>PHP</li>
                <li>JavaScript</li>
                <li>HTML</li>
        </ul >
};


root.render( // scrivere in html, poi convertito in javaScript da babel
    <>
        <App>
            <h1>Using JSX</h1>
            <List/> 
        </App> 

    </>
)