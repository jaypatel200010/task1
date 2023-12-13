import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-sm navbar-dark" id="nav">
    <div class="container">
      <a class="navbar-brand" href="zudio.html"><img src="https://www.zudio.com/cdn/shop/files/logo_360x.png?v=1613519896" alt="" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="Zstories.html"><span class="site-nav__label">Z Stories</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="haszudio.html"><span class="site-nav__label">#Zudio</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="zudionearyou.html"><span class="site-nav__label">Zudio Near You</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Zworld.html"><span class="site-nav__label">Z World</span></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
  )
}
