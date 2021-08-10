import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import CategoryAction from "../../actions/category.actions";
const CategoryList = () => {
 
  const categoryaction = new CategoryAction()
 
  const dispatch = useDispatch();

  const categoryState = useSelector((state: any) => state.category);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    dispatch(categoryaction.fetchCategoriesAction());
    setCategories(categoryState.categories);
  }, []);

  return (
    <div>
      categories
      {JSON.stringify(categories)}
    </div>
  );
};

export default CategoryList;
