import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const ProtectedRoute = ({  isAdmin,component: Component, ...rest }) => {
    const { isAuthenticated, loading, user } = useSelector(state => state.auth)
    // const navigate = useNavigate();

    
    // const redirect = (path) => {
    //     navigate(path);
    // }
   


    return (
        <Fragment>
            {loading === false && (
                <Route
                    {...rest}
                    render={props => {
                        if (isAuthenticated === false) {
                            return <Redirect to='/login' />
                            // redirect('/login')
                           
                        }

                        if (isAdmin === true && user.role !== 'admin') {
                            return <Redirect to="/" />
                            // redirect('/')
                        }

                        return <Component {...props} />
                    }}
                />
            )}
        </Fragment>
    )
}

export default ProtectedRoute
