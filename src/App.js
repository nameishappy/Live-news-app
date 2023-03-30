
import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter,Routes ,Route} from "react-router-dom";



const App=()=>{
  const pageSize=20;
    return (
      <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<News key="general"  pageSize={pageSize} category="general"/>}/>
        <Route exact path="/business" element={<News key="business" pageSize={pageSize} category="business"/>}/>
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pageSize} category="entertainment"/>}/>
        <Route exact path="/sports" element={<News key="sports" pageSize={pageSize} category="sports"/>}/>
        <Route exact path="/health" element={<News key="health" pageSize={pageSize} category="health"/>}/>
        <Route exact path="/science" element={<News key="science" pageSize={pageSize} category="science"/>}/>
        <Route exact path="/technology" element={<News  key="technology"pageSize={pageSize} category="technology"/>}/>
        <Route exact path="/general" element={<News key="general" pageSize={pageSize} category="general"/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    )
  }



export default App;