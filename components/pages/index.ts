import dynamic from 'next/dynamic'

const DEFAULT_PAGE_TYPE = 'Page'

const pageLayouts = {
  Page: dynamic(() => import('components/pages/Page')),
}

// @ts-ignore
export const getPageLayout = (type: string | number) => pageLayouts[type] || pageLayouts[DEFAULT_PAGE_TYPE]

export default pageLayouts
