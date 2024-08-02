import React from 'react'
import Navbar from './navbar'
import '../styles/global.css'
import { graphql, useStaticQuery } from 'gatsby'

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)

  const { copyright } = data.site.siteMetadata

  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        {children}
      </div>
      <footer>
        <p>{copyright}</p>
        <span>By <a target="_blank" href="https://github.com/WeltonAM">Welton Matos Dev</a></span>
      </footer>
    </div>
  )
}