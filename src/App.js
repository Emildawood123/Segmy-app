import FormPage from './Componants/formPage';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inputs from './Componants/inputsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<FormPage />}></Route>
       <Route path="/Solve/:Numbers" element={<Inputs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
