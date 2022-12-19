import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Learn Fundamentals',
    Svg: require('@site/static/img/learn.svg').default,
    description: (
      <>
        Understand core concepts. Install key developer tools. Validate your local dev environment.
      </>
    ),
  },
  {
    title: 'Build Real Apps',
    Svg: require('@site/static/img/build.svg').default,
    description: (
      <>
        Apply learned concepts in practice. Deconstruct existing apps. Develop e2e app from scratch.
      </>
    ),
  },
  {
    title: 'Share Learnings',
    Svg: require('@site/static/img/share.svg').default,
    description: (
      <>
        Document your learning journey. Share resources, insights & code samples that empowered you.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
