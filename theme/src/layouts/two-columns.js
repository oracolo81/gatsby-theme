/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import Header from '../components/header'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar'
import Content from '../modules/content'

const Layout = ({ page, menus, widgets }) => (
    <div sx={{ display: 'flex', flexDirection: 'column', fontFamily: 'body', backgroundColor: 'background', color: 'text' }}>
        <Header>{page.title}</Header>
        <Navbar logo="" menu={menus.main} path={page.path}/>
        <div className='row'>
            <div className='main-column'>
                <main sx={{ backgroundColor: '#F1F1F1', variant: 'layout.main', }}>
                    <Container>
                        <div sx={{ maxWidth: 768, mx: 'auto', px: 3, }}>
                            {page.modules.map((module, key) => {
                                return getModule(page, module, key)
                            })}
                        </div>
                    </Container>
                </main>
            </div>
            <div className='side-column'>
                <Sidebar menu={menus.main}>Sidebar</Sidebar>
            </div>
        </div>
        <Footer copyright="&copy; 2020 Carmelo. All rights reserved.">
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