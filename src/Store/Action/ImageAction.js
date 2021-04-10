import axios from "axios";

export const getImage = () => (dispatch) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/albums/1/photos`)
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        dispatch({
          type: "GET_IMG",
          payload: response.data,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const getDetail = (id) => () => {
  return new Promise((resolve) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/1/photos?id=${id}`)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data[0]);
        }
      })
      .catch((err) => console.log(err));
  });
};

export const setFavorite = (params) => (dispatch) => {
  dispatch({
    type: "SET_FAVORITE_IMG",
    payload: params,
  });
};
export const setDelete = (params) => (dispatch) => {
  dispatch({
    type: "SET_DELETE_IMG",
    payload: params,
  });
};
