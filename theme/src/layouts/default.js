/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import Header from '../components/header'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Content from '../modules/content'

const Layout = ({ page, menus, widgets }) => (
    <div sx={{ display: 'flex', flexDirection: 'column', fontFamily: 'body', backgroundColor: 'background', color: 'text' }}>
        <Header>{page.title}</Header>
        <Navbar logo="https://www.gatsbyjs.org/monogram.svg" menu={menus.main} path={page.path}/>
        <main sx={{ backgroundColor: '#F1F1F1', variant: 'layout.main', }}>
            <Container>
                <div sx={{ maxWidth: 768, mx: 'auto', px: 3, }}>
                    {page.modules.map((module, key) => {
                        return getModule(page, module, key)
                    })}
                </div>
            </Container>
        </main>
        <Footer copyright="&copy; 2020 Gaming Innovation Group. All rights reserved.">
            Footer content
        </Footer>
    </div>
);
export default Layout;

function getModule(page, module, key) {
    if (module.name === 'content') {
        return (
            <Content data={module} key={key} />
        )
    }
}