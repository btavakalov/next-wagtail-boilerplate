import dynamic from 'next/dynamic'

const DEFAULT_BLOCK_TYPE = 'defaultBlock'

const components = {
  defaultBlock: dynamic(() => import('components/pages/blocks/DefaultBlock/DefaultBlock')),
  paragraph: dynamic(() => import('components/pages/blocks/ParagraphBlock/ParagraphBlock')),
  html: dynamic(() => import('components/pages/blocks/HtmlBlock/HtmlBlock')),
  quote: dynamic(() => import('components/pages/blocks/QuoteBlock/QuoteBlock')),
}

// @ts-ignore
export const getComponent = type => components[type] || components[DEFAULT_BLOCK_TYPE]
