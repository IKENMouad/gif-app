import { CategoryService } from "../services/categoryService";
import { CategoryEnumAction, ErrorEnumAction } from "./action.type";



export default class CategoryAction {
  private categoryService: CategoryService = new CategoryService();
  constructor() {}

  createCategoryAction = (data: any) => async (dispatch: any) => {
    try {
      const response = await this.categoryService.createCategory(data);
      if (response && response.data) {
        dispatch({
          type: CategoryEnumAction.CREATE_CATEGORY,
          payload: response.data,
        });
        
      }
    } catch (error) {
      dispatch({ type: ErrorEnumAction.ERROR, payload: error.message });
    }
  };

  fetchCategoriesAction = () => async (dispatch: any) => {
    try {
      const response = await this.categoryService.fetchCategories();
      if (response && response.data) {
        dispatch({
          type: CategoryEnumAction.FETCH_CATEGORIES,
          payload: response.data,
        });
      }
    } catch (error) {
      dispatch({ type: ErrorEnumAction.ERROR, payload: error.message });
    }
  };
} 


