import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import './index.scss';
import List from './components/List';
import CatDetails from './components/CatDetails';
import 'bootstrap/dist/css/bootstrap.css'

const MainComponent = () => {

  return (
      <Fragment>
          <BrowserRouter>
            <nav>
                <div className="container">
                  <div className="logo">
                      <img src={`${process.env.PUBLIC_URL}/simfy_africa_logo.png`} alt="Simfy Africa Logo"/>
                  </div>
                  <ul>
                      <li><Link to="/">Cats List</Link></li>
                  </ul>
                </div>
            </nav>
            <div className="container wrapper">
              <Switch>
                <Route path="/:id/:no" component={CatDetails} />
                <Route to="/" component={List} exact={true}/>
              </Switch>
            </div>
            <footer>
              <p>Copyright &copy; { new Date().getFullYear() }</p>
            </footer>
          </BrowserRouter>
      </Fragment>
  )

}

ReactDOM.render(<MainComponent />, document.querySelector("#root"))
