import Head from 'next/head'
import { getLayout } from '../components/DefaultLayout'
import { getArticles } from '../lib/data/articles'
import { FullArticle } from '../components/FullArticle'
import { ShortArticle } from '../components/ShortArticle'


const Article = ({ slug, mainArticle, otherArticles, locale }) => {
    return (
        <>
            <Head>
                <title>Articles</title>
            </Head>
            <div className="prose mb-5">
                Slug: {slug} - Locale: {locale}

                <FullArticle article={mainArticle} />

                <hr className="m-6" />

                <h2>Other Articles</h2>

                {otherArticles.map((article) => (
                    <ShortArticle article={article} />
                ))}
            </div>
        </>
    )
}

export async function getStaticProps({ params, locale }) {
    const articles = await getArticles()
    const mainArticle = articles.find(a => a.slug == params.slug)
    const otherArticles = articles.filter(a => a.slug != params.slug)
    return {
        props: {
            slug: params.slug,
            mainArticle: mainArticle,
            otherArticles: otherArticles,
            locale
        }
    }
}

export async function getStaticPaths() {
    const articles = await getArticles()
    const paths = articles.map(article => {
        return { params: { slug: article.slug }, locale: article.defaultLocale }
    })
    return {
        paths,
        fallback: false
    }
}

Article.getLayout = getLayout
export default Article