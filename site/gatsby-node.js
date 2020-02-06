const axios = require('axios')
let pagesData = null

function getData() {
    const path = `${process.env.GATSBY_API_URL}/pages/sorted?site_id=82`

    console.log(`Getting data from ${path}`)
    return new Promise((resolve, reject) => {
        axios.get(path, {
            headers: {
                'Content-Type': 'application/json',
                'X-ID': `${process.env.GATSBY_API_X_ID}`,
                'X-Signature': `${process.env.GATSBY_API_X_SIGNATURE}`
            }
        })
        .then(response => {
            resolve(response)
        })
        .catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

exports.createPages = async ({ actions: { createPage } }) => {
    const { data: response } = await getData()
    const { menus, widgets } = response.result
  
    pagesData = response
  
    response.result.pages.forEach(page => {
        if (page.type === 'page') {
            let component = require.resolve('./src/templates/page.js')
            if (page.path === '/slots') {
                component = require.resolve('./src/templates/article.js')
            }
            createPage({
                path: page.path,
                component: component,
                context: { page, menus, widgets }
            })
        }
    })
}