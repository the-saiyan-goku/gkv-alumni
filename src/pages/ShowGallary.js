import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Car2 from '../images/Gaurav Kaushik.jpg';
import {db} from '../firebase/firebase';
import { collection, doc,getDocs } from "firebase/firestore";
import "./Pages.css"
import FinalHeader from '../components/Header/FinalHeader';
import Footer from '../components/Footer/Footer'


function ShowGallary() {

  const[imagearr, setimagearr] = useState([])
    
    const getImageUrl = async()=>{
        try{
            const docref = await collection(db,"gallary");
            // console.log("dataurl" ,docref)
            const data = await getDocs(docref);
            // data.docs.map((doc) => (console.log({ ...doc.data() })))
            setimagearr(data.docs.map((doc) => ({ ...doc.data() })))
        if(data){
           console.log(imagearr)
        }
 
        }catch(err){
            alert(err)
        }
       

    }

    useEffect(() => {
      getImageUrl();
    }, []);

   

    return (

        <div className='show__gallary'>
        <div className='event__name'> Gallery</div>
        {imagearr.map((image)=>{
            return<><Card style={{ width: '18rem' }}> <Card.Img variant="top" src={image.imageurl}  key={Math.random()}/>  <Card.Body >{image.title}</Card.Body>  </Card> <br></br></>
        })}
           
         
        </div>
        
    
    )
}

export default ShowGallary