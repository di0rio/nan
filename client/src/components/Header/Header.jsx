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
    <>
    <div className={styles.back}>
      <div
        className="d-flex flex-column align-items-center justify-content-center flex-md-row justify-content-md-between"
        style={{}}>
          <div className="col-12 col-md-1 col-lg-1 mt-md-2 ms-md-2 d-flex align-items-center justify-content-center">
            <img src={logo} alt="" style={{width: "80px", height: "80px"}}/>
          </div>

          <div className="d-flex flex-column col-12 flex-md-row col-md-6 col-lg-6 justify-content-center align-items-center justify-content-md-end mt-md-5">
            <Link
              to={"/"}
              style={{
                color: "white", fontSize: "14px", fontFamily: "Montserrat, sans-serif", transition: "0.5s", textDecoration:" none",
                ":hover": {textDecoration: "underline", textDecorationSkip: "initial", textUnderlineOffset: "8px", textDecorationThickness: "1px"},
              }}
              className="mx-md-5"
              > <p>PÁGINA INICIAL</p>
            </Link>
            <Link
              to={"/suporte"}
              style={{
                color: "white", fontSize: "14px", fontFamily: "Montserrat, sans-serif", transition: "0.5s", textDecoration:" none",
                "--hover": {textDecoration: "underline", textDecorationSkip: "initial", textUnderlineOffset: "8px", textDecorationThickness: "1px"},
              }}
              className="mx-md-5"> <p>SUPORTE</p></Link>
            <Link
              to={"/sobre"}
              style={{
                color: "white", fontSize: "14px", fontFamily: "Montserrat, sans-serif", transition: "0.5s", textDecoration:" none",
                ":hover": {textDecoration: "underline", textDecorationSkip: "initial", textUnderlineOffset: "8px", textDecorationThickness: "1px"},
              }}
              className="mx-md-5"> <p>SOBRE NÓS</p></Link> 
          </div>
      </div>
    </div>
  </>
  )
}

export default Header