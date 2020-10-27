import React from "react";
import "./style.scss";
import { FormattedMessage } from 'react-intl';

const Form = () => {
  return (
    <div className="form">
      <div className="columns is-mobile">
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="field">
            <label className="label">  <FormattedMessage id="contact.lastname" /></label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Votre nom"
              ></input>
            </div>
          </div>

          <div className="field">
            <label className="label"><FormattedMessage id="contact.firstname" /></label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Votre prénom"
              ></input>
            </div>
          </div>

          <div className="field">
            <label className="label"><FormattedMessage id="contact.mail" /></label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Votre adresse mail"
              ></input>
            </div>
          </div>

          <div className="field">
            <label className="label"><FormattedMessage id="contact.subject" /></label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Selectionnez un sujet</option>
                  <option>BOUHHHH</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label"><FormattedMessage id="contact.message" /></label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Votre message"
              ></textarea>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox"></input>
                J'accepte les <a href="#">conditions d'utilisations</a>
              </label>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="radio">
                <input type="radio" name="question"></input>
                <FormattedMessage id="contact.yes" />
              </label>
              <label className="radio">
                <input type="radio" name="question"></input>
                <FormattedMessage id="contact.no" />
              </label>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link"><FormattedMessage id="contact.button" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
