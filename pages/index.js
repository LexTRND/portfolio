import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Head from "next/head";
import {client} from "./api/api";

export async function getStaticProps() {
    let data = await client.getEntries({
        content_type: "projects"
    })
    return {
        props: {
            projects: data.items
        }, // will be passed to the page component as props
    }
}


export default function Home({projects}) {
    // console.log(projects[0].fields.name)

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
            <Featured props={projects}/>
            <Skills />
            <Portfolio props={projects}/>
        </div>
    );
}

