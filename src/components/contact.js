import React, { Component } from 'react';
import { Grid, Cell, List, ListItemContent, ListItem} from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
         {/* half page in one cell*/}
          <Cell col={6} phone={12} tablet={12}>
        {/* my bio*/}
          <h2>Tom Hill</h2>
          <img
            src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/supportmale-2-512.png"
            alt="avatar"
            className="contact-avatar"
          />
          <p className="contact-text">
          I recently completed the Le Wagon fullstack 9-week coding bootcamp. I learnt HTML, CSS, Bootstrap, JavaScript ES2015, SQL, git, GitHub, Heroku and Ruby on Rails. Designed, implemented and shipped to production a clone of AirBnB and a Rails prototype of a WeChat mini-program called Rent a Jedi. My GitHub profile is <a href="https://github.com/tomhill991">here</a>
          </p>
          </Cell>
          {/* half page in one cell*/}
          <Cell col={6} phone={12} tablet={12}>
          <h2>Contact Me</h2>
          <hr/>
          {/* contact list with number etc.*/}
          <div className="contact-list">
            <List>
              <ListItem className="contact-list-item">
                <ListItemContent className="contact-list-content">
                <i className="fa fa-phone-square" aria-hidden="true"/>+86 1861 4045076
                </ListItemContent>
              </ListItem>

              <ListItem className="contact-list-item">
                <ListItemContent className="contact-list-content">
                <i className="fa fa-envelope" aria-hidden="true"/>tom.hill991@gmail.com
                </ListItemContent>
              </ListItem>

              <ListItem className="contact-list-item">
                <ListItemContent className="contact-list-content">
                <i className="fa fa-skype" aria-hidden="true"/>thomas.hill27
                </ListItemContent>
              </ListItem>

            </List>
          </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
