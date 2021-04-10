import React from "react";
import "../Style/Home.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDelete } from "../Store/Action/ImageAction";

const Favorite = () => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.ImageReducer.favImg);

  console.log(favorite.url);
  return (
    <div>
      <h1>favorite</h1>
      <div className="container">
        <div className="image-list">
          {favorite.length === 0
            ? null || <p> No Data</p>
            : favorite.map((item, index) => {
                return (
                  <div key={index} className="card-list">
                    <div className="btn-wrapper">
                      <button
                        className="btn-fav"
                        onClick={() =>
                          dispatch(
                            setDelete({
                              id: item.id,
                              thumbnailUrl: item.thumbnailUrl,
                              url: item.url,
                            })
                          )
                        }
                      >
                        -
                      </button>
                    </div>
                    <Link to={`/detail/${item.id}`}>
                      <img src={item.thumbnailUrl} className="image" alt="" />
                    </Link>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};
export default Favorite;
