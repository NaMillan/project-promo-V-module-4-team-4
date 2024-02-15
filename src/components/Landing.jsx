import React from 'react'
import {Link} from 'react-router-dom'
import PreviewAuthor from "./PreviewAuthor";

function Landing({dataCard}) {
  return (
    <div>
        <section className="titleSection">
          <h1 className="titleSection__h1">Proyectos molones</h1>
          <p className="titleSection__p">
            Escaparate en línea para recoger ideas a través de la tecnología.
          </p>
          <Link to="/newProject" className="titleSection__link">
            <button className="titleSection__btn--new">Nuevos proyectos</button>
          </Link>
          <section className="landing">
            <PreviewAuthor dataCard={dataCard}/>
            <PreviewAuthor dataCard={dataCard}/>
            <PreviewAuthor dataCard={dataCard}/>
            <PreviewAuthor dataCard={dataCard}/>
          </section>
         
        </section>
    </div>
  )
}

export default Landing;