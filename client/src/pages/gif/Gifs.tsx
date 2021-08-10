import { useState } from "react";
import InputForm from "../../shared/InputForm";
import axios from "axios";

const Gifs = () => {
  const [gifForm, setGifForm] = useState({
    title: "",
    description: "",
    gif: "",
  });

  const onSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData();
    data.append("title", gifForm.title);
    data.append("description", gifForm.description);
    data.append("gif", gifForm.gif);
    const url = `http://httpbin.org/anything`;
    axios
      .post("http://localhost:5000/gifs", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form onSubmit={onSubmit}>
            <InputForm
              hasPlaceHolder
              label="title"
              value={gifForm.title}
              autoFocus={true}
              onChange={(e: any) =>
                setGifForm({ ...gifForm, title: e.target.value })
              }
              required={true}
            />

            <InputForm
              type="textarea"
              value={gifForm.description}
              onChange={(e: any) =>
                setGifForm({ ...gifForm, description: e.target.value })
              }
            />

            <input
              type="file"
              name="gif"
              onChange={(e: any) =>
                setGifForm({ ...gifForm, gif: e.target.files[0] })
              }
              accept="image/*, audio/*, video/*,"
            />

            <button type="submit" className="btn btn-primary btn-block">
              create gif
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Gifs;
