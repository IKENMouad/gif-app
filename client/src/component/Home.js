import React, { useState } from 'react'

const Home = () => {

const [tags, setTags] = useState([
  {
    id: 1,
    name: "tag 1",
  },
  {
    id: 2,
    name: "tag 2",
  },
  {
    id: 3,
    name: "tag 3",
  },
  {
    id: 4,
    name: "tag 4",
  },
  {
    id: 5,
    name: "tag 5",
  },
  {
    id: 6,
    name: "tag 6",
  },
]);



    return (
      <div>
        <div className="container">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="search"
              id="search"
              placeholder="search fot git, tag, category ..."
            />
          </div>
        </div>
        <div className="col-md-6 mx-auto">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="mx-2 d-inline p-1 bg-primary text-white"
            >
              {tag.name}
            </div>
          ))}
        </div>
      </div>
    );
}

export default Home
