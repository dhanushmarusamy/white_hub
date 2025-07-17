import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer ,toast } from 'react-toastify';

const Upload1 = () => {

      const handleSubmit=(event)=>{

        event.preventDefault();
        
        const form=event.target;
        const title=form.title.value;
        const img=form.img.value;
        const food=form.food.value;
        const price=form.price.value;
        // const quantity=1;

        if(title==="" || img==="" || food==="" || price==="")
        {
            toast.warn('fill Required ');
        }else{
            const foods={title,img,food,price};
            // console.log(foods,"foods in object ");
            
            fetch('http://localhost:6500/store',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(foods),
            })
            // .then((res)=>res.json())
            .then((data)=>{
                toast.success('added successfully');
                form.reset();
                window.location.href="/n"
            }
            )

        }

        }

  return (
    <div>
                <ToastContainer/>
              <div class="card upload6">
         <div class="card-body upload5">
        <form onSubmit={handleSubmit} >
            <h2>UPLOAD</h2>
            <div class="upload0">
                <label value="title"><b>TITLE</b></label>
                <input type="text" name="title" className='ms-3'/>
            </div>
            <br></br>
            <div class="upload1">
                <label value="img"><b>IMAGE</b></label>
                <input type='img' name="img" className='ms-3'/>
                </div>
                <br></br>
                <div class="upload2">
                <label value="food"><b>FOOD</b></label>
                <input type='text' name="food" className='ms-3'/>
                </div>
                <br></br>
                
                <div class="upload4">
                <label value="price"><b>PRICE</b></label>
                <input type='numbers' name='price' className='ms-3'/>
            </div>
<br></br>
            <div class="upload7">
                <button type="submit" class="btn btn-primary">upload</button>
                
            </div>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Upload1