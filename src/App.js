import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './assets/css/admin/admin2.css';
import './assets/css/user/style.css';


import AddProducts from './components/admin/products/AddProducts';
import ViewProducts from './components/admin/products/ViewProducts';
import EditProducts from './components/admin/products/EditProducts';
import AdminHome from './components/admin/AdminHome';
import Products from './components/user/Products';
import Home from './components/user/Home';
import Register from './components/user/register';
import Login from './components/user/login';
import Profile from './components/user/profile';
import EditProfile from './components/user/edit';



function App() {
  return (
    <BrowserRouter>
        <div className="container">
          {/* <Route exact path="/" component={Home}/> */}
          {/* <Route exact path="/login" component={Login}/> */}
          <Route exact path="/products/add" component={AddProducts}/>
          <Route exact path="/products/view" component={ViewProducts}/>
          <Route exact path="/products/edit/:id" component={EditProducts}/>
          <Route exact path="/admin/home" component={AdminHome}/>
          <Route exact path="/products" component={Products} />
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/editprofile" component={EditProfile } />

        </div>
    </BrowserRouter>
  );
}

export default App;
