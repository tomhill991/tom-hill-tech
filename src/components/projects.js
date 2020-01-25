import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

   toggleCategories() {
    // tab 0, 1, 2 points to the indexes
    if(this.state.activeTab === 0) {
      return(
        // React projects
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://hackernoon.com/hn-images/1*h8d-4wYLN9wwiEsLAA_5yg.jpeg) center / cover'}}>Hacker News Clone</CardTitle>
          <CardText>
          The frontend has an upvote and downvote functionality and the ability for a user to submit a 'lightning talk'. To create this, I learned React on my own whilst on the Bootcamp (which didn’t cover React). I also created an API using Rails that stores articles on a backend and is called from the frontend.
          </CardText>
          <CardActions style={{height: '50px'}}border>
            <a class="projects-button" href="https://github.com/tomhill991/test-fullstack" rel="noopener noreferrer" target="_blank">
              Front-End
            </a>
            <a class="projects-button" href="https://github.com/tomhill991/lightning-talk-backend" rel="noopener noreferrer" target="_blank">
              Back-End
            </a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      )
    } else if (this.state.activeTab === 1) {
      return(
        // Rails projects
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '200px', background: 'url(https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/ruby-rails-512.png) center / cover'}}>Algarve Property Company</CardTitle>
          <CardText>
          Creating a website using Rails, ES6, Sass & HTML to display properties from a backend with a form to generate leads.
          </CardText>
          <CardActions style={{height: '50px'}}border>
            <a class="projects-button" href="https://github.com/tomhill991/algarve-property-company" rel="noopener noreferrer" target="_blank">
              Rails Code
            </a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      )
    } else if (this.state.activeTab === 2) {
      return(
        // WeChat mini-program projects
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4lkJB8WynSnV_1UduXHylbBspW5DS0B-tWklTrT3lw5LPkO62&s) center / cover', opacity: '0.7'}}>Plantopia</CardTitle>
          <CardText>
          Plantopia is a WeChat mini-program. Its main functionality is to scan any plant and retrieve information on it (such as watering schedule, soil preferences etc.) through an API so users can better maintain their plant. Another function is that the plant sends reminders to the user on watering frequency and a conversation happens between the plant and the user in a chatroom. I conceptualised the chatroom functionality and created it. I also created the API for the users own plants using Rails.

          </CardText>
          <CardActions style={{height: '50px'}}border>
            <a class="projects-button" href="https://github.com/kaki-xue/plantopia-frontend" rel="noopener noreferrer" target="_blank">
              Front-End
            </a>
            <a class="projects-button" href="https://github.com/tomhill991/lightning-talk-backend" rel="noopener noreferrer" target="_blank">
              Back-End
            </a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      )
    }
   }

  render() {
    return(
      <div className="category-tabs">
        {/* tabId = where the user clicks on the first, second or third tab (onChange)*/}
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId })} ripple>
        <Tab>React</Tab>
        <Tab>Rails</Tab>
        <Tab>Wechat Mini-Programs</Tab>
        </Tabs>
        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              {/* categories are displayed based on the toggleCategories above. If statements mean categories are rendered based on what the user clicks on (onChange above sets this by changing the tabId) */}
              <div className="content"> {this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    )
  }
}

export default Projects;
