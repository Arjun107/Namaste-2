import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.57590&lng=77.33450&restaurantId=553371&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);

    setResInfo(json.data);
  };

  if(resInfo === null ) return <Shimmer/>;

  //const { itemcards } =
    //resInfo?.cards[4]?.card?.groupedCard?.cardsGroupMap?.REGULAR?.cards[1]?.card?.card;

    const{name,cuisines,costForTwoMessage}= resInfo?.cards[2]?.card?.card?.info;

  return(
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h3>{costForTwoMessage}</h3>
      <ul>
        <li>Biryani</li>
        <li>burger</li>
      </ul>
    </div>
  );
};

export default ResturantMenu;
