import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './modules/auth/Loginpage';
import Registorpage from './modules/auth/Registorpage';
import Errorpage from './modules/shares/Errorpage';
import Welcomepage from './modules/dashboard/Welcomepage';
import Profilepage from './modules/dashboard/Profilepage';
import Mainpage from './modules/dashboard/Mainpage';
import Homepage from './modules/dashboard/components/Homepage';
import Aboutpage from './modules/dashboard/components/Aboutpage';
import Contactpage from './modules/dashboard/components/Contactpage';
import Productlistpage from './modules/dashboard/components/Productlistpage';
import Productdetailspage from './modules/dashboard/components/Productdetailspage';
import Mygraphpage from './modules/dashboard/components/Mygraphpage';
import Mainbranch from './modules/dashboard/components/Mainbranch';
import { Provider } from 'react-redux';
import { Mystore } from './reduxpage/Mystore';
import Reduxpage from './reduxpage/Reduxpage';
// import Mylazypage from './modules/dashboard/components/Mylazypage';
const Mylazypage = lazy(()=>import('./modules/dashboard/components/Mylazypage'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Mystore}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Loginpage/>}></Route>
        <Route path='registor' element={<Registorpage/>}></Route>
        <Route path='dashboard' element={<Welcomepage/>}></Route>
        <Route path='dashboard/profile' element={<Profilepage/>}>
          <Route path='' element={<Mainpage/>}></Route>
          <Route path='home' element={<Homepage/>}></Route>
          <Route path='about' element={<Aboutpage/>}></Route>
          <Route path='contact' element={<Contactpage/>}></Route>
            <Route path='productlist' element={<Productlistpage/>}></Route>
            <Route path='productlist/detailspage/:id' element={<Productdetailspage/>}></Route>
            <Route path='graph' element={<Mygraphpage/>}></Route>
            <Route path='property' element={<Mainbranch/>}></Route>
            <Route path='reduxpage' element={<Reduxpage/>}></Route>
            <Route path='lazypage' element={
              <Suspense fallback={<h1 className='myloader'>loadingpage...</h1>}>
                  <Mylazypage></Mylazypage>
              </Suspense>

            }></Route>

          <Route path='price' element={<Mainpage/>}></Route>

          <Route path='*' element={<Errorpage/>}></Route>
        
        </Route>
          

        <Route path='*' element={<Errorpage/>}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  </React.StrictMode>
);

