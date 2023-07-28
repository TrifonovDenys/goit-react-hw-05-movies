import { NavLink, Outlet } from "react-router-dom"
import css from './Header.module.css'
import {Suspense} from 'react'
const Layout = () => {
  return (
    <>
      <nav className={css.nav}>
        
        <div className={css.nav_block}>
          <NavLink style={({ isActive }) => ({
          color: isActive ? 'blue' : 'black' ,
      })}
        className={css.link} to="/">Home</NavLink>
      <NavLink style={({ isActive }) => ({
          color: isActive ? 'blue' : 'black',
      })}
          className={css.link} to="/movies">Movies</NavLink>
      </div>
        
    </nav>
      <main className={css.main}>
        <Suspense fallback={<div>loading...</div>}>
          <Outlet/>
        </Suspense>
    </main>
    </>
  )
}
export default Layout