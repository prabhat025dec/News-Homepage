import React, { useState } from 'react';


const TopNav = props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div >
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <a class="navbar-brand" href="#">
     <img src="../assets/images/logo.svg" alt="brand-image"/>
     
     </a>
    {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
  <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button>

    <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
      <ul class="navbar-nav ms-auto ">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">New</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Popular</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Categories</a>
      </li>
       
    </ul>
      </div>
    </nav>
    </div>
    
  );
}

export default TopNav;



{/* <a className="nav-link text-info" href="/contact">Support</a>
<a className="nav-link text-info" href="/login">Login</a>
<a href="/request-demo" className="btn btn-sm btn-info nav-link text-white" >Request demo</a> */}