import React from 'react'
import './Blog.css'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'
const Blog = () => {
  return (
    <div>
        <div class="S">
  <h1 class="p">Blog post</h1>

     <div class="style">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="container overflow-hidden pb-4">
      <div class="row gx-5">


         <div class="card col-lg-4 t">
  <img src={img1} class="card-img-top" alt="..."/>
  <div class="card-body">
   <h5>Sour, Sweet, Vegan - My Pachadi Love Story By Shinu Ramachandran</h5>
    <p class="card-text">The main vegetable used to make pachadi is called vellarikka in Malayalam. This cucumber variety also known as Madras cucumber is rich in nutritional benefits and is a staple in South Indian kitchens. In Kerala, it is used to make vellarikka pachadi and vellarikka moru curry. It is also known for its cooling properties and hence a suitable one for summer.</p>
    
  </div>
</div>

<div class="card col-lg-4 " >
  <img src={img2} class="R" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"></h5>
      
    <p class="card-text r ">For over 2 decades, I had already known of his accomplishments in the field of Memory and memory enhancing techniques. Few years ago, I also had the chance to learn from some of our existing WhiteCub patrons about his amazing work in the field of Diabetes reversal. What had touched me at that time was his not being aggressively commercial with his patients. He used to offer moderately priced 10 days long residential programs to help diabetics reverse their health challenges.</p>
    
  </div>
</div>
      
<div class="card col-lg-4 " >
  <img src={img3} class="T" alt="..."/>
  <div class="card-body">

    <p class="card-text t" >Dr. Achyuthan Eswar is a Lifestyle Physician based in Bengaluru. He has been helping people prevent, treat and reverse chronic lifestyle diseases. He brings together the best of scientific research as well as ancient traditional practices that can help one achieve optimal health benefits. </p>
    
  </div>
</div>
</div>
</div>
    </div>
    <div class="carousel-item">
     
    <div class="row pb-4">
         <div class="card col-lg-4 ">
  <img src={img4} class="Q" alt="..."/>
  <div class="card-body">
    
    <p class="q">Every human is born helpless; we are nurtured by the wonderful world around us that provides us with everything we need to grow. Nature not only provides food, air, and water but also acts as an outlet for human creativity and invention. As a race, all our actions have had a profound impact on nature. We have harvested this earth for our needs and destroyed and polluted it for our desires. Nature and man are bound in this cycle of coexistence, and one cannot do without the other</p>
    
  </div>
</div>

<div class="card col-lg-4 " >
  <img src={img5} class="U" alt="..."/>
  <div class="card-body">
   
    <p class="u">Veganism is a lifestyle and philosophy that seeks to exclude, as far as possible and practicable, all forms of exploitation of, and cruelty to, animals for food, clothing or any other purpose. It is an ethical approach to living that seeks to avoid causing harm to animals and the environment. Vegans strive to live without using animal products, such as meat, dairy, eggs, honey, fur, leather, wool, and silk.</p>
    
  </div>
</div>
      
<div class="card col-lg-4 " >
  <img src={img6} class="V" alt="..."/>
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


    </div>
  )
}

export default Blog