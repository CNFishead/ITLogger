import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

// Get Logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/logs");
    const data = await res.json();
    dispath({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.res.data,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
