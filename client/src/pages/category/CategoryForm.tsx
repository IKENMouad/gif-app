import { useState } from "react";
import InputForm from "../../shared/InputForm";
import { useDispatch } from "react-redux";
import CategoryAction from "../../actions/category.actions";


const CategoryForm = () => {

 const categoryAction = new CategoryAction()
  const dispatch = useDispatch();

  const [category, setCategory] = useState({
    name: "",
    displayName: "",
    description: "",
  });

  const createCategory = (event: any) => {
    event.preventDefault();
    console.log("category", JSON.stringify(category));
    dispatch(categoryAction.createCategoryAction(category));
  };

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <h4 className="card-header"> Create new Category </h4>
            <div className="card-body">
              <form onSubmit={(event) => createCategory(event)}>
                <InputForm
                  required={true}
                  autoFocus={true}
                  label="Category name :"
                  value={category.name}
                  onChange={(event: any) =>
                    setCategory({
                      ...category,
                      name: event.target.value,
                    })
                  }
                ></InputForm>
                <InputForm
                  label="Category displaying name :"
                  value={category.displayName}
                  onChange={(event: any) =>
                    setCategory({
                      ...category,
                      displayName: event.target.value,
                    })
                  }
                ></InputForm>

                <InputForm
                  type="textarea"
                  label="Category description :"
                  value={category.description}
                  onChange={(event: any) =>
                    setCategory({
                      ...category,
                      description: event.target.value,
                    })
                  }
                ></InputForm>

                <button type="submit" className=" btn btn-primary btn-block ">
                  Create Categroty
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryForm;
