import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Translator,
  T,
  TF,
  LanguageList,
  Config
} from "react-translator-component";

import "./styles.css";

Config.default = "en";

Config.list = {
  de: {
    text: "Deutsch",
    icon: "./flags/de.svg",
    file: require("./locale/de.js")
  },
  en: {
    text: "English",
    icon: "./flags/en.svg",
    file: require("./locale/en")
  },
  es: {
    text: "Español",
    icon: "./flags/es.svg",
    file: require("./locale/es")
  },
  fr: {
    text: "Français",
    icon: "./flags/fr.svg",
    file: require("./locale/fr")
  },
  it: {
    text: "Italiano",
    icon: "./flags/it.svg",
    file: require("./locale/it")
  },
  ru: {
    text: "Pусский",
    icon: "./flags/ru.svg",
    file: require("./locale/ru")
  },
  tr: {
    text: "Türkçe",
    icon: "./flags/tr.svg",
    file: require("./locale/tr")
  }
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      language: Config.default
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h6>
              {T("Doğrular ve yanlışlar yoktur, sadece yorumlar vardır.")}
            </h6>
            <h6>
              <small>
                <i>{TF("{0} {1}", "Friedrich", "Nietzsche")}</i>
              </small>
            </h6>
          </div>
          <table className="language-lists">
            <thead>
              <tr>
                <td>Default Language List</td>
                <td>Custom Language List</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>Dropdown Theme</p>
                  <LanguageList Theme="Dropdown" />
                  <br />
                  <br />
                  <p>Default Theme</p>
                  <LanguageList />
                </td>
                <td>
                  <LanguageList Language={this.state.language} />
                  <select
                    className="custom-language-list"
                    value={this.state.language}
                    onChange={e => this.setState({ language: e.target.value })}
                  >
                    {Object.keys(Config.list).map(key => (
                      <option key={key} value={key}>
                        {Config.list[key].text}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="author">
            <a
              href="https://github.com/barisates"
              target="_blank"
              rel="noopener noreferrer"
            >
              barisates
            </a>{" "}
            <a
              href="https://github.com/eneszeren"
              target="_blank"
              rel="noopener noreferrer"
            >
              eneszeren
            </a>
          </div>
        </header>
      </div>
    );
  }
}

function TranslatorApp() {
  return (
    <Translator>
      <App />
    </Translator>
  );
}
export default TranslatorApp;