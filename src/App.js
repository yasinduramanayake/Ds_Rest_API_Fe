import React from 'react';
import {BrowserRouter, Route,Switch} from "react-router-dom";
import './assets/css/admin/admin2.css';
import './assets/css/user/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddProducts from './components/admin/products/AddProducts';
import ViewProducts from './components/admin/products/ViewProducts';
import EditProducts from './components/admin/products/EditProducts';
import AdminHome from './components/admin/AdminHome';
import Products from './components/user/Products';
import Home from './components/user/Home';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import EditProfile from './components/user/UpdateUser';
import PaymentMethod from './components/user/PaymentMethod';
import PaymentMobile from './components/user/PaymentMobile';
import PaymentCard  from  './components/user/PaymentCard'; 
import Order from './components/user/Order';
import OrderEdit from './components/user/OrderEdit';
import OrderView from './components/user/OrderView';


function App() {
  return (
    <BrowserRouter>
        <div >
          <Route exact path="/products/add" component={AddProducts}/>
          <Route exact path="/products/view" component={ViewProducts}/>
          <Route exact path="/products/edit/:id" component={EditProducts}/>
          <Route exact path="/admin/home" component={AdminHome}/>
          <Route exact path="/products" component={Products} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/editprofile" component={EditProfile} />
          <Route exact path="/payment" component={PaymentMethod}/> 
          <Route exact path="/payment/mobile" component={PaymentMobile}/> 
          <Route exact path="/payment/card" component={PaymentCard}/>
          <Route exact path="/order/:id" component={Order}/> 
          <Route exact path="/orders/view" component={OrderView}/>
          <Route exact path="/orders/edit/:id" component={OrderEdit}/>
        </div>
    </BrowserRouter>
  );
}

export default App;
