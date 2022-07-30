import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";

import { useHttp } from "../hook/useHttp";
import { creatingNewNews } from "../redux/actions";

export const NewsAddForm = () => {
  const dispatch = useDispatch();
  const { request } = useHttp();
  const [ name, setName ] = useState()
  const [ description, setDescription ] = useState()
  const [ category, setCategory ] = useState()

  const newsCollection = {
    id: v4(),
    name,
    description,
    category
  }

  const handlerSubmit = (e) => {
    e.preventDefault();

    dispatch(creatingNewNews(request, newsCollection))

    setName("")
    setDescription("")
    setCategory("")
  }


  return (
    <form className="border p-4 shadow-lg rounded createContent" onSubmit={ handlerSubmit }>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Name for news
        </label><br/>
        <input
          type="text"
          required
          name="name"
          className="foorm-control w-100"
          id="name"
          placeholder="What is your news name?"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
        />
      </div>

      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Description
        </label><br/>
        <textarea
          type="text"
          required
          name="text"
          className="foorm-control w-100"
          id="text"
          placeholder="What is your news about?"
          style={{height: '120px'}}
          value={ description }
          onChange={ (e) => setDescription(e.target.value) }
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
            Choose category of news
        </label><br/>
        <select className="form-select" id="category" name="category"
          value={ category }
          onChange={ (e) => setCategory(e.target.value) }>
            <option value=""></option>
            <option value="Hot news">Hot news</option>
            <option value="Sport news">Sport news</option>
            <option value="Football news">Football news</option>
            <option value="Box news">Box news</option>
            <option value="World news">World news</option>
        </select>
      </div>
      <button type="submit" className="btn-dark shadow-lg text-light w-100">
        Create News
      </button>
    </form>
  );
};

