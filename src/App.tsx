import './App.css'
import {Route, Routes,BrowserRouter as Router} from "react-router-dom";
import ProductsPages from "./features/product";
import PageNotFound from "./features/auth/pages/PageNotFound.tsx";
import LoginPage from "./features/auth/pages/LoginPage.tsx";
import SignUpPage from "./features/auth/pages/SignUpPage.tsx";

function App() {

  return (
    <>
      <Router>
        <Routes>
            {/*public route*/}
            <Route path='*' Component={PageNotFound} />
            <Route path='/' Component={ProductsPages} />
            <Route path = '/login' Component={LoginPage}/>
            <Route path = '/signUp' Component={SignUpPage}/>



            {/*private route*/}



        </Routes>
      </Router>
    </>
  )
}

export default App
