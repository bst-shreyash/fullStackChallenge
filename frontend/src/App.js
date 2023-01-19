import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import { render } from '@testing-library/react';
import AppDetail from './components/AppDetail';

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Search/>}/>
    <Route path="/apps/:id" element={<AppDetail/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;