import { actions } from "../actions";

const initialState = {
  user: null,
  posts: [],
  loading: false,
  error: null,
};
const profileReducer = (state, action) => {
  // console.log('from reducer: state :',state);
  switch (action.type) {
    case actions.profile.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.profile.DATA_FETCHED: {
      console.log("from reducer:", action.type, "and data:", action.data);

      return {
        ...state,
        // loading: false,
        // user: action.data,
        posts:[...state.posts, ...action.data],
      };
    }
    case actions.profile.DATA_FETCH_ERROR: {
      // console.log("from reducer:", action.type, "and data:", action.data);

      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case actions.profile.USER_DATA_EDITED: {
      // console.log("from reducer:", action.type, "and data:", action);
     
      return {
        ...state,
        loading: false,
        user: action?.data,
      };
    }
    case actions.profile.IMAGE_UPDATED: {
      // console.log("from reducer:", action.type, "and data:", action.data);

      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          avatar: action.data.avatar,
        },
      };
    }
    default: {
      return state;
    }
  }
};
export { profileReducer ,initialState};
