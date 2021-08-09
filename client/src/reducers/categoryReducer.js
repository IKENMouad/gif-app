import {
    CREATE_CATEGORY,
    ERROR,
    FETCH_CATEGORIES,
    FETCH_CATEGORY,
} from "../actions/action.type";

const initState = {
    total: 0,
    categories: [
        { name: 'cate 1', displayName: 'displayName 1', description: 'description 1' },
        { name: 'cate 2', displayName: 'displayName 2', description: 'description 2' },

    ],
    category: {},
    code: '',
    error: '',
}


const categoryReduser = (state = initState, action) => {
    const { type, payload } = action
    switch (type) {
        case FETCH_CATEGORIES:
            return { ...state, categories: payload.items }

        case FETCH_CATEGORY:
            return { ...state, category: payload.item }

        case CREATE_CATEGORY:
            let categories = [...state.categories, payload.item]
            return { ...state, categories }

        case ERROR:
            return { ...state, error: payload }

        default:
            return state
    }
}


export default categoryReduser