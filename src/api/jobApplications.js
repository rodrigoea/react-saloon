import {
  fetchJobApplicationsError,
  fetchJobApplicationsPending,
  fetchJobApplicationsSuccess
} from "../store/ducks/jobApplications";

import fetch from "../mocks/fetch";

export const fetchJobApplicationsAPI = api_identifier => {
  return dispatch => {
    dispatch(fetchJobApplicationsPending());

    fetch(
      `https://my-api.com/users/pending_approval?location_id=${api_identifier}`
    )
      .then(res => res.json())
      .then(res => {
        const data = res.find(item => item.api_identifier === api_identifier);
        dispatch(fetchJobApplicationsSuccess(data));
        return data;
      })
      .catch(error => {
        dispatch(fetchJobApplicationsError(error));
      });
  };
};
