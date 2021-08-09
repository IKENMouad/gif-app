import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoriesAction } from '../../actions/category.actions'

const CategoryList = () => {
    const dispatch = useDispatch()

    const categoryState = useSelector(state => state.category)

    const [categories, setCategories] = useState([])

    useEffect(() => {
        dispatch(fetchCategoriesAction())
        setCategories(categoryState.categories)
    }, [])

    return (
        <div>
            categories
            {JSON.stringify(categories)}
        </div>
    )
}

export default CategoryList
