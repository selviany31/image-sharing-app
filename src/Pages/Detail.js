import React, { useEffect, useState } from "react";
import { getDetail } from "../Store/Action/ImageAction";
import { useDispatch } from "react-redux";
import "../Style/Detail.css";

const Detail = ({ match }) => {
  const dispatch = useDispatch();

  const [detail, setDetail] = useState([]);
  useEffect(() => {
    dispatch(getDetail(match.params.id)).then((response) =>
      setDetail(response)
    );
  }, [dispatch, match.params.id]);

  console.log(match.params.id);

  return !detail ? null : (
    <div className="detail-wrapper">
      <div className="detail-card">
        <img src={detail.url} className="img-detail" alt="" />
        <h2>{detail.title}</h2>
      </div>
    </div>
  );
};

export default Detail;
