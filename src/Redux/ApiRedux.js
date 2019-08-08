// See Redux Sauce for more information on this format at https://github.com/infinitered/reduxsauce

import { createReducer, createActions } from "reduxsauce";
import { normalize } from "normalizr";
import { mentor } from "./Schema";

// --- Create the Redux Actions --- //

const { Types, Creators } = createActions({
  apiRequest: ["data"],
  apiSuccess: ["payload"],
  apiFailure: ["error"],
});

export const ApiTypes = Types;
export default Creators;

// --- Store --- //

export const INITIAL_STATE = {
  error: false,
  normalizedData: [],
  originalData: [],
  activePromotions: null,
  learnerUploads: [],
  lessons: [],
  mentors: [],
};

// --- Reducers --- //

export const apiRequest = (state = INITIAL_STATE, action) => {
  return { ...state };
};
export const apiSuccess = (state = INITIAL_STATE, { payload }) => {
  const { entities } = normalize(payload, mentor);

  console.log("Original Data", payload);
  console.log("Normalized Data", entities);

  return {
    ...state,
    error: false,
    activePromotions: entities.activePromotions,
    learnerUploads: entities.learner_uploads,
    lessons: entities.lessons,
    mentors: entities.mentors,
    users: entities.users,
    normalizedData: entities,
    originalData: payload,
  };
};
export const apiFailure = (state = INITIAL_STATE, action) => {
  return { ...state, error: true };
};

// --- Handlers --- //

export const HANDLERS = {
  [Types.API_REQUEST]: apiRequest,
  [Types.API_SUCCESS]: apiSuccess,
  [Types.API_FAILURE]: apiFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);

// --- Selectors --- //

export const ApiSelectors = {
  getNormalizedData: state => state.main.normalizedData,
  getOriginalData: state => state.main.originalData,
};
