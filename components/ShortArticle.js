export const ShortArticle = ({ article }) => {
    return (
        <div className="prose">
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
        </div>
    )
}