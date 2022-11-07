import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { RouterProvider } from 'react-router-dom';
import router from './Route/Routes/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
