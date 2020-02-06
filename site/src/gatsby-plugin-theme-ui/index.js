import merge from "lodash.merge"
import BaseTheme from "gatsby-theme-theme-ui-example/src/gatsby-plugin-theme-ui"

export default merge({}, BaseTheme, {
    colors: {
        background: 'lightblue'
    }
});