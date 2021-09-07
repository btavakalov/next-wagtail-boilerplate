import React, { FC } from 'react'
import css from 'components/pages/blocks/Title/Title.module.scss'

interface TitleProps {
  title: string
}

const Title: FC<TitleProps> = ({ title }) => {
  return (
    <div className={css.block}>
      <h1 className={css.title}>{title}</h1>
    </div>
  )
}

export default Title
