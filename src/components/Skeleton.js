import React from "react";
import ContentLoader from "react-content-loader";

function Skeleton() {
    return (
        <ContentLoader
            className={'pizza-block'}
            speed={2}
            width={280}
            height={467}
            viewBox="0 0 280 467"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="135" cy="130" r="120" />
            <rect x="0" y="270" rx="10" ry="10" width="280" height="27" />
            <rect x="0" y="317" rx="10" ry="10" width="280" height="88" />
            <rect x="0" y="430" rx="10" ry="10" width="90" height="27" />
            <rect x="126" y="425" rx="10" ry="10" width="155" height="40" />
        </ContentLoader>
    )
}

export default Skeleton;