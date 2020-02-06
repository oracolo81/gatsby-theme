import React from "react";
import Layout from "gatsby-theme-theme-ui-example/src/layouts/default";

export default ({ pageContext: { page, menus, widgets } }) => (
    <div className="frame">
        <Layout page={page} menus={menus} widgets={widgets} />
    </div>
)