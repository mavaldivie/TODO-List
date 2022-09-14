import './App.css';
import Todo from './components/todo/todo'
import AddForm from './components/crud/add'
import EditForm from './components/crud/edit'
import Layout from './components/layout/layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Todo />}/>
            <Route path='/add' element={<AddForm />}/>
            <Route path='/:id' element={<EditForm />}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
