import React, { FC } from 'react'
import css from 'components/pages/Page.module.scss'
import Body from 'components/pages/blocks/Body'
import { Block } from 'components/pages/blocks/DefaultBlock/DefaultBlock'
import Head from 'next/head'
import Title from 'components/pages/blocks/Title/Title'

interface Page {
  body: Array<Block>
  title: string
  meta: {
    seoTitle: string
    searchDescription: string
  }
}

export interface PageProps {
  className: string
  page: Page
}

const Page: FC<PageProps> = ({ page, className, children }) => (
  <div className={[css.content, className].join(' ')}>
    <Head>
      <title>{page.meta.seoTitle || page.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children || (
      <div className={css.content}>
        <Title title={page.title} />
        <Body blocks={page.body} />
      </div>
    )}
  </div>
)

export default Page
