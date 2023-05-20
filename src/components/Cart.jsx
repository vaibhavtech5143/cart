import {AiFillDelete} from 'react-icons/ai'
const Cart = () => {
  return (
    <div className="cart">


      <main>
        
          <CartItem
      
      
      imgSrc={"https://th.bing.com/th/id/R.d25c51b1f824a8b45128eb5426a1231d?rik=ydRLLvUsaeID%2bw&riu=http%3a%2f%2fwww.bhphotovideo.com%2fimages%2fimages2500x2500%2fnikon_1555_d7200_dslr_camera_with_1127272.jpg&ehk=jZKF2GcGGyH75q9cML97fWTuahGaIv7kO6EUc3qRwQY%3d&risl=&pid=ImgRaw&r=0"}
      name={"Nikon"}
      price={"Rs 2000"}
      qty={1}
      id={"sadfa"}
      
      />
      </main>
      <aside>s
       <h2> Subtotal: Rs {2000}</h2>
       <h2> Commision: Rs {2000}</h2>
       <h2> Tax: Rs {2000}</h2>
       <h2> Total: Rs {2000}</h2>
      </aside>
    
    </div>
  )
};

const CartItem = ({imgSrc,name,price,qty,decrement,increment,deletehandler,id}) =>(

  <div className="cartItem">
    <img src={imgSrc} alt="Item"/>
    <article>
      <h3>{name}</h3>
      <p>{price}</p>

    </article>
    <div>
    <button onClick={()=>{decrement(id)}} >+</button>
    <p>{qty}</p>
    <button onClick={()=>{increment(id)}} >-</button>
    </div>

<AiFillDelete onClick={()=>{deleteHandler}}/>



  </div>


)



export default Cart