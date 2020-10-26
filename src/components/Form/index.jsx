import React from "react";
import "./style.scss"

const Form = () => {
  return (
    <div className="form">
      <div className="columns is-mobile">
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="field">
            <label className="label">Nom</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Votre nom"
              ></input>
            </div>
          </div>

          <div className="field">
            <label className="label">Prénom</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Votre prénom"
              ></input>
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Votre adresse mail"
              ></input>
            </div>
          </div>

          <div className="field">
            <label className="label">Sujet</label>
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
            <label className="label">Message</label>
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
                Oui
              </label>
              <label className="radio">
                <input type="radio" name="question"></input>
                Non
              </label>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Envoyer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
