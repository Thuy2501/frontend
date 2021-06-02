// import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import Headers from './components/header/Headers'
import Footers from './components/footer/Footers'
import Main from './components/main/Main'
import { Layout } from 'antd'
import Account from './components/account/accounts/Account'

const { Header, Content, Footer } = Layout

function App() {
  return (
    <Router>
      {/* <Switch>
        <Route path={'/accounts/'} component={Accounts} />
        
        <Route path={'/'} component={FrontEnd} />
      </Switch> */}
      <Layout className="mainLayout">
        <Header>
          <Headers />
        </Header>
        <Content style={{ backgroundColor: '#fff', top: '70px' }}>
          {/* <Main /> */ }
          <Account/>
        </Content>
        <Footer>
          <Footers />
        </Footer>
      </Layout>
    </Router>
  )
}

export default App
