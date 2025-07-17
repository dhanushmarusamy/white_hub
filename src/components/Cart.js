import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { updateQuantity,deleteFromCart } from '../redux/cartslice';
const Cart = () => {

        const cartitems=useSelector((state)=>state.cart.cartitems);
            const dispatch=useDispatch();
   
    const deleteCart=(item)=>{
          dispatch(deleteFromCart(item))
      }
      const incrementCart=(id,quantity)=>{
         dispatch(updateQuantity({id,  quantity : quantity+1}))
      }

  const decrementCart=(id,quantity)=>{
    if(quantity>1){
        
      dispatch(updateQuantity(
        {id, quantity : quantity-1}
      )
      )
    }
  }

  return (
  <div class="row pt-4"> 

    {
      cartitems.map(
        (a)=>(
    <div class="col-3" key={a.id}>
      <div class="card">
  <img src={a.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title ps-5">{a.title}</h5>
    <h4 class="card-text ps-5">{a.price}</h4>

     <div className='' style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
                                <button onClick={()=>{decrementCart(a.id,a.quantity)}}>-</button>
                                {a.quantity}
                                 <button onClick={()=>{incrementCart(a.id,a.quantity)}} >+</button>
                            </div>
                      
 
 <button class="i2">Quick shop</button>
 <button class="btn btn-danger cartbutton" onClick={()=>deleteCart(a)} style={{backgroundColor:'red'}}> Delete </button>

  </div>
</div>
    </div>
    
        )
      )
    }



 
  </div>  )
}

export default Cart