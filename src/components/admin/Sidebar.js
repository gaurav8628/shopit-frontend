import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper" style={{width:"11rem",marginLeft:"-43px",marginRight:"25px"}}>
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <a href="/dashboard"><i className="fa fa-tachometer"></i> Dashboard</a>
                    </li>

                    <li>
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i
                            className="fa fa-product-hunt"></i> Products</a>
                        <ul className="collapse list-unstyled" id="productSubmenu">
                            <li>
                                <a href="/admin/products"><i className="fa fa-clipboard"></i> All</a>
                            </li>

                            <li>
                                <a href="/admin/product"><i className="fa fa-plus"></i> Create</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="/admin/orders"><i className="fa fa-shopping-basket"></i> Orders</a>
                    </li>

                    <li>
                        <a href="/admin/users"><i className="fa fa-users"></i> Users</a>
                    </li>

                    <li>
                        <a href="/admin/reviews"><i className="fa fa-star"></i> Reviews</a>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
