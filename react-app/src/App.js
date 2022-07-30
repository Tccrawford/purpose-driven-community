import './App.css';
// import NavBar from './components/NavBar';
import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from './context/UserContext';
import {Container} from "react-bootstrap";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm'
import HomePage from './Home';



function App() {
  const [user, setUser] = useState({username: "", isAuthenticated: false});
    return (    
      <UserContext.Provider value={user}>
        <Router>
          <Container>
              <Routes>
              <Route 
                  path="/register"
                  element={<RegisterForm setUser={setUser} />}
                />
                <Route 
                  path="/login"
                  element={<LoginForm setUser={setUser} />}
                />
                <Route 
                  path="/"
                  element={<HomePage />}
                /> 
                
              </Routes>
          </Container>
        </Router>
        
         
      </UserContext.Provider>
    
  );
}

export default App;
