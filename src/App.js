import React, { useState } from "react";
import Article from "./components/Article";
import ArticleBtnRead from "./components/ArticleBtnRead";
import ArticleContext from "./components/article-context";

 function App () {

  const article = {
    EN: {
      topic: 'NVIDIA NEWS',
      title: 'NVIDIA Accelerated AI on Azure',
      description: 'Article description:',
      preview: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
      content: 'Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.',
      btnRead: 'Read',
      btnClose: 'Close',
      author: 'Author: Mike',
      published: 'Published: 06.12.2022',
      theme: 'Theme: video cards',
      btnMarkAsRead: 'Mark as read',
      btnMarkAsUnread: 'Mark as unread',
    },
    UA: {
      topic: 'НОВИНИ NVIDIA',
      title: 'Прискорений штучний інтелект NVIDIA в Azure',
      description: 'Опис статті:',
      preview: 'NVIDIA на Azure надає підприємствам штучний інтелект, мережі та високопродуктивні обчислення.',
      content: 'Microsoft Azure та NVIDIA дозволяють підприємствам у хмарі використовувати об\'єднану міць прискорених обчислень NVIDIA та мереж NVIDIA на запит для задоволення різноманітних обчислювальних вимог ІІ, машинного навчання, аналізу даних, графіки, віртуальних робочих столів та високопродуктивних обчислень додатків HPC. Від дрібних графічних процесорів і одиночних графічних процесорів до кількох графічних процесорів на кількох вузлах для розподілених обчислень - отримайте доступ до прискорення графічного процесора потрібного розміру для робочих навантажень.',
      btnRead: 'Читати',
      btnClose: 'Закрити',
      author: 'Автор: Майк',
      published: 'Опубліковано: 06.12.2022',
      theme: 'Тема: відео карти',
      btnMarkAsRead: 'Прочитано',
      btnMarkAsUnread: 'Не прочитано',
    }
  }
  const [isShow, setIsShow]  = useState(false);

  const toggleArticle = () => {
    isShow ? setIsShow(false) : setIsShow(true);
  }

  const [isRead, setIsRead]  = useState(false);

  const toggleRead = () => {
    setIsRead(true);
  }

  const toggleUnread = () => {
    setIsRead(false);
  }

  const [lang, setLang]  = useState("EN");

  const setLangUA = () => {
    setLang("UA");
  }

  const setLangEN = () => {
    setLang("EN");
  }

  return (
    <div className="wrapper">
      <ArticleContext.Provider value={article[lang]}>
        <h1 className="title">{article[lang].topic}</h1>
        <div className="article">
          <Article show={isShow} text={article} read={isRead}>
          <div className="article__title">
            <h2>{article[lang].title}</h2>
          </div>
          </Article>
          <div className="article__actions" >
            <button className="article__btn" onClick={toggleRead}>
              {article[lang].btnMarkAsRead}
            </button>
            <ArticleBtnRead show={isShow} text={article} onClick={toggleArticle}/>
            <button className="article__btn" onClick={toggleUnread}>
              {article[lang].btnMarkAsUnread}
            </button>
          </div>
        </div>
      </ArticleContext.Provider>
      <div className="lang">
        <button className="lang-btn" onClick={setLangUA}>UA</button>
        <button className="lang-btn" onClick={setLangEN}>EN</button>
      </div>
    </div> 
    );
  }
export default App;