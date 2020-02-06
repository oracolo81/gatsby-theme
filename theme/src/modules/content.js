import React from "react"

const Content = props => (
    <div className="content" dangerouslySetInnerHTML={{ __html: props.data.value }} />
);
export default Content;