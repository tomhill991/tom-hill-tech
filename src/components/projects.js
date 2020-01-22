import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

   toggleCategories() {
    if(this.state.activeTab === 0) {
      return(
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://hackernoon.com/hn-images/1*h8d-4wYLN9wwiEsLAA_5yg.jpeg) center / cover'}}>Hacker News Clone</CardTitle>
          <CardText>
          The frontend has an upvote and downvote functionality and the ability for a user to submit a 'lightning talk'. To create this, I learned React on my own whilst on the Bootcamp (which didn’t cover React). I also created an API using Rails that stores articles on a backend and is called from the frontend.
          </CardText>
          <CardActions border>
            <Button colored>Front-End</Button>
            <Button colored>Back-End</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      )
    } else if (this.state.activeTab === 1) {
      return(
        <div><h1>This is Rails</h1></div>
      )
    } else if (this.state.activeTab === 2) {
      return(
        <div><h1>This is WeChat</h1></div>
      )
    }
   }

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId })} ripple>
        <Tab>React</Tab>
        <Tab>Rails</Tab>
        <Tab>Wechat Mini-Programs</Tab>
        </Tabs>
        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content"> {this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    )
  }
}

export default Projects;
