import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Fast",
    Svg: require("@site/static/img/fast.svg").default,
    description: (
      <>no-secreto was designed to be easy to use and to get started quickly.</>
    ),
  },
  {
    title: "Unopinionated",
    Svg: require("@site/static/img/uop.svg").default,
    description: (
      <>
        no-secreto is built in a way that makes it easy to use and to customize
        it to your needs.
      </>
    ),
  },
  {
    title: "Open Source",
    Svg: require("@site/static/img/op.svg").default,
    description: <>no-secreto is MIT licensed and available for any use.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
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
