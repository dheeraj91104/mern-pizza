import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";

function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
      <a className="navbar-brand" href="/">
        Pizza
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          {currentUser ? (
            <div className="">
              <a
                style={{ colour: "black" }}
                className="dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {currentUser.name}
              </a>
              <div className="">
                <a className="" href="#">
                  Orders
                </a>
                <a
                  className=""
                  href="#"
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                >
                  <li>Logout</li>
                </a>
              </div>
            </div>
          ) : (
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
          )}

          <li className="nav-item">
            <a className="nav-link" href="/cart">
              Cart
              {cartstate.cartItems.length}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

{
  /* <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
    
    <a className="navbar-brand" href="/">Domino's Pizza</a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        {currentUser ? (
          <div className="dropdown ">
          <a style={{colour:'black'}} className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {currentUser.name}
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  
            <a className="dropdown-item" href="#">Orders</a>
            <a className="dropdown-item" href="#"onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></a>
          </div>
        </div>
        
        ) : (
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
        )}

        <li className="nav-item">
          <a className="nav-link" href="/cart">
            Cart
            {cartstate.cartItems.length}
          </a>
        </li>
      </ul>
    </div>

</nav> */
}
