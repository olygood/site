
import styles from "../styles/Home.module.scss";
import Header from "../components/Header/Header";
import NavLeft from "../components/NavLeft/NavLeft";
import Card2 from "../components/Card2/Card2";
import {useState,useEffect} from "react";
// import Link from "next/link";
// import Head from "next/head";
// import Document from 'next/document'
// import Image from "next/image";
// import olilettres from "../public/assets/img/olilettres.png"; // width= '713' height='1049'

//apBitcoint----------------------------------------------------------------
  /* const apiConnectBitcoin = GET http://api.bitdataset.com/v1/exchanges?apikey= {keyApiBitcoin}
const keyApiBitcoin = "0ca56df9-49bd-4b44-904f-0c1fd7e8821d"; */
// const ApiCallOfDutty = require('call-of-duty-api')();
// const ApiCallOfDutty = require('call-of-duty-api')({ platform: "battle" });
export default function Index(props) {

  // const keyApiBitcoin = "0ca56df9-49bd-4b44-904f-0c1fd7e8821d";
  // const apiConnectBitcoin = "http://api.coindesk.com/v1/bpi/currentprice.json"

const [btcRate,setBtcRate] = useState()
console.log('le composant se monte')

useEffect(() =>{
  console.log('le composant est monté')
  fetch("http://api.coindesk.com/v1/bpi/currentprice.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setBtcRate(data.bpi.EUR.rate);
  } )
}, [])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>

      <div className={styles.main}>
        <div className={styles.container_main}>
          <h1>Trade et Bitcoin</h1>
         
        
          <div className="bitcoin">
            <p>Le prix du bitcoin est en ce moment à : </p>
            <p>{btcRate}</p>
          </div>
        
           
        </div>
        <Card2 />
        <div>
          {props.adjectifs.map(el =>(
            <div key= {el.en}>{el.en}
              
             
            </div>
          ))}
        </div>
   
      </div>

      <div className={styles.navLL}>
        <NavLeft />
      </div>

      <div className={styles.footer}>
        <h2>footer</h2>
      </div>
    </div>
  );
}

export async function getStaticProps(){
  const learnAnglais = await import('../data/learnAnglais.json');
  const adjectifs = learnAnglais.adjectifAdverbe;
  
  return{
    props:{
      adjectifs
    }
    
  }
}

function oli(){
  a = 10;
  console.log(a);
}





//  <span>{props.array.map(el =>(
//   <div>
//       <div>{el.en}</div>
      
//     </div>
// ))} 
// </span>



// export async function getStaticProps() {
//   const data = await import(`../data/learnAnglais.json`);
//   const lesVerbes = data.adjectifAdverbe;
//   // const arrayDataLanguage = data.adjectifAdverbe;
  
//   return {
//     props: {
//       array: lesVerbes,
//     },
//   };
// }
