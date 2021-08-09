import { createCategory, fetchCategories } from "../services/apiService"
import { CREATE_CATEGORY, ERROR, FETCH_CATEGORIES } from "./action.type"

export const createCategoryAction = (data) => async (dispatch) => {
    try {
        const response = await createCategory(data)
        if (response && response.data) {
            dispatch({ type: CREATE_CATEGORY, payload: response.data })
            return Promise.resolve(response.data)
        }
    } catch (error) {
        dispatch({ type: ERROR, payload: error.message })
        return Promise.reject(error.message)
    }

}

export const fetchCategoriesAction = () => async (dispatch) => {
    try {
        const response = await fetchCategories()
        if (response && response.data) {
            dispatch({ type: FETCH_CATEGORIES, payload: response.data })
            // return Promise.resolve(response.data)
        }
    } catch (error) {
        dispatch({ type: ERROR, payload: error.message })
        // return Promise.reject(error.message)
    }
}