import { TOGGLE_CHECKBOX } from "./actions";

const initialState = {
  name: "мужчина",
  checkbox: true,
  }
;

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX:
      return {
        ...state,
        checkbox: !state.checkbox,
      };
    default:
      return state;
  }
};
