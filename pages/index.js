import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
const bunkers = [
  {
    imagePath: "./img/logo1.png",
    name: "VIVOS EUROPA ONE",
    price: "2.2 M",
    location: {
      city: "Nantes",
      country: "France"
    },
    tags: ["biochemical", "cyber"]
  },
  {
    imagePath: "./img/logo1.png",
    name: "LAS VEGAS UNDERGROUND",
    price: "18 M",
    location: {
      city: "Las Vegas",
      country: "United States"
    },
    tags: ["earthquake", "iceage"]
  },
]

function Header() {
  return (
    <div>

  

    </div>
  )
}

export default function Home() {

  return (
    <div className={styles.mainAbout}>
      <Header></Header>
      <div className={styles.mainAbout}>
        <h1>OVLD</h1>
        
      </div>
      <div className={styles.mainAbout}>
      <img src="/img/logo1.png" />
      </div>
      <h1>About Me</h1>
        <p>My name is Fábio Giordano and I created my brand because I believe that we would all live better if everyone recycled what they don't use so that the world would be better for the next generations.</p><p>To achieve my goal, I have partnered with the Portuguese marine litter association, the association removes rubbish from the sea and delivers it so that it can be used by me to create unique and sustainable works of art.</p> <p> More recently I have partnered with World Wide Fund for Nature which works in the field of wilderness preservation and reducing human impact on the environment.</p>
      I hope you enjoy the artwork.  
      <div className={styles.body}>
        <BunkerCard data={bunkers[0]}></BunkerCard>
        <BunkerCard data={bunkers[1]}></BunkerCard>
      </div>    
      <div className={styles.body}>
        

      </div>     
    </div >


  )
}


function BunkerCard({ data }) {
  let path = ""
  let bunker = ""
  if(data.imagePath == "/Bunker1/1a.jpg"){
    path = data.imagePath
    bunker = "/Bunkers/Bunker"
  }
  else if(data.imagePath == "/Bunker2/3a.jpg"){
    path = data.imagePath
    bunker = "/Bunkers/Bunker1"
  }
  if(data.imagePath == "/Bunker3/4A.jpg"){
    path = data.imagePath
    bunker = "/Bunkers/Bunker2"
  }
  return (
    <div>
      <div className={styles.upper}>
        <div className={styles.BunkerImage}>
          <Link href={bunker}><img src={data.imagePath} /></Link>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.Dados}>
          <div className={styles.Nomes}>{data.name}</div>
          <div className={styles.Preços}>{data.location.city}, {data.location.country}</div>
          <div className={styles.Local}>{data.price} €</div>
        </div>        
      </div>
    </div>

  )
}

/*
<div className={styles.searchBar}>
        <div className={styles.search}>
          <SearchIcon />
          <input type="text" placeholder="Search.." />
        </div>
      </div>
*/