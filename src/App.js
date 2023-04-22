import logo from './img/logo.png';
import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <div className='logo-box'>
          <img src={logo} alt="LG Santiago Logo" className="logo"></img>
        </div>
      </header>
    </div>
  );
}

export default App;
