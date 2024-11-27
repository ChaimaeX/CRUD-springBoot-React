import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Header from './pages/header/Header';
import NoMatch from './pages/noMatch/NoMatch';
import PostUser from './pages/employer/PostUser';
import UpUser from './pages/employer/UpUser';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/employer' element={<PostUser/>} />
        <Route path='/employer/:id' element={<UpUser/>} />
        <Route path='*' element={<NoMatch/>} />
      </Routes>
    </>
  );
}

export default App;

