import {
  fetchSalonsPending,
  fetchSalonsSuccess,
  fetchSalonsError
} from "../store/ducks/salons";

import fetch from "../mocks/fetch";

export const fetchSalonsAPI = () => {
  return dispatch => {
    dispatch(fetchSalonsPending());
    fetch("https://my-api.com/salons")
      .then(res => res.json())
      .then(res => {
        dispatch(fetchSalonsSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(fetchSalonsError(error));
      });
  };
};
