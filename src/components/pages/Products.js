import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';



const cardItem=(
    <div class="card-deck">
      <div class="card">
           <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/10/Female_Yoga_1296x728-header-1296x729.jpg?w=1155&h=2268" class="card-img-top" alt="..."/>
           <div class="card-body">
      <h5 class="card-title"><u>Anusara Yoga</u></h5>
      <p class="card-text">Anusara yoga is a modern-day Hatha yoga system founded by John Friend. Anusara means “flowing with grace,” “going with the flow,” “following your heart.” ... Anusara emphasizes “Universal Principles of Alignment” as the focal point of its practice, which underlie all of the physical asanas.</p>
      <Link to="/Details" class="btn btn-primary">Book Course</Link>
           </div>
    
    </div>
  <div class="card">
    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/afro-american-couple-doing-yoga-royalty-free-image-598708752-1548713240.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><u>Ashtanga Yoga</u></h5>
      <p class="card-text">In Sanskrit "Ashta + anga" is ashtanga. "Ashta" means Eight and "Anga" is limbs so it means Eight Limb path, Ashtanga yoga is based on Yoga Philosophy of Patanjali. The asanas, Pranayamas or the dharana which we have studied earlier or the yam and niyam are based on the Yoga Sutras of Patanjali. Hence, we will acquaint ourselves with the fundamentals as stated by Patanjali first.</p>
      <Link to="/Details" class="btn btn-primary">Book Course</Link>
    </div>
    
  </div>
  <div class="card">
    <img src="https://images.myupchar.com/5247/original/yoga-in-hindi.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><u>Bikram Yoga</u></h5>
      <p class="card-text">Bikram yoga is a form of yoga popularized by Bikram Choudhury in the 1970s in California. The patented practice involves repeating the same 26 poses in set cycles over a 90-minute class. Bikram yoga instructors go through a nine-week training program in which they learn the set practice and dialogue. Currently, there are more than 1,650 Bikram studios around the world. </p>
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
      <h5 class="card-title"><u>Hatha Yoga</u></h5>
      <p class="card-text">What exactly Hatha yoga actually is hasn’t changed for thousands of years. However our thinking and perception of it certainly has. Language is a powerful thing, and in different cultures the same word can have a variety of definitions. Throughout the evolution of yoga practice, the same word – Hatha – has come to mean different things too. </p>
       <Link to="/Details" class="btn btn-primary">Book Course</Link>
           </div>
    
    </div>
  <div class="card">
    <img src="https://www.health.harvard.edu/media/content/images/cr/83bbb079-adfe-4068-bbf1-71ff99c718a0.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><u>Jivamukti Yoga</u></h5>
      <p class="card-text">Jivamukti yoga is a modern hybrid style of yoga that was created and branded by artist David Life and musician/dancer Sharon Gannon.The name comes from the Sanskrit jiva (individual living soul) and mukti (the freeing from the eternal cycle of death and rebirth). Therefore, the full name implies liberation while still living on Earth</p>
      <Link to="/Details" class="btn btn-primary">Book Course</Link>
    </div>
    
  </div>
  <div class="card">
    <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/the_health_benefits_of_yoga_ref_guide/650x350_the_health_benefits_of_yoga_ref_guide.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><u>Kundalini Yoga</u></h5>
      <p class="card-text">Kundalini yoga is a form of yoga that involves chanting, singing, breathing exercises, and repetitive poses. Its purpose is to activate your Kundalini energy, or shakti. This is a spiritual energy that's said to be located at the base of your spine.</p>
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
