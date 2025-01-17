import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
const [listings, setListings]= useState([])
useEffect(() => {
  fetch('http://localhost:6001/listings')
  .then(res => res.json())
  .then(listings => setListings(listings));
    
    
  }, []);

  const listingCards = listings.map(listingObj => {
    return <ListingCard key={listingObj.id} listing={listingObj}/>

  });



  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
