import React from "react"
import Helmet from "react-helmet"
import PilihanApp from "../components/PilihanApp"

export default () => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Pilihan - Choose!</title>
        </Helmet>
        <PilihanApp />
    </div>
)
