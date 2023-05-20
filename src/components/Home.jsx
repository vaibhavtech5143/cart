
// import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
// const img1 =
 
const Home = () => {
  const productList = [
    {
      "id": 1,
      "name": "Led Projector",
      "description": "Led projector shop 4k 3d all projector wifi mcast usb android models",
      "price": "₹ 3,599",
      "imgSrc":"https://www.bhphotovideo.com/images/images2500x2500/lg_24lf452b_24_720p_led_hdtv_1248350.jpg"},
    {
      "id": 2,
      "name": "DSLR Camera",
      "description": "Lightly Used Canon EOS 200D 24.2MP DSLR EF-S 18-55 mm & EF-S 55-250 mm lense",
      "price": "Rs. 29000.00" ,
      "imgSrc": 
         "https://th.bing.com/th/id/R.d25c51b1f824a8b45128eb5426a1231d?rik=ydRLLvUsaeID%2bw&riu=http%3a%2f%2fwww.bhphotovideo.com%2fimages%2fimages2500x2500%2fnikon_1555_d7200_dslr_camera_with_1127272.jpg&ehk=jZKF2GcGGyH75q9cML97fWTuahGaIv7kO6EUc3qRwQY%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      "id": 3,
      "name": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "imgSrc": 
         "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4",
    },
    {
      "id": 4,
      "name": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "imgSrc": 
         "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4",
    },
    {
      "id": 5,
      "name": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "imgSrc": 
         "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4",
    },
    {
      "id": 6,
      "name": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "imgSrc": 
         "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4",
    },
  ];

  // const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    console.log(options);
    toast.success("Added To Cart");
    // dispatch({ type: "addToCart", payload: options });
    // dispatch({ type: "calculatePrice" });
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          description={i.description}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc,description }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>{price}</h4>
    <p className="description">{description}</p>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;


