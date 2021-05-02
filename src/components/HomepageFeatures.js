import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Control de acceso por tokens',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        La API fue diseña desde cero para autenticar peticiones por
        medio de tokens.
      </>
    ),
  },
  {
    title: 'Diseño REST',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Todas los puntos de acceso siguen una arquitectura
        estilo REST.
      </>
    ),
  },
  {
    title: 'Respuestas JSON',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Las respuestas regresadas por la API son de tipo JSON y 
        siguen un formato consistente. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
