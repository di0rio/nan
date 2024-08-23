import { Link } from "react-router-dom"
import styles from  "./Header.module.css"
import logo from "../../assets/Logonan.png"
import imgFundo from "../../assets/imgFundo.png"
import React, { useState, useEffect } from 'react';

const navigation = [
  { component: "/", name: "PaginaInicial" },
  { component: "/suporte", name: "Suporte" },
  { component: "/sobre", name: "Sobre" }
]

const Header = () => {
  
  return (
    <div className={styles.back}>
    <div className={styles.container}>
      <div className={styles.logo}>
      <img src={logo} alt="" />
      </div>
        <div className={styles.links}>
         <Link to={"/"}><p>PÁGINA INICIAL</p></Link>
         <Link to={"/suporte"}><p>SUPORTE</p></Link>
         <Link to={"/sobre"}><p>SOBRE NÓS</p></Link>
        </div>
    </div>
    </div>
  )
}

export default Header