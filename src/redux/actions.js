import { createNews, newsDelete } from "../components/action_reducer/NewsSlice"

// Removing news from list

export const removeNewsFromList = (request, id) => (dispatch) => {
    request(`http://localhost:3001/news/${id}`, "DELETE")
            .then(data => console.log(data))
            .then(dispatch(newsDelete(id)))
            .catch(err => console.log(err))
}

// creating new NewsItem

export const creatingNewNews = (request, newsCollection) => (dispatch) => {
    request("http://localhost:3001/news", "POST", JSON.stringify(newsCollection))
    .then(res => console.log('Success'))
    .then(dispatch(createNews(newsCollection)))
    .catch(err => console.log(err))
}
