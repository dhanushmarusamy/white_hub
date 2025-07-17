import React from 'react'
import './Header.css'
import S from "../images/icon.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container-fluid">
       <ul class="navbar-nav">
      <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/">
             <img src={S} width="200px" height="100px"/>
        </Link>
</li>
</ul>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Shop">Shop</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/about">About Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/Blog">Blog</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link active" to="/Retail">Retail</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link active" to="/k">Upload</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="veganice" tabindex="-1" aria-disabled="true">Veganicecream</Link>
        </li>
          <li class="nav-item">
          <Link class="nav-link active" to="/n">Getdelete</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link active" to="/login">Login</Link>
        </li>
          <li class="nav-item">
          <Link class="nav-link active" to="/register">Register</Link>
        </li>
            <li class="nav-item">
          <Link class="nav-link active" to="/validation">Validation</Link>
        </li>
          <li class="nav-item">
          <Link class="nav-link active" to="/single">Singlecrud</Link>
        </li>
            <div>
                <li>
                    <div class="search-bar">
                        <div class="search-img-container">
                            <i class="fa fa-search search-img"></i>
                            
                        </div>
                        <div class="search-input-container">
                            <input class="input-field" 
                                type="text" 
                                placeholder="Username"/>
                        </div> 
                                            <svg  xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                    </svg>
                    <Link class="nav-link active" aria-current="page" to="/Cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                      </Link>
                    </div>

                </li>
            </div> 
        </ul>
</div>
</div>
</nav>
      
    </div>
  


  )
}

export default Header