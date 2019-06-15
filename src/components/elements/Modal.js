import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { active, handelClose } = this.props;
    return (
      <Container className={`modal ${active && 'is-active'}`}>
        <div className="modal-background has-background-white" />
        <div className="modal-content">
          <div className="box">
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Email" />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success">Login</button>
              </p>
            </div>
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => handelClose()}
        ></button>
      </Container>
    );
  }
}

export default Modal;
