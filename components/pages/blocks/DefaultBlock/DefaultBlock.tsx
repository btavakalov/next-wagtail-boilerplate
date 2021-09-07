import * as React from 'react'
import { FC } from 'react'
import css from 'components/pages/blocks/DefaultBlock/DefaultBlock.module.scss'

export interface Block {
  type: string
  id: number
  value: object | string
}

const DefaultBlock: FC<Block> = ({ id, type, value, children }) => {
  if (typeof value === 'object' && value !== null) {
    const fields = Object.entries(value)

    return (
      <div className={css.block} id={`${type}-${id}`}>
        {fields.map(([name, value]) => (
          <div key={name} className={css.field} dangerouslySetInnerHTML={{ __html: value }} />
        ))}
      </div>
    )
  }

  if (children) {
    return (
      <div className={css.block} id={`${type}-${id}`}>
        {children} children
      </div>
    )
  }

  return (
    <div className={css.block} id={`${type}-${id}`}>
      <div className={css.field} dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  )
}

export default DefaultBlock
