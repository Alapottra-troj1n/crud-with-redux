import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddBooks from "./components/pages/AddBooks";
import EditBook from "./components/pages/EditBook";
import Error from "./components/pages/Error";
import Home from "./components/pages/Home";
import ShowBooks from "./components/pages/ShowBooks";

function App() {
  
  return (
    <div>
 
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home></Home>}/>
    <Route path='/showbooks' element={<ShowBooks></ShowBooks>}/>
    <Route path='/addbooks' element={<AddBooks></AddBooks>}/>
    <Route path='/edit-book' element={<EditBook/>}/>
    <Route path='*' element={<Error></Error>}/>

    </Routes>
      
    </div>
  );
}

export default App;
