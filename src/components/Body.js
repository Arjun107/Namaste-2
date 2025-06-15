import ResturantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local state variable - Super powerful variable

  const [listofResturant, setListofResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    setListofResturant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listofResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter resturant
              const filteredresturant = listofResturant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );

              setListofResturant(filteredresturant);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-button"
          onClick={() => {
            const filterlist = listofResturant.filter(
              (res) => res.info.avgRating > 4.5
            );
            console.log(listofResturant);
            setListofResturant(filterlist);
          }}
        >
          Top Rated resturant
        </button>
      </div>
      <div className="res-container">
        {listofResturant.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
