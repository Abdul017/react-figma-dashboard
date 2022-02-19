
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Expenses from './pages/Expenses/Expenses'
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  

  return (
    <div className="App">
      <>
      <Router>
        <Sidebar/>
        <Expenses/>
      </Router>
      </>
    </div>
  )
}

export default App
