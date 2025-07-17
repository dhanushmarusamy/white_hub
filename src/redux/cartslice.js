import { createSlice } from "@reduxjs/toolkit";
const storeditem=localStorage.getItem('cart');
const initialState={
    cartitems:storeditem ? JSON.parse(storeditem):[],
}
const cartSlice=createSlice(
    {
        name:'cart',
        initialState,
        reducers:{
                addTocart:(state,action)=>{
                const newitem=action.payload
                const exititem=state.cartitems.find(item=>item.id === newitem.id);
                
                if(exititem){
                    exititem.quantity+=newitem.quantity;
                }else{
                    state.cartitems.push({
                        id:newitem.id,
                                            name: newitem.name,
                                            img:newitem.img,
                                            des:newitem.des,
                                            price:newitem.price,
                                            foodtype:newitem.foodtype,
                                            quantity:newitem.quantity
                    }
                )
                }
                localStorage.setItem('cart',JSON.stringify(state.cartitems));
                        },
             deleteFromCart:(state,action) =>{
                state.cartitems=state.cartitems.filter(Items=>Items.id !== action.payload.id);
                localStorage.setItem("cart",JSON.stringify(state.cartitems));
            },

            updateQuantity:(state,action)=>{

                const{id,quantity}=action.payload;
                const itemToUpdate=state.cartitems.find(Item=>Item.id===id);

                if(itemToUpdate)
                {
                    itemToUpdate.quantity=quantity;
                    localStorage.setItem("cart",JSON.stringify(state.cartitems));
                }
            }
        }
    }
)
export default cartSlice.reducer;
export const{addTocart,deleteFromCart,updateQuantity}=cartSlice.actions;
