import React, {useContext} from "react";
import ArticleContext from "./article-context";

function ArticleBody(props) {
  const context = useContext(ArticleContext);
  return (
          <div className={props.show ? "article__body" : "article__body read" && props.read ? "article__body read" : "article__body"}>
            <h3 className="article__description">
              {!props.show && context.description }
            </h3>
            <p className="article__text">
              {props.show ? context.content : context.preview }
            </p>
          </div>)}
export default ArticleBody;