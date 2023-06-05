const INITIAL_STATE = {
  currentLang: "en",
  avaliableLanguage: ["ar", "en", "fr"],
};

export default function languagesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        currentLang: action.payload,
      };
    default:
      return state;
  }
}
