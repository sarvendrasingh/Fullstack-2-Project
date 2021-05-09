import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Instructors</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/07/01/Pictures/_d54e1ff0-7d19-11e8-98f1-ed5cda4a01f0.jpg'
              text='I am a business owner at Pottery Us and HawkerIn helps me to sell my products at a large scale of customers. Thank you HawkerIn.'
              path=''
            />
            <CardItem
              src='https://assets.seniority.in/media/ktpl_blog/Yoga_Asanas_That_Anyone_Can_Do-main_image.jpg'
              text='We at Clothes For You, sell clothes of different cultures of India. We are thankful to HawkerIn for providing us this platform. I am truely satisfied.'
              path=''
            />
          </ul>
          <h1>Reviews</h1>
          <br></br>
          <ul className='cards__items'>
            <CardItem
              src='https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=6&m=1007763808&s=612x612&w=0&h=Js1VDBulbaNw_CF7fghP_nhUPCC-DQTqb7Wym1CdTOI='
              text='I am using HawkerIn from past 6 months and I have seen a huge surge in my sales. I am tuely satisfied.'
              label='Review 1'
              path=''
             />
            <CardItem
              src='https://thumbs.dreamstime.com/b/fat-happy-man-pleased-himself-proper-nutrition-weight-loss-131695038.jpg'
              text='Thank you HawkerIn for provideing us this platform to sale our stuff directly to customers. I am a satisfied user.'
              label='Review 2'
              path=''
            />
            <CardItem
              src='https://thumbs.dreamstime.com/b/grateful-happy-african-man-holding-hands-chest-feeling-appreciation-pleased-to-heart-love-gratitude-honesty-thankful-sincere-138433528.jpg'
              text='I am supporting my family business by registering it in HawkerIn. I can now dirctly rech to customers and sell my products. I am highly satisfied.'
              label='Review 3'
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
