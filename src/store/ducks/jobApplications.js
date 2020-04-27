export const FETCH_JOB_APPLICATIONS_PENDING = "FETCH_JOB_APPLICATIONS_PENDING";
export const FETCH_JOB_APPLICATIONS_ERROR = "FETCH_JOB_APPLICATIONS_ERROR";
export const FETCH_JOB_APPLICATIONS_SUCCESS = "FETCH_JOB_APPLICATIONS_SUCCESS";
export const REMOVE_APPLICANT = "REMOVE_APPLICANT";

export function fetchJobApplicationsPending() {
  return {
    type: FETCH_JOB_APPLICATIONS_PENDING
  };
}

export function fetchJobApplicationsSuccess(data) {
  return {
    type: FETCH_JOB_APPLICATIONS_SUCCESS,
    payload: data
  };
}

export function fetchJobApplicationsError(error) {
  return {
    type: FETCH_JOB_APPLICATIONS_ERROR,
    error: error
  };
}

export function removeApplicant(id) {
  return {
    type: REMOVE_APPLICANT,
    id
  };
}

const initialState = {
  pending: false,
  data: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOB_APPLICATIONS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_JOB_APPLICATIONS_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload
      };
    case FETCH_JOB_APPLICATIONS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    case REMOVE_APPLICANT:
      return {
        ...state,
        pending: false,
        data: {
          ...state.data,
          applicants: state.data.applicants.filter(
            applicant => applicant.id !== action.id
          )
        }
      };
    default:
      return state;
  }
}

export const getJobApplications = state => state.jobApplications.data;
export const getJobApplicationsPending = state => state.jobApplications.pending;
export const getJobApplicationsError = state => state.jobApplications.error;
