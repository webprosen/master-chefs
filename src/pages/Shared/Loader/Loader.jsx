import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
    <div className="max-w-6xl mx-auto px-6 md:px-4 py-14 md:py-20">
        <ContentLoader className="w-full"
            speed={1}
            width={700}
            height={400}
            viewBox="0 0 700 400"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="313" y="182" rx="0" ry="0" width="410" height="13" />
            <rect x="313" y="229" rx="0" ry="0" width="410" height="13" />
            <rect x="315" y="279" rx="0" ry="0" width="287" height="9" />
            <rect x="313" y="319" rx="0" ry="0" width="290" height="9" />
            <rect x="-11" y="83" rx="0" ry="0" width="261" height="391" />
        </ContentLoader>
    </div>

)

export default Loader

