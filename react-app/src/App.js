import './App.css';
import NavBar from './components/NavBar';
import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from './context/UserContext';
import {Container} from "react-bootstrap";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm'



function App() {
  const [user, setUser] = useState({username: "", isAuthenticated: false});
    return (    
      <UserContext.Provider value={user}>
        <Router>
          <NavBar />
          <Container>
              <Routes>
              <Route 
                  path="/"
                  element={<RegisterForm setUser={setUser} />}
                />
                <Route 
                  path="/login"
                  element={<LoginForm setUser={setUser} />}
                />
                
              </Routes>
          </Container>
        </Router>
        
          <h1>Purpose Driven Community</h1>
      </UserContext.Provider>
    
  );
}

export default App;
