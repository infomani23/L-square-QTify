import React from 'react'
import styles from "./GridOfCards.css";
import Card from "../Card/Card.jsx";

function GridOfCards({album, cardType}) {
  return (
    <div className={styles.newAlbumContainer}>

        {album.map((albumItem) => (
            <Card 
                key={albumItem.id}
                imgLink={albumItem.image} 
                number={albumItem.follows} 
                genreName={albumItem.title}
                numberSongs={albumItem.songs.length}
                cardType={true}
            />
        ))}

    </div>
  )
}

export default GridOfCards;
