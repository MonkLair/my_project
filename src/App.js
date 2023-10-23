import Homepage from "./components/home/Homepage"
import Userspage from "./components/users/Userspage"
import Chatpage from "./components/chat/Chatpage"
import {Routes, Route} from "react-router-dom"

import "./styles/App.css"

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/users' element={<Userspage/>}/>
            <Route path='/chat' element={<Chatpage/>}/>
        </Routes>
    </div>
  );
}

export default App;
