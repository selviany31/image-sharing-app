import React, { useEffect } from "react";
import "../Style/Home.css";
import { getImage, setFavorite } from "../Store/Action/ImageAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  //   const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.ImageReducer.imgData);

  useEffect(() => {
    dispatch(getImage());
  }, [dispatch]);

  console.log(data);
  return (
    <div>
      <div className="container">
        <div className="image-list">
          {data.length === 0
            ? null
            : data.map((item, index) => {
                return (
                  <div key={index} className="card-list">
                    <div className="btn-wrapper">
                      <button
                        className="btn-fav"
                        onClick={() =>
                          dispatch(
                            setFavorite({
                              id: item.id,
                              thumbnailUrl: item.thumbnailUrl,
                              url: item.url,
                            })
                          )
                        }
                      >
                        +
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
export default Home;
