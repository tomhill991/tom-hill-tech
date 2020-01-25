import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
        {/* render start year and end year if end year == true */}
          {this.props.endYear ? <p style={{marginBottom: '0px'}}>{this.props.startYear} - {this.props.endYear} </p> : <p style={{marginBottom: '0px'}}>{this.props.startYear}</p>}
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
          <p>{this.props.schoolDescription}</p>
          <p>{this.props.grade}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
