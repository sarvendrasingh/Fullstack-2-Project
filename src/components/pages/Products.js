import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';



const cardItem=(
    <div class="card-deck">
      <div class="card">
           <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/10/Female_Yoga_1296x728-header-1296x729.jpg?w=1155&h=2268" class="card-img-top" alt="..."/>
           <div class="card-body">
      <h5 class="card-title"><u>NADI HANDICRAFT</u></h5>
      <p class="card-text">We in Nadi handicraft provide our customers 100% authentic and handmade products. Client satisfaction and best services are our motto</p>
      <Link to="/Details" class="btn btn-primary">Book Course</Link>
           </div>
    
    </div>
  <div class="card">
    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/afro-american-couple-doing-yoga-royalty-free-image-598708752-1548713240.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><u>MAHALAXMI SPORTS</u></h5>
      <p class="card-text">We are running this business since 1980s and providing best sports items to our customers.</p>
      <Link to="/Details" class="btn btn-primary">Book Course</Link>
    </div>
    
  </div>
  <div class="card">
    <img src="https://images.myupchar.com/5247/original/yoga-in-hindi.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><u>FILEZ SHOES</u></h5>
      <p class="card-text">Do you want trendy yet bugdet friendly shoesware? We at Feliz shoes, will provide you just with this.</p>
      <Link to="/Details" class="btn btn-primary">Book Course</Link>
    </div>
    
  </div>
</div>
  );




const cardItem1=(
    <div class="card-deck">
      <div class="card">
           <img src="https://blog.kolau.com/wp-content/uploads/2019/07/ideas-de-marketing-para-yoga-1068x711-1-1.jpg" class="card-img-top" alt="..."/>
           <div class="card-body">
      <h5 class="card-title"><u>POTTERY US</u></h5>
      <p class="card-text">It is one of the oldest and most widespread of the decorative arts, consisting of objects made of clay and hardened with heat.
       The objects made are commonly useful ones, such as vessels for holding liquids or plates or bowls from which food can be served.</p>
       <Link to="/Details" class="btn btn-primary">Book Course</Link>
           </div>
    
    </div>
  <div class="card">
    <img src="https://www.health.harvard.edu/media/content/images/cr/83bbb079-adfe-4068-bbf1-71ff99c718a0.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><u>SARIKA SARI</u></h5>
      <p class="card-text">Sarika Fashion deals in full variety of Indian Sarees, Lehenga, Odhani, Western dresses, Wedding dresses, etc...</p>
      <Link to="/Details" class="btn btn-primary">Book Course</Link>
    </div>
    
  </div>
  <div class="card">
    <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/the_health_benefits_of_yoga_ref_guide/650x350_the_health_benefits_of_yoga_ref_guide.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><u>STYLE WAREHOUSE</u></h5>
      <p class="card-text">This is a one stop place, where you will find every clothing item for daily wear, party, functions or any other rendezvous.</p>
      <Link to="/Details" class="btn btn-primary">Book Course</Link>
    </div>
    
  </div>
</div>
  );


export default function Products() {
  return(
    <>
     <h1 className='products'></h1>;
     <div className="container">
       <div className="row">
           {cardItem}
           <br></br>
           {cardItem1}
       </div>
       
     </div>
     
     </>
  );
  
}
