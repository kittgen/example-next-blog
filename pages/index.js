import { getLayout } from '../components/DefaultLayout'
import Link from 'next/link'
import { useTranslation } from '../lib/i18n'
import { getArticles } from '../lib/data/articles'

const Home = ({ articles, locale }) => {

  const t = useTranslation(locale, 'homepage')

  return (
    <div className="prose lg:prose-sm">

      <h1>
        {t('welcome')}
      </h1>
      <div>
        <h2>
          {t('languages-header')}
        </h2>

        <Link href="/" locale="en">
          <a>{t('languages.en')}</a>
        </Link>
        -
        <Link href="/" locale="fr">
          <a>{t('languages.fr')}</a>
        </Link>
         -
        <Link href="/" locale="de">
          <a>{t('languages.de')}</a>
        </Link>
      </div>
      <div>
        <h2>{t('articles')}</h2>
        <ul>
          {articles.map((article) => (
            <li key={article.slug}>
              <Link href={"/" + article.slug} locale={article.defaultLocale}>
                <a> {article.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div >
  )
}

export async function getStaticProps({ locale }) {
  const articles = await getArticles()
  return {
    props: {
      articles,
      locale
    },
  }
}

Home.getLayout = getLayout
export default Home