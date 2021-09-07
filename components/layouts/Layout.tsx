import React, { FC } from 'react'
import css from 'components/layouts/Layout.module.scss'

export const Layout: FC = ({ children }) => <div className={css.layout}>{children}</div>
