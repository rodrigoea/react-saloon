export const FETCH_SALONS_PENDING = "FETCH_SALONS_PENDING";
export const FETCH_SALONS_ERROR = "FETCH_SALONS_ERROR";
export const FETCH_SALONS_SUCCESS = "FETCH_SALONS_SUCCESS";

export function fetchSalonsPending() {
  return {
    type: FETCH_SALONS_PENDING
  };
}

export function fetchSalonsSuccess(salons) {
  return {
    type: FETCH_SALONS_SUCCESS,
    payload: salons
  };
}

export function fetchSalonsError(error) {
  return {
    type: FETCH_SALONS_ERROR,
    error: error
  };
}

const initialState = {
  pending: false,
  list: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SALONS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_SALONS_SUCCESS:
      return {
        ...state,
        pending: false,
        list: action.payload
      };
    case FETCH_SALONS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}

export const getCurrentSalonData = state => {
  const currentSalonID = state.jobApplications.data.api_identifier;
  const currentSalon = state.salons.list.find(
    salon => salon.api_identifier === currentSalonID
  );

  return currentSalon;
};

export const getSalons = state => state.salons.list;
export const getSalonsPending = state => state.salons.pending;
export const getSalonsError = state => state.salons.error;
