import React from 'react'
import './Shop1.css'
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import p4 from '../images/p4.png'
import p5 from '../images/p5.png'
import p6 from '../images/p6.png'
import p7 from '../images/p7.png'
import p8 from '../images/p8.png'
import p9 from '../images/p9.png'
import p10 from '../images/p10.png'
import p11 from '../images/p11.png'
import p12 from '../images/p12.png'
import p13 from '../images/p13.png'
import p14 from '../images/p14.png'
import p15 from '../images/p15.png'
import p16 from '../images/p16.png'
import p17 from '../images/p17.png'
import p18 from '../images/p18.png'
import p19 from '../images/p19.png'
import p20 from '../images/p7.png'
import { useSelector,useDispatch } from 'react-redux'
import { addTocart,deleteFromCart } from '../redux/cartslice'
const Shop1 = () => {
  
    const cartitems=useSelector((state)=>state.cart.cartitems);
  // const products = useSelector((state) => state.product.items);

  const dispatch=useDispatch();
  
  const addCart=(item)=>{
    dispatch(addTocart(item))
  }  
  const deleteCart=(item)=>{
    dispatch(deleteFromCart(item))
}

  const shopproduct=[
    {
      id:1,
      img:p1,
      
      title:"Belgian Chocolate",
      price:"Rs. 144.07",
      quantity:1,
    },
    {
      id:2,
      img:p2,
      title:"Belgian Chocolate",
       price:"Rs. 107",
        quantity:1,
    },
{
  id:3,
  img:p3,
  title:"Berrylicious",
  price:"Rs.144",
   quantity:1,
}, 
{
  id:4,
  img:p4,
 title:"Bliss of Berries",
 price:"169.49",
  quantity:1,
},
{
  id:5,
  img:p5,
  title:"Belgian Chocolate",
  price:"147.00",
   quantity:1,
},
{
  id:5,
  img:p5,
 title:"Bliss of Berries",
 price:"169.49",
  quantity:1,
},
{
  id:6,
  img:p6,
 title:"Badaam-Khajur",
 price:"169.49",
  quantity:1,
},
{
  id:7,
  img:p7,
 title:"Berrylicious",
 price:"169.49",
  quantity:1,
},
{
  id:8,
  img:p8,
 title:"Bliss of Berries",
 price:"169.49",
  quantity:1,
},
{
  id:9,
  img:p9,
 title:"Belgian Chocolate",
 price:"169.49",
  quantity:1,
},
{
  id:10,
  img:p10,
 title:"Badaam-Khajur",
 price:"169.49",
  quantity:1,
},
{
  id:11,
  img:p11,
 title:"Bliss of Berries",
 price:"169.49",
  quantity:1,
},
{
  id:12,
  img:p12,
 title:"Bliss of Berries",
 price:"169.49",
  quantity:1,
},
{
  id:13,
  img:p13,
 title:"Bliss of Berries",
 price:"169.49",
  quantity:1,
},
{
  id:14,
  img:p14,
  title:"Badaam-Khajur",
  price:"160.00",
   quantity:1,
},
{
  id:15,
  img:p15,
  title:"Berrylicious",
  price:"195.00",
   quantity:1,
}
  ]
  
  return (
    <div>
        
    <div class="container">
  <div class="row pt-4"> 

    {
      shopproduct.map(
        (a)=>(
    <div class="col-3" key={a.id}>
      <div class="card">
  <img src={a.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-5">{a.title}</h5>
    <h4 class="card-text ps-5">{a.price}</h4>
        {
                              cartitems.find(reduxdata=>reduxdata.id===a.id)?
                              (
                                    <button class="btn btn-danger cartbutton" onClick={()=>deleteCart(a)} > Remove From Cart </button>
                                    )
                                    :
                                    (<button class="btn btn-danger cartbutton"  onClick={()=>addCart(a)} > Add To Cart </button>
                                  )
                              }
 <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
    
        )
      )
    }



    {/* <div class="col-3">
      <div class="card">
  <img src={p2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-2">Badaam-Khajur</h5>
    <h4 class="ps-2">Rs. 194.91</h4>
   <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
    <div class="col-3">
      <div class="card">
  <img src={p3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-2">Berrylicious</h5>
    <h4 class="card-text ps-2">Rs. 144.07</h4>
       <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
     <div class="col-3">
      <div class="card">
  <img src={p4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-2">Bliss of Berries</h5>
    <h4 class="card-text ps-2"> Rs. 169.49</h4>
    <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
        <div class="col-3">
      <div class="card">
  <img src={p5} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-2">Belgian Chocolate</h5>
    <h4 class="card-text ps-2">Rs. 144.07</h4>
 <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
    <div class="col-3">
      <div class="card">
  <img src={p6} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-2">Badaam-Khajur</h5>
    <h4 class="ps-2">Rs. 194.91</h4>
   <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
    <div class="col-3">
      <div class="card">
  <img src={p7} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-2">Berrylicious</h5>
    <h4 class="card-text ps-2">Rs. 144.07</h4>
       <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
     <div class="col-3">
      <div class="card">
  <img src={p8} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-2">Bliss of Berries</h5>
    <h4 class="card-text ps-2"> Rs. 169.49</h4>
    <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
        <div class="col">
      <div class="card">
  <img src={p9} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-2">Belgian Chocolate</h5>
    <h4 class="card-text ps-2">Rs. 144.07</h4>
 <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
    <div class="col">
      <div class="card">
  <img src={p10} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-2">Badaam-Khajur</h5>
    <h4 class="ps-2">Rs. 194.91</h4>
   <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
    <div class="col">
      <div class="card">
  <img src={p11} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-2">Berrylicious</h5>
    <h4 class="card-text ps-2">Rs. 144.07</h4>
       <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
     <div class="col">
      <div class="card">
  <img src={p12} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-2">Bliss of Berries</h5>
    <h4 class="card-text ps-2"> Rs. 169.49</h4>
    <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
    <div class="col">
      <div class="card">
  <img src={p13} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-2">Belgian Chocolate</h5>
    <h4 class="card-text ps-2">Rs. 144.07</h4>
 <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
    <div class="col">
      <div class="card">
  <img src={p14} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-2">Badaam-Khajur</h5>
    <h4 class="ps-2">Rs. 194.91</h4>
   <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
    <div class="col">
      <div class="card">
  <img src={p15} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-2">Berrylicious</h5>
    <h4 class="card-text ps-2">Rs. 144.07</h4>
       <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
     <div class="col">
      <div class="card">
  <img src={p16} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-2">Bliss of Berries</h5>
    <h4 class="card-text ps-2"> Rs. 169.49</h4>
    <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
       <div class="col">
      <div class="card">
  <img src={p17} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-2">Belgian Chocolate</h5>
    <h4 class="card-text ps-2">Rs. 144.07</h4>
 <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
    <div class="col">
      <div class="card">
  <img src={p18} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-2">Badaam-Khajur</h5>
    <h4 class="ps-2">Rs. 194.91</h4>
   <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
    <div class="col">
      <div class="card">
  <img src={p19} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-2">Berrylicious</h5>
    <h4 class="card-text ps-2">Rs. 144.07</h4>
       <button class="i2">Quick shop</button>
  </div>
</div>
    </div>
     <div class="col">
      <div class="card">
  <img src={p20} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-2">Bliss of Berries</h5>
    <h4 class="card-text ps-2"> Rs. 169.49</h4>
    <button class="i2">Quick shop</button>
  </div>
</div>
    </div> */}
  </div>
</div>


    </div>
  )
}

export default Shop1