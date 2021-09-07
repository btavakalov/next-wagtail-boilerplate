import * as React from 'react'
import { FC } from 'react'
import css from 'components/pages/blocks/HtmlBlock/HtmlBlock.module.scss'
import { Block } from 'components/pages/blocks/DefaultBlock/DefaultBlock'

interface HtmlBlock extends Block {
  value: string
}

const HtmlBlock: FC<HtmlBlock> = ({ id, type, value, children }) => {
  return (
    <div className={css.block} id={`${type}-${id}`}>
      <div className={css.field} dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  )
}

export default HtmlBlock
