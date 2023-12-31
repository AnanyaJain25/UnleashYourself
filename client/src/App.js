// import logo from './logo.svg';
import './App.css';
//components
import CreatePost from './components/create/CreatePost';
import Update from './components/create/Update';
import Login from './components/account/Login';
import DataProvider from './context/DataProvider';
import Home from './components/home/Home';
import Header from './components/header/Header';
import {BrowserRouter, Routes, Route , Outlet , Navigate} from 'react-router-dom';
import DetailView from './components/details/DetailView';
import { useState } from 'react';
import About from './components/about/About';
import Contact from './components/contacts/Contacts';
import Userprofile from './components/details/user/Userprofile';
import OthersProfile from './components/details/user/OtherUser';


 
function App() {
 const PrivateRoute = ({ isAuthenticate ,...props }) =>{
  const token =sessionStorage.getItem('accessToken');
 
  return isAuthenticated  &&token?
  <>
  <Header/>
  <Outlet/>
  </>
  : <Navigate replace to = '/Login' />
 }
  const[isAuthenticated,isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
      
      <div style={{marginTop:64}}>
      <Routes>

      <Route path='/Login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
      <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/' element={<Home />} />
             </Route>

             <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/create' element={<CreatePost />} />
            </Route>

            <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/details/:id' element={<DetailView />} />
            </Route>
      <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/update/:id' element={<Update />} />
            </Route>

      <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/about' element={<About />} />
            </Route>

      <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/contact' element={<Contact />} />
            </Route>

            <Route path='/Updateuser' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/Updateuser' element={<Userprofile />} />
            </Route>

            <Route path='/view/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/view/:id' element={<OthersProfile />} />
            </Route>

            </Routes>
      

      </div>
      </BrowserRouter>
    
    </DataProvider>
  );
}

export default App;
