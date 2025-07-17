import React from 'react'
import './Home.css'
import img from "../images/free.png"
import img1 from "../images/sugar.png"
import img2 from "../images/preservatives.png"
import img3 from "../images/dairy.png"
import img4 from "../images/planet.png"
import img5 from "../images/c1.png"
import img6 from "../images/c2.png"
import img7 from "../images/c3.png"
import img16 from "../images/pic1.png"
import img8 from "../images/pic2.png"
import img9 from "../images/pic3.png"
import img10 from "../images/pic4.png"
import img11 from "../images/pic5.png"
import img12 from "../images/pic6.png"
import img13 from "../images/pic7.png"
import img14 from "../images/pic8.png"
import img15 from "../images/pic9.png"
import img17 from "../images/pic7.png"
import img18 from "../images/pic14.png"
import a from "../images/img1.png"
import b from "../images/img2.png"
import c from "../images/img3.png"
import d from "../images/img4.png"
import e from "../images/img5.png"
import f from "../images/img6.png"
import g from "../images/img7.png"
import h from "../images/img8.png"
import i from "../images/img9.jpg"
import j from "../images/img10.png"
import k from "../images/img11.png"
import l from "../images/img12.png"
import m from "../images/img13.png"
import n from "../images/img14.png"
import o from "../images/cover2.png"
const Home = () => {
  return (
    <div>
         <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img5}class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img6} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img7} class="d-block w-100" alt="..."/>
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>


  <div>
    <div class="A">
    <h1>Guilt-Free Indulgence:</h1>
    <h5>Our frozen desserts & other alt-dairy products are second to none in giving a perfect balance of taste and health !</h5>
    </div>
    
    <div class="container">
  <div class="row pt-4 pb-4">
    <div class="col ">
      <img src={img} width="200px" height="200px"/>
    </div>
    <div class="col">
     <img src={img1} width="200px" height="200px"/>
    </div>
    <div class="col">
       <img src={img2}width="200px" height="200px"/>
    </div>
    <div class="col">
       <img src={img3} width="200px" height="200px"/>
    </div>
    <div class="col">
       <img src={img4} width="200px" height="200px"/>
    </div>
  </div>
</div>
  </div>



  <div>
<div class="container">
  <div class="row">
        <div class="B">
      <h1>Shop By Category</h1>
      <h5>While our IceCreams celebrate the child in you, our Curds and Butters ensure you don't have to sacrifice your favourite foods</h5>
    </div>
    <div></div>
    <div class="col pt-4">
      <div class="card a2">
  <img src={img8} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-text ps-4">planet based <br/>premium icecream</h6>
  </div>
</div>
    </div>
    <div class="col pt-4">
      <div class="card a2">
  <img src={img16} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h6 className="card-text ps-4">planet based <br/>exotic IceCreams</h6>
  </div>
</div>
    </div>
    <div class="col pt-4">
      <div class="card a2">
  <img src={img9} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-textn ps-4">planet based <br/>sugar free IceCreams</h6>
  </div>
</div>
    </div>
      <div class="col pt-4">
      <div class="card a2">
  <img src={img10} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-text ps-4">planet based curd</h6>
  </div>
</div>
    </div>
      <div class="col pt-4">
     <div class="card a2">
  <img src={img11} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-text ps-4">popsiclus</h6>
  </div>
    </div>
   
  </div>
</div>
</div>




  <div class="container">
  <div class="row">
        <div class="D">
      <h1>Combos</h1>
    </div>
    <div></div>
    <div class="col pt-4">
      <div class="card a2">
  <img src={img12} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-text ps-4">planet based <br/>premium icecream</h6>
     <button class="E">ADD TO CART</button>
  </div>
</div>
    </div>
    <div class="col pt-4">
      <div class="card a2">
  <img src={img13} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-text ps-4">planet based <br/>exotic IceCreams</h6>
    <button class="F">ADD TO CART</button>
  </div>
</div>
    </div>
    <div class="col pt-4">
      <div class="card a2">
  <img src={img14} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-textn ps-4">planet based <br/>sugar free IceCreams</h6>
     <button class="G">ADD TO CART</button>
  </div>
</div>
    </div>
      <div class="col pt-4">
      <div class="card a2">
  <img src={img15} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h6 class="card-text ps-4">planet based curd</h6>
     <button class="H">ADD TO CART</button>
  </div>
</div>
    </div>
 
   
  </div>
</div>
</div>
   </div>

     <div class="container">
  <div class="row">
    <div class="I">
    <h1>Flavours You Can't Resist</h1>
    <h5>Shop our all time bestseller, we assure you'll keep coming back for more!</h5>
    </div>
    <div class="col J">
      <img src={img17} width="400px" class="pic" height="430px"/>
    </div>
    <div class="col K">
      <h6>ChocoBar Candy</h6>
      <h3>Rs. 84.75</h3>
      <p class="pt-4">Note:- Mumbai, Pune and Bangalore - Same Day Delivery for orders placed<br/> before 4:30 PM | Delhi NCR - Delivery in 24 Hours *All rates are exclusive of 18% <br/>GST</p>
      <input  class="L" type="number"   min="1" max="1200" name="quantity" defaultValue="1" size="4" />
      <button className="ms-4 M">ADD TO CART</button>
      <button class="N ms-4"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
</svg></button>
<h3 class="pt-3">Other Platform Review</h3>
<div class="d-flex">
<img src={img18} width="650px"/>
</div>
<h6>Availability : In Stock</h6>
    </div>
  </div>
</div>



<div>
    <h1 class="O">Hear It From Our Customers</h1>
    <div class="style">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row">


         <div class="card col-lg-4 ">
  <div class="card-body">
    <h5 class="card-title d-flex "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></h5>
    <p class="card-text"><p/>I use peanut curd product frequently. This is a good product. So grateful.</p>
    
  </div>
</div>

<div class="card col-lg-4" >
  
  <div class="card-body">
    <h5 class="card-title">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    </h5>
    <p class="card-text ">White Cub really hit the top for me with their Soy Coconut curd. It has a light airy-ness to it which I love<br/> so much. It works so well for my curd-rice, a staple lunch for me during the summer. I also make a variety of raitas with it, potato, pumpkin, cucumber and more. All I can say is that it is really really good. It is a part of my regular order with their peanut curd and masala buttermylk. A must try.</p>
  </div>
</div>
      
<div class="card col-lg-4 " >
  <div class="card-body">
    <h5 class="card-title">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    </h5>
    <p class="card-text">Fruity Nutty Punch- Very delicious! The mixture of fruit slices and nuts blended with the plant milk imparts a unique taste and texture to the vegan dessert. Highly recommended!</p>
  </div>
</div>
</div>
    </div>

    <div class="carousel-item">
     
    <div class="row">
         <div class="card col-lg-4 ps-4">
  <div class="card-body">
    <h5 class="card-title">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    </h5>
    <p class="card-text">This brand has the perfect Vegan substitutes for dairy products! They taste just as good, if not more, than the non-vegan products that we consume! I recommend that everyone tries them!</p>
  </div>
</div>

<div class="card col-lg-4 " >
  <div class="card-body">
    <h5 class="card-title">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    </h5>
    <p class="card-text">I use peanut curd product frequently. This is a good product. So grateful.</p>
  </div>
</div>
      
<div class="card col-lg-4 " >
  <div class="card-body">
    <h5 class="card-title">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
    </h5>
    <p class="card-text"><p/>I had tried soy coconut curd it was very good in taste.</p>
  </div>
</div>
</div>

  
    </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">next</span>
  </button>
   
</div>
</div>

</div>
    </div>



    <div class="S">
  <h1 class="p">Blog post</h1>




     <div class="style">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="container overflow-hidden">
      <div class="row gx-5">


         <div class="card col-lg-4 t">
  <img src={a} class="card-img-top" alt="..."/>
  <div class="card-body">
   <h5>Sour, Sweet, Vegan - My Pachadi Love Story By Shinu Ramachandran</h5>
    <p class="card-text">The main vegetable used to make pachadi is called vellarikka in Malayalam. This cucumber variety also known as Madras cucumber is rich in nutritional benefits and is a staple in South Indian kitchens. In Kerala, it is used to make vellarikka pachadi and vellarikka moru curry. It is also known for its cooling properties and hence a suitable one for summer.</p>
  </div>
</div>

<div class="card col-lg-4 " >
  <img src={b} class="R" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"></h5>
      
    <p class="card-text r ">For over 2 decades, I had already known of his accomplishments in the field of Memory and memory enhancing techniques. Few years ago, I also had the chance to learn from some of our existing WhiteCub patrons about his amazing work in the field of Diabetes reversal. What had touched me at that time was his not being aggressively commercial with his patients. He used to offer moderately priced 10 days long residential programs to help diabetics reverse their health challenges.</p>
  </div>
</div>
      
<div class="card col-lg-4 " >
  <img src={c} class="T" alt="..."/>
  <div class="card-body">

    <p class="card-text t" >Dr. Achyuthan Eswar is a Lifestyle Physician based in Bengaluru. He has been helping people prevent, treat and reverse chronic lifestyle diseases. He brings together the best of scientific research as well as ancient traditional practices that can help one achieve optimal health benefits. </p>
  </div>
</div>
</div>
</div>
    </div>
    <div class="carousel-item">
     
    <div class="row">
         <div class="card col-lg-4 ">
  <img src={d} class="Q" alt="..."/>
  <div class="card-body">
    
    <p class="q">Every human is born helpless; we are nurtured by the wonderful world around us that provides us with everything we need to grow. Nature not only provides food, air, and water but also acts as an outlet for human creativity and invention. As a race, all our actions have had a profound impact on nature. We have harvested this earth for our needs and destroyed and polluted it for our desires. Nature and man are bound in this cycle of coexistence, and one cannot do without the other</p>
  </div>
</div>

<div class="card col-lg-4 " >
  <img src={e} class="U" alt="..."/>
  <div class="card-body">
   
    <p class="u">Veganism is a lifestyle and philosophy that seeks to exclude, as far as possible and practicable, all forms of exploitation of, and cruelty to, animals for food, clothing or any other purpose. It is an ethical approach to living that seeks to avoid causing harm to animals and the environment. Vegans strive to live without using animal products, such as meat, dairy, eggs, honey, fur, leather, wool, and silk.</p>
  </div>
</div>
      
<div class="card col-lg-4 " >
  <img src={f} class="V" alt="..."/>
  <div class="card-body">
   
    <p class="v">Yes, you're correct! Nowadays, many companies offer vegan snack delivery services, making it easier for those following a vegan lifestyle to have healthy and delicious snack options delivered right to their doorstep. These services often offer a wide variety of snacks, ranging from plant-based protein bars to biscuits, chips, fun sticks, lavash etc .</p>
  </div>
</div>
</div>

  
    </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">next</span>
  </button>
   
</div>
</div>
</div>
</div>
<div>
  <h1 class="W">Awards / Recognition</h1>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <div class="d-flex pt-4">
      <img src={g} class="d-block w-25" alt="..."/>
      <img src={h} class="d-block w-25" alt="..."/>
      <img src={i} class="d-block w-25" alt="..."/>
      <img src={j} class="d-block w-25" alt="..."/>
      </div>
    </div>
    <div class="carousel-item ">
      <div class="d-flex pt-4">
       <img src={k} class="d-block w-25" alt="..."/>
      <img src={l} class="d-block w-25" alt="..."/>
      <img src={m} class="d-block w-25" alt="..."/>
      <img src={n} class="d-block w-25" alt="..."/>
    </div>
  </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">next</span>
  </button>
</div>
</div>




</div>
  
  )
}

export default Home