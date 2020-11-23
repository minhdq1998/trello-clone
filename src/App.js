import Column from './components/template/Column'

const TrelloClone = () => (
    <div>
        <h3>Trello Clone</h3>
        <div className="container trello-clone-container">
            <Column />
        </div>
    </div>
)

const App = () => (
    <div>
        <TrelloClone />
    </div>
)

export default App