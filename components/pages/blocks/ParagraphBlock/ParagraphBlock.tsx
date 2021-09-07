import * as React from 'react'
import { FC } from 'react'
import { Block } from 'components/pages/blocks/DefaultBlock/DefaultBlock'
import css from 'components/pages/blocks/ParagraphBlock/ParagraphBlock.module.scss'

interface ParagraphBlock extends Block {
  value: string
}

const ParagraphBlock: FC<ParagraphBlock> = ({ id, type, value }) => {
  return <div className={css.block} id={`${type}-${id}`} dangerouslySetInnerHTML={{ __html: value }} />
}

export default ParagraphBlock
