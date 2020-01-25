import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={5} tablet={12} phone={12}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/supportmale-2-512.png"
                alt="avatar"
                style={{height: '200px', borderRadius: '5px', paddingTop: '40px', }}
                 />
            </div>

            <h2>Tom Hill</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Shanghai, China</p>
            <h5>Phone</h5>
            <p>+86 1861 404 5076</p>
            <h5>Email</h5>
            <p>tom.hill991@gmail.com</p>
            <h5>Website</h5>
            <p>tomhill.tech</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" tablet={9} phone={12} col={7}>
            <h2 style={{paddingLeft: '12px'}}>Education</h2>


            <Education
              startYear={2019}
              endYear={2019}
              schoolName="Le Wagon 9-Week Fullstack Bootcamp Batch #333"
              schoolDescription="
              9-week intensive coding bootcamp learning HTML, CSS, Bootstrap, JavaScript ES2015, SQL, git, GitHub, Heroku and Ruby on Rails. Designed, implemented and shipped to production a clone of AirBnB and a Rails prototype of a WeChat mini-program called Rent a Jedi. I was the lead-developer for my group project, Plantopia - a WeChat mini-program to help users to maintain their house plants."
               />

               <Education
                 startYear={2009}
                 endYear={2013}
                 schoolName="Keele University"
                 grade="Grade: 2;1"
                 schoolDescription="BA Business Management and HR."
               />
                <Education
                 startYear={2017}
                 schoolName="Cambridge University"
                 schoolDescription="CELTA"
                 grade="Grade: Pass A (Top 5%)"
               />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2 style={{paddingLeft: '12px'}}>Experience</h2>
            <Experience
              startYear={2019}
              companyName="Plantopia"
              jobTitle="Lead Developer - Le Wagon (Project Weeks)"
              jobDescription="Plantopia is a WeChat mini-program. Its main functionality is to scan any plant and retrieve information on it (such as watering schedule, soil preferences etc.) through an API so users can better maintain their plant. Another function is that the plant sends reminders to the user on watering frequency and a conversation happens between the plant and the user in a chatroom. I conceptualised the chatroom functionality and created it. I also created the API for the users own plants using Rails."
            />

             <Experience
              startYear={2019}
              companyName="Hacker News Clone"
              jobTitle="Fullstack - React & Rails"
              jobDescription="The frontend has an upvote and downvote functionality and the ability for a user to submit a news piece. To create this, I learned React on my own whilst on the Bootcamp (which didn’t cover React). I also created an API using Rails that stores articles on a backend and is called from the frontend."
            />

            <Experience
              startYear={2016}
              endYear={2019}
              companyName="Language Link"
              jobTitle="Director of Business Development, HR Director, Head of Recruitment"
              jobDescription="I drove the sales and marketing for the rebirth of Language Link’s flagship school in Beijing. I also recruited all foreign teachers and management. Duties included: sourcing new revenue streams negotiating with customers and stakeholders, screening candidates, coordinating with internal and external stakeholders, posting job advertisements, negotiating with candidates and internal stakeholders, inducting and onboarding new staff, drafting contracts, and advising on, and dealing with, employee relations issues."
              achievement1="sourced new revenue streams such as; partnerships for a summer camp, investors for rebirth of school, partnerships with local businesses."
              achievement2="recruited 75% more students for relaunch of school."
              achievement3="collaborated with upper-management team to successfully relaunch flagship school."
              achievement4="created a detailed on boarding system for new candidates. This included: a visa process checklist, templates and documentation for visa officers to obtain a new hire’s visa; interview protocols and templates, job descriptions, job advert and contract templates, and pay scales for teachers."
              achievement5="recruited a full teaching and upper-management team."
              />

              <Experience
                startYear={2014}
                endYear={2015}
                companyName="Thomson Reuters"
                jobTitle="HR Administrator, HR Assistant"
                jobDescription="I worked in the HR department of Thomson Reuters UK & Ireland. Duties included: assisting and advising managers in employee relations disputes, onboarding new employees (from offer to induction), drafting and amending contracts, updating and amending employee information in Workday (the HR management system), coordinating with HR teams across time zones and in other divisions, answering and resolving queries on benefits and contractual obligations."
                achievement1="discussed and implemented broad HR policy changes across the UK & Ireland divisions, which had approximately 5000 employees. This involved extensive collaboration with internal stakeholders."
                achievement2="being offered a permanent contract, following an initial 3-month FTC."
                />

              <Experience
                startYear={2013}
                companyName="Argo International"
                jobTitle="HR Administrative Assistant - FTC"
                jobDescription="I assisted Argo International in upgrading their HR Management system."
                achievement1="successfully migrated all employee information (over 300 employees) from the legacy HR system to the newer system."
                achievement2="Argo extended my FTC."
                />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2 style={{paddingLeft: '12px'}}>Skills</h2>

              <Skills
                skill="Javascript"
                progress={100}
                />
              <Skills
                skill="Rails"
                progress={100}
              />
              <Skills
                skill="HTML/CSS"
                progress={80}
              />
              <Skills
                skill="React"
                progress={75}
              />
              <Skills
                skill="NodeJS"
                progress={20}
              />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
