import { useEffect, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";

import { CSSTransition, TransitionGroup } from "react-transition-group";

//  reselect
import { createSelector } from "reselect";

// components
import { NewsListItem } from "./NewsListItem";

import { fetchNews, selectAll } from "../components/action_reducer/NewsSlice";

import { useHttp } from "../hook/useHttp";
import { removeNewsFromList } from "../redux/actions";

import "../main.css";

export const NewsList = () => {
  const filteredNewSelector = createSelector(
    (state) => state.filter.activeFilter,
    selectAll,
    (filter, news) => {
      if (filter === "all") {
        return news;
      } else {
        return news.filter((s) => s.category === filter);
      }
    }
  );

  const filteredNews = useSelector(filteredNewSelector);
  const filterLoadingStatus = useSelector(
    (state) => state.filter.filterLoadingStatus
  );

  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(fetchNews());

    // eslint-disable-next-line
  }, []);

  const onDelete = useCallback((id) => {
    dispatch(removeNewsFromList(request, id));
    // eslint-disable-next-line
  }, []);

  if (filterLoadingStatus === "loading") {
    return <h3>Loading...</h3>;
  } else if (filterLoadingStatus === "error") {
    return <h3>Error</h3>;
  }
  const renderNewsList = (arr) => {
    if (arr.length === 0) {
      return (
        <CSSTransition classNames="fade" timeout={1000}>
          <div>
            <main>
              <h1>Sorry News Does not Exists!</h1>
            </main>
          </div>
        </CSSTransition>
      );
    }

    return arr
      .map(({ id, ...props }) => {
        return (
          <CSSTransition key={id} timeout={1000} classNames="fade">
            <NewsListItem onDelete={() => onDelete(id)} {...props} />
          </CSSTransition>
        );
      })
      .reverse();
  };

  const element = renderNewsList(filteredNews);

  return (
    <TransitionGroup component="ul" classNames="newslist">
      {element}
    </TransitionGroup>
  );
};
