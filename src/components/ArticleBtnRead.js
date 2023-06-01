import React, {useContext} from "react";
import ArticleContext from "./article-context";

function ArticleBtnRead(props) {
  const context = useContext(ArticleContext);
  return (
      <button className="article__btn" onClick={props.onClick}>
        {props.show ? context.btnClose : context.btnRead}
      </button>
  )
}

export default ArticleBtnRead;