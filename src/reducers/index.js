import {
  FETCH_START,
  FETCH_SUCCESS,
  ADD_SMURF,
  SET_ERROR,
  FETCH_FAIL,
} from "./../actions/";

export const initialState = {
  smurfs: [],
  isLoading: false,
  errorMessage: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
      };
    case FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload, //successful post request returns full array of old smurfs with new smurf added (including server generated id)
        errorMessage: false
      };
    case SET_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs - DONE
//  - a boolean indicating if the app is loading - DONE
//  - a string indicating a possible error message - DONE

//2. Add in the arguments needed to complete a standard reducer function. -DONE
//3. Add in a reducer case to accomidate the start of a smurf fetch. - DONE
//4. Add in a reducer case to accomidate the successful smurf api fetch. - DONE
//5. Add in a reducer cases to accomidate the failed smurf api fetch. - DONE
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list. - DONE
//7. Add in a reducer case that adds in a value to the error message. - DONE
