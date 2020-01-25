import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
        <Cell col={12}>
          <img
          src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/supportmale-2-512.png"
          alt="avatar"
          className="avatar-img"
          />

          <div className="banner-text">
            <h1>Full Stack Web Developer</h1>
            <hr/>
            <p>Rails | React | HTML/CSS | Bootstrap | JavaScript | ES6 | SQL | Ruby | NodeJS</p>
            <div className="social-links">
              {/* GitHub */}
              <a href="https://github.com/tomhill991" rel="noopener noreferrer" target="_blank">
                <i class="fa fa-github" aria-hidden="true"/>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/tomhill991" rel="noopener noreferrer" target="_blank">
                <i class="fa fa-linkedin" aria-hidden="true"/>
              </a>

              {/* Freecode Camp */}
              <a href="https://www.freecodecamp.org/thill991" rel="noopener noreferrer" target="_blank">
                <i class="fa fa-free-code-camp" aria-hidden="true"/>
              </a>

               {/* Stack Overflow */}
              <a href="https://stackexchange.com/users/17397207/hillybob991" rel="noopener noreferrer" target="_blank">
                <i class="fa fa-stack-overflow" aria-hidden="true"/>
              </a>

            </div>
          </div>
        </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
