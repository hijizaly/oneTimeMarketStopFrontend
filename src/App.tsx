import './App.css'
import {Route, Routes,BrowserRouter as Router} from "react-router-dom";
import ProductsPages from "./features/product";
import PageNotFound from "./features/auth/pages/PageNotFound.tsx";
import LoginPage from "./features/auth/pages/LoginPage.tsx";
import SignUpPage from "./features/auth/pages/SignUpPage.tsx";
import PrivateRoute from "./features/auth/components/PrivateRoute.tsx";
import Homepage from "./features/dashboard/pages/Homepage.tsx";

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

            <Route path='/dashboard' Component={PrivateRoute}>
                <Route index Component={Homepage} />

            </Route>



        </Routes>
      </Router>
    </>
  )
}

export default App
