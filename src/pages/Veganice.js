import React from 'react'
import './Veganice.css'
import p9 from '../images/p9.png'
import p10 from '../images/p10.png'
import p11 from '../images/p11.png'
import p12 from '../images/p12.png'
const Veganice = () => {
  const Veganicecream=[
    {
      id:1,
      img:p9,
      title:"Belgian Chocolate",
      
    },
        {
      id:2,
      img:p10,
      title:"Badaam-Khajur",
    },
        {
      id:3,
      img:p11,
      title:"Belgian Chocolate",
    
    },
        {
      id:4,
      img:p12,
      title:"Belgian Chocolate",
      
    }
  ]
  return (
    <div>
      <h1 class="A">Veganice cream</h1>
          <div class="container pb-4">
  <div class="row pt-4">
    {
      Veganicecream.map((d)=>(
  <div class="col"key={d.id}>
      <div class="card">
  <img src={d.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-5">Belgian Chocolate</h5>
    <h4 class="card-text ps-5">Rs. 144.07</h4>
    <h4 class="card-text ps-5">{d.price}</h4>
 <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
      )
    )
    }
    {/* <div class="col">
      <div class="card">
  <img src={p9} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-5">Belgian Chocolate</h5>
    <h4 class="card-text ps-5">Rs. 144.07</h4>
 <button class="i2">Quick shop</button>
  </div>
</div>
    </div> */}
    {/* <div class="col">
      <div class="card" >
  <img src={p10} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-5">Badaam-Khajur</h5>
    <h4 class="ps-5">Rs. 194.91</h4>
   <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
    <div class="col">
      <div class="card" >
  <img src={p11} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-5">Berrylicious</h5>
    <h4 class="card-text ps-5">Rs. 144.07</h4>
       <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
     <div class="col">
      <div class="card">
  <img src={p12} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-5">Bliss of Berries</h5>
    <h4 class="card-text ps-5"> Rs. 169.49</h4>
    <button class="i2">Quick shop</button>
  </div>
</div>
    </div> */}
  </div>
</div>

    </div>
  )
}

export default Veganice