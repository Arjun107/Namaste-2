import ResturantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  //Local state variable - Super powerful variable

  const [listofResturant, setListofResturant] = useState(resList);

  useEffect(() => {
    console.log("useeffect called");
  }, []);

  let listofResturantjs = [
    {
      info: {
        id: "377799",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/4c2e88c8-d95f-4b7e-b28a-07b2f3f1bf5d_377799.JPG",

        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.2,

        avgRatingString: "4.2",
      },
    },
    {
      info: {
        id: "377789",
        name: "Dominos",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/4c2e88c8-d95f-4b7e-b28a-07b2f3f1bf5d_377799.JPG",

        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.5,

        avgRatingString: "3.5",
      },
    },
    {
      info: {
        id: "377759",
        name: "Mc Doland",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/4c2e88c8-d95f-4b7e-b28a-07b2f3f1bf5d_377799.JPG",

        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.1,

        avgRatingString: "3.5",
      },
    },
  ];

  return ( +
    <div className="body">
      <div className="filter">
        <div className="filter">
          <button
            className="filter-button"
            onClick={() => {
              const filterlist = listofResturant.filter(
                (res) => res.info.avgRating > 4
              );
              console.log(listofResturant);
              setListofResturant(filterlist);
            }}
          >
            Top Rated resturantS
          </button>
        </div>
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
