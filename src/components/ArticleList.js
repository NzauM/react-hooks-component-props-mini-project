import React from "react";
import Article from "./Article";

function ArticleList({articles}){
    console.log(articles)
    const myArticles = articles.map((article)=>{
        return <Article
         key={article.title}
         title={article.title}
         date={article.date}
         preview = {article.preview}
        />
    })
    return (
        <main>
            {myArticles}
        </main>
    )
}

export default ArticleList