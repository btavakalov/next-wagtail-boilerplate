import * as React from 'react'
import { FC } from 'react'
import { Block } from 'components/pages/blocks/DefaultBlock/DefaultBlock'
import ImageField, { ImageFieldProps } from 'components/pages/fields/ImageField/ImageField'
import css from 'components/pages/blocks/DefaultBlock/DefaultBlock.module.scss'

interface QuoteBlock extends Block {
  value: {
    text: string
    image: ImageFieldProps
    footnote1: string
    footnote2: string
    footnote3: string
  }
}

const QuoteBlock: FC<QuoteBlock> = ({ id, type, value }) => {
  const { text, image, footnote1, footnote2, footnote3 } = value

  return (
    <div className={css.block} id={`${type}-${id}`}>
      <div dangerouslySetInnerHTML={{ __html: text }} />
      <ImageField {...image} />
      <div dangerouslySetInnerHTML={{ __html: footnote1 }} />
      <div dangerouslySetInnerHTML={{ __html: footnote2 }} />
      <div dangerouslySetInnerHTML={{ __html: footnote3 }} />
    </div>
  )
}

export default QuoteBlock
