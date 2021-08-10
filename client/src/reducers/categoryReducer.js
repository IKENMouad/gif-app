import { CategoryEnumAction, ErrorEnumAction } from "../actions/action.type";

const initState = {
  total: 0,
  categories: [
    {
      name: "cate 1",
      displayName: "displayName 1",
      description: "description 1",
    },
    {
      name: "cate 2",
      displayName: "displayName 2",
      description: "description 2",
    },
  ],
  category: {},
  code: "",
  error: "",
};

const categoryReduser = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CategoryEnumAction.FETCH_CATEGORIES:
      return { ...state, categories: payload.items };

    case CategoryEnumAction.FETCH_CATEGORY:
      return { ...state, category: payload.item };

    case CategoryEnumAction.CREATE_CATEGORY:
      let categories = [...state.categories, payload.item];
      return { ...state, categories };

    case ErrorEnumAction.ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
};

export default categoryReduser;
