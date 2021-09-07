import * as React from 'react'
import { FC } from 'react'
import css from 'components/pages/blocks/Body.module.scss'
import { getComponent } from 'components/pages/blocks/index'
import { Block } from 'components/pages/blocks/DefaultBlock/DefaultBlock'

interface BodyProps {
  blocks: Block[]
}

const Body: FC<BodyProps> = ({ blocks = [] }) => (
  <div className={css.body}>
    {blocks.map(block => {
      const Block = getComponent(block.type)
      return <Block key={block.id} {...block} />
    })}
  </div>
)

export default Body
