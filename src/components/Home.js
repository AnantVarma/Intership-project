import React from 'react';
import './Home.css';
import heroimage2 from '../Images/hero image 2.png';
import heroimage1 from '../Images/Hero image 1.png';
import image1 from '../Images/image 1.png';
import image2 from '../Images/image 2.png';
import image3 from '../Images/image 3.png';
import image4 from '../Images/image 4.png';
import image5 from '../Images/image 5.png';
import image6 from '../Images/image 6.png';
import image7 from '../Images/image 7.png';
import image8 from '../Images/image 8.png';
import image9 from '../Images/image 9.png';
import image10 from '../Images/image 10.png';
import image11 from '../Images/image 11.png';
import image12 from '../Images/image 12.png';
import image13 from '../Images/image 13.png';
import image14 from '../Images/image 14.png';

import image15 from '../Images/image 15.png';
import image16 from '../Images/image 16.png';
import image17 from '../Images/image 17.png';
import image18 from '../Images/image 18.png';
import image19 from '../Images/image 19.png';


const Home = () => {
  return (
    <div style={{marginTop:'50px'}}>
      <div className='heading'>
        <h2 style={{float:'left',paddingRight:'2%',fontSize:'40px',color:'black'}}>'As intresting<br></br>as a plant' </h2>
        <img src={heroimage2}  style={{ width: 'auto', height: '250px' }}></img>
        <img src={heroimage1}  style={{ width: 'auto', height: '250px' }}></img>
      </div>  
      <div>
        <h3 style={{textAlign:'left',padding:'2%',marginLeft:'6%',fontSize:'25px'}}>Featured Product</h3>
        {/* <h3>Tree 1</h3> */}
        <table>
           <tr><td><img src={image1}></img><b>Tree 1</b></td><td><img src={image2}></img><b>Tree 1</b></td><td><img src={image3}></img><b>Tree 1</b></td><td><img src={image4}></img><b>Tree 1</b></td></tr>
           <tr><td><img src={image5}></img><b>Tree 1</b></td><td><img src={image6}></img><b>Plant 1</b></td><td><img src={image7}></img><b>Plant 1</b></td><td><img src={image8}></img><b>Plant 1</b></td></tr>
           <tr><td><img src={image9}></img><b>Tray</b></td><td><img src={image10}></img><b>Soil</b></td><td><img src={image11}></img><b>Soil 2</b></td><td><img src={image12}></img><b>Spade</b></td></tr>
           <tr><td><img src={image13}></img><b>Duck 1</b></td><td><img src={image14}></img><b>Duck 2</b></td><td><img src={image15}></img><b>Duck 3</b></td><td><img src={image16}></img><b>Duck 4</b></td></tr>
           <tr><td><img src={image16}></img><b>Pot 1</b></td><td><img src={image17}></img><b>Pot 2</b></td><td><img src={image18}></img><b>Pot 3</b></td><td><img src={image19}></img><b>Pot 4</b></td></tr>
           
           
        </table>
      
        <button style={{marginRight:'60px'}}>Previous</button>
        <button >Next</button>
      </div>
    </div>
  );
};

export default Home;
