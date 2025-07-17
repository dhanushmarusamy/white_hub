import React from 'react'
import './Retail.css'
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.png'
import pic4 from '../images/pic4.png'
import pic5 from '../images/pic5.png'
import pic6 from '../images/pic6.png'
import pic7 from '../images/pic7.png'
import pic8 from '../images/pic8.png'
import pic9 from '../images/pic9.png'
import pic10 from '../images/pic1.png'
import pic11 from '../images/pic3.png'
import pic12 from '../images/pic7.png'
const Retail = () => {
  const retailproduct=[
    {
      id:1,
      img:pic1,

    },
    {
       id:2,
      img:pic2,
    },
    {
       id:3,
      img:pic3,
    },
    {
       id:4,
      img:pic4,
    }
  ]
  const icecream=[
     {
      id:5,
      img:pic5,
    },
    {
      id:6,
      img:pic6,
    },
    {
      id:7,
      img:pic7,
    },
    {
      id:8,
      img:pic8,
    }]
    const hub=[
{
  id:9,
  img:pic9,
},
{
  id:10,
  img:pic10,

},
{
  id:11,
  img:pic11,
  
},
{
  id:12,
  img:pic12,
  
}
    ]
  
  return (
    <div>
        <h1 class="A">Retail Products</h1>


<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="container pb-4">
  <div class="row">

    {
      retailproduct.map(
        (a)=>(
    <div class="col " key={a.id}>
      <img src={a.img}  alt=""/>
    </div>
        )
      )
    }

{/* 
    <div class="col">
      <img src={pic2} alt=""/>
    </div>
    <div class="col">
      <img src={pic3} alt=""/>
    </div>
    <div class="col">
      <img src={pic4} alt=""/>
    </div> */}

  </div>
</div>
    </div>
    <div class="carousel-item">


          <div class="container pb-4">
  <div class="row">

    {icecream.map(
      (b)=>(
         <div class="col " key={b.id}>
      <img src={b.img}  alt=""/>
    </div>
      )
    )}

  

    {/* <div class="col">
      <img src={pic6} alt=""/>
    </div>
    <div class="col">
      <img src={pic7} alt=""/>
    </div>
    <div class="col">
      <img src={pic8} alt=""/>
    </div> */}
  </div>
</div>
    </div>
    <div class="carousel-item">

                <div class="container pb-4">
  <div class="row">
    {
      hub.map((c)=>
         <div class="col"key={c.id}>
      <img src={c.img}  alt=""/>
    </div>
      )
    }
    
    {/* <div class="col">
      <img src={pic10} alt=""/>
    </div>
    <div class="col">
      <img src={pic11} alt=""/>
    </div>
    <div class="col">
      <img src={pic12} alt=""/>
    </div> */}
  </div>
</div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Retail