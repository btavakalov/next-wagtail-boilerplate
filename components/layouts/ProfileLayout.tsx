import * as React from 'react'
import { FC } from 'react'
import Header from 'components/header/Header'
import css from 'components/layouts/ProfileLayout.module.scss'
import Actions from 'components/actions/Actions'
import NavMenu from 'components/main/NavMenu'

const ProfileLayout: FC = ({ children }) => (
  <div className={css.layout}>
    <Header />
    <Actions />

    <div className={css.mainLayout + ' container'}>
      <NavMenu />
      <div className={css.content}>{children}</div>
    </div>
  </div>
)

export default ProfileLayout
