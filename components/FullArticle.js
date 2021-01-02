export const FullArticle = ({ article }) => {
    return (
        <div className="prose">
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <img src={article.mainImage} />
            <div>{article.body}</div>
        </div>
    )
}