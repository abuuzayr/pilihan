import React from "react"
import Helmet from "react-helmet"
import PilihanApp from "../components/PilihanApp"

export default () => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Pilihan - Choose!</title>
            <link href="https://fonts.googleapis.com/css?family=Dosis:400,700&display=swap" rel="stylesheet"></link>
        </Helmet>
        <PilihanApp />
    </div>
)
