import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import Header from './components/header/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
