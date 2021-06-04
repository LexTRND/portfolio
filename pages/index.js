import React from "react";
import ProjectList from "../components/ProjectList";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Head from "next/head";


export default function Home({ projects }) {
  console.log(projects);
  return (
    <div className="main">
        <Head>
            <title>Yemil Designs</title>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta
                name="description"
                content="This is a landing page for Alexis Reese. A software developer."
            />
            <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
      <Hero />
      <Featured />
      <Skills />
      <Portfolio />
    </div>
  );
}

