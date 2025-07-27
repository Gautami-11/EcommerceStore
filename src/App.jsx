import {BrowserRouter as Router ,Routes ,Route , Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
 import Home from "./pages/Home";
 import Gifts from "./pages/Gifts";
 import NewCollection from "./pages/NewCollection";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SignUp from "./components/Auth/SignUp";
import NotFound from "./components/NotFound";


function App() {


  return (
   <Router>
    <Navbar/>
      <Routes>
      
        <Route
          path="/"
          element={
         
              <Home />
           
          }
        />
<Route
          path="/newcollections"
          element={
          <NewCollection/>
          }
        />
        <Route
          path="/gifts"
          element={
           <Gifts/>
          }
        />
 <Route
          path="/aboutUs"
          element={
           <AboutUs/>
          }
        />

 <Route
          path="/contactUs"
          element={
           <ContactUs/>
          }
        />

       < Route
          path="/sign-up"
          element={
           <SignUp/>
          }
        />
<Route path="/notfound" element={<NotFound />} />
        

      
      </Routes>
    
    </Router>
  )
}

export default App
