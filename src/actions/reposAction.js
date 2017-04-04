import {
  LOAD_REPOS_REQUEST,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_FAILURE,
  SELECT_REPO
} from './types';

// export const loadReposSuccess = (data) => {
//   return ({
//     type: LOAD_REPOS_SUCCESS,
//     data
//   });
// };

export const loadReposRequest = (endPoint) => {
  return ({
    type: LOAD_REPOS_REQUEST,
    payload: fetch(endPoint)
  });
};

// export const loadReposFailure = (error) => {
//   return ({
//     type: LOAD_REPOS_FAILURE,
//     error
//   });
// };

// export const fetchData = (endPoint) => {
//   return async (dispatch) => {
//     try {
//       dispatch(loadReposRequest());
//       const response      = await fetch(endPoint);
//       const responseJson  = await response.json();
//       dispatch(loadReposSuccess(responseJson.items));
//     } catch (error) {
//       dispatch(loadReposFailure(error));
//     }
//   };
// }

export const selectRepo = (id) => {
  return ({
    type: SELECT_REPO,
    id
  })
}
