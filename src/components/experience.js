import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
         {this.props.endYear ? <p style={{marginBottom: '0px'}}>{this.props.startYear} - {this.props.endYear} </p> : <p style={{marginBottom: '0px'}}>{this.props.startYear}</p>}
        </Cell>
        <Cell col={8}>
          <h4 style={{margin:'0px'}}>{this.props.companyName}</h4>
          <h6 style={{marginTop: '5px'}}>{this.props.jobTitle}</h6>
          <p>{this.props.jobDescription}</p>
          {this.props.achievement1 ? <p>Achievements during this time include:</p> : null}
          <ul>
            {this.props.achievement1 ? <li> {this.props.achievement1} </li> : null}
            {this.props.achievement2 ? <li> {this.props.achievement2} </li> : null}
            {this.props.achievement3 ? <li> {this.props.achievement3} </li> : null}
            {this.props.achievement4 ? <li> {this.props.achievement4} </li> : null}
            {this.props.achievement5 ? <li> {this.props.achievement5} </li> : null}
          </ul>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
