import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Error from 'next/error'
import api from 'api'
import { getPageLayout } from 'components/pages'
import { Layout } from 'components/layouts/Layout'

export const getServerSideProps: GetServerSideProps = async ({
  query,
  params,
  locales,
  locale,
  defaultLocale,
  resolvedUrl,
  req,
  res,
}) => {
  const { path } = query
  const htmlPath = Array.isArray(path) ? path.join('/') : '/'

  const page = await api.pages
    .pagesFindRetrieve({ params: { html_path: htmlPath } })
    .then(response => response.data)
    .catch(error => {
      res.statusCode = error.response?.status || 500
      return null
    })

  const menu = await api.pages
    .pagesList({ params: { show_in_menus: true, locale: locale } })
    .then(response => response.data)
    .catch(() => null)

  return {
    props: {
      page,
      menu,
      statusCode: res.statusCode,
    },
  }
}

const WagtailPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { page, statusCode } = props

  if (statusCode >= 400) {
    return <Error statusCode={statusCode} />
  }

  const type = page.meta.type.split('.')[1]
  const PageLayout = getPageLayout(type)

  return <PageLayout page={page} />
}

export default WagtailPage
