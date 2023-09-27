import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/shared/header/header';
import Main from './components/shared/mainRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
