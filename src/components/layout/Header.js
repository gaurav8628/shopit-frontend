import React, { Fragment } from 'react'
import {Route,Link} from 'react-router-dom';
import Search from './Search'
import {useDispatch,useSelector} from 'react-redux'; 
import { useAlert } from 'react-alert';
import {logout} from '../../actions/userActions';

import '../../App.css'

const Header = () => {
  const image = './images/logo.png';
  const alert = useAlert();
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state.cart)
  const {user,loading} = useSelector(state => state.auth);
  const logoutHandler = () => {
    dispatch(logout());
    alert.success('Logged out Successfullly');
  }
    
    return (
        <Fragment>
           <nav className="navbar row" >
            <div className="col-12 col-md-3">
                <div className="navbar-brand">
                  <a href="/">
                  <img src={image} />
                  </a>
                
                </div>
            </div>

            <div className="col-12 col-md-6 mt-2 mt-md-0">
                <Route render={({history}) => <Search history={history}/>}/>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <a href='/cart' style={{textDecoration:'none'}}>
      
        <span id="cart" className="ml-3">Cart</span>
        <span className="" id="cart_count">{cartItems.length}</span>
        </a>

        {user ? (
          <div className='ml-4 mr-5 dropdown d-inline' >
            <Link to='#!' className="btn dropdown-toggle text-white mr-2"
              type='button' id="dropDownMenuButton" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded='false'>

                <figure className='avatar avatar-nav'>
                  <img
                    src={user.avatar && user.avatar.url}
                    alt={user && user.name}
                    className="rounded-circle"
                    style={{marginRight:"5px"}}
                    
                  />
                  <span style={{marginLeft:"6px"}}>{user && user.name}</span>
                </figure>
            

              </Link>
              <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">

{user && user.role === 'admin' && (
    <a className="dropdown-item" href="/dashboard">Dashboard</a>
)}
<a className="dropdown-item" href="/orders/me">Orders</a>
<a className="dropdown-item" href="/me">Profile</a>
<a className="dropdown-item text-danger" href="/" onClick={logoutHandler}>
    Logout
</a>

</div>
            </div>

        ) : !loading && <button className="btn ml-2" id="login_btn"><a href='/login' style={{textDecoration:'none',color:'black'}}>Login</a></button>}
        
        

      </div>
    </nav>
        </Fragment>
    )
}

export default Header