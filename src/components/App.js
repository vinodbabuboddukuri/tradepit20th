import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from "react-router-dom";
import { firebaseAuth } from "./auth";

import LandingPage from "./LandingPage/landingPage";
import Dashboard from "./Dashboard/Dashboard";
import Register from "./Login&Register/Register";
import Login from "./Login&Register/Login";
import stockPage from "./SymbolPage/stockPage";
import portfolio from "./Portfolio/portfolio";
import page404 from "./404";
import Admin from "./admin";
import Loader from "./Elements/Loader";
import converter from "./ConverterPage/converter";
import Learn from "./LearnPage/learn"
//import Dashboard2 from "./tradingview/Dashboard";
import Gpt from "./gpt/gptdo"
import Newtrade from "./tradingview/newtrading"
//import Quiz from "./QuizPage/quiz"

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/Dashboard" />
        )
      }
    />
  );
}

class App extends Component {
  _isMounted = false;
  state = {
    authed: false,
    loading: true,
    theme: "",

    quiz: [
      {
        question: "How tall are you?",
        options: ["a1", "b1", "c1", "d1"],
        answer: "1"
      },{
        question: "How fast are you?",
        options: ["a2", "b2", "c2", "d2"],
        answer: "1"
      },{
        question: "How heavy are you?",
        options: ["a3", "b3", "c3", "d3"],
        answer: "1"
      },{
        question: "How heavy are you?",
        options: ["a3", "b3", "c3", "d3"],
        answer: "1"
      },{
        question: "How heavy are you?",
        options: ["a3", "b3", "c3", "d3"],
        answer: "1"
      },{
        question: "How heavy are you?",
        options: ["a3", "b3", "c3", "d3"],
        answer: "1"
      },{
        question: "How heavy are you?",
        options: ["a3", "b3", "c3", "d3"],
        answer: "1"
      }
    ]




  };

  componentDidMount() {
    this._isMounted = true;

    let theme = localStorage.getItem("theme");
    if (
      window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ] !== ""
    ) {
      if (theme !== null) {
        this.setState({
          theme
        });
      } else {
        this.setState({
          theme: "dark"
        });
      }
    }

    this.removeListener = firebaseAuth().onAuthStateChanged(user => {
      if (this._isMounted) {
        if (user) {
          this.setState({
            authed: true,
            loading: false
          });
        } else {
          this.setState({
            authed: false,
            loading: false
          });
        }
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
    this.removeListener();
  }

  render() {
    if (this.state.theme === "light") {
      localStorage.setItem("theme", "light");
      document.getElementById("root").classList.add("light");
    }
    if (this.state.theme === "dark") {
      localStorage.setItem("theme", "dark");
      document.getElementById("root").classList.remove("light");
    }
    return this.state.loading ? (
      <div className="loader-background">
        <Loader />
      </div>
    ) : (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <PublicRoute
              authed={this.state.authed}
              path="/register"
              component={Register}
            />
            <PublicRoute
              authed={this.state.authed}
              path="/login"
              component={Login}
            />
            <PrivateRoute
              authed={this.state.authed}
              path="/dashboard"
              component={Dashboard}
            />
            <PrivateRoute
              authed={this.state.authed}
              path="/portfolio"
              component={portfolio}
            />
              <PrivateRoute
              authed={this.state.authed}
              path="/converter"
              component={converter}
            />
            <PrivateRoute
              authed={this.state.authed}
              path="/learn"
              component={Learn}
            />

              {/* <PrivateRoute
              authed={this.state.authed}
              path="/quiz"
              component={<Quiz quiz={this.state.quiz}/>}
            /> */}
              <PrivateRoute
              authed={this.state.authed}
              path="/tview"
              component={Newtrade}
            />
             <PrivateRoute
              authed={this.state.authed}
              path="/gpt"
              component={Gpt}
            />

            <PrivateRoute
              authed={this.state.authed}
              path="/admin"
              component={Admin}
            />
            <PrivateRoute
              name="stocks"
              authed={this.state.authed}
              path="/stocks/:symbol"
              component={stockPage}
              symbol={window.location.pathname.split("/")[2]}
            />
            <Route component={page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
