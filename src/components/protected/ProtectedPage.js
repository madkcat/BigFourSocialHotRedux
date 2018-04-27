import React from 'react';
import { Link } from 'react-router';
import checkAuth from '../requireAuth';
import './App.css';
import './CoreApp';
// import { UIPad } from './components/uipad';
// import { UIPad } from './components/uipad.js';

const ProtectedPage = () => {
  return (
    <div className='app'>
      <header>
        <div className='container'>
          <section className='add-score'>
            {(this.state.teamselect === false) ?
              <div className='teamselect'>
                <button className='twoteam' onClick={this.twoteam}>2-team Quiz</button>
                <button className='threeteam' onClick={this.threeteam}>3-team Quiz</button>
              </div>
              :
              <div />}
            {(this.state.quiztype === false) ?
              <div className='quiztype'>
                <button className='AACS' onClick={this.AACS}>AACS Rules</button>
                <button className='Spectacular' onClick={this.Spectacular}>Spectacular Rules</button>
                <button className='training' onClick={this.training}>Training Mode</button>
              </div>
              :
              <div>hidden</div>}
            <form onSubmit={this.handleSubmit}>
              <div className="quizzerpad-radio-div">
                {(this.state.redout === true) ?
                  <label className="switch">
                    <div className="quizzerpad-radio">
                      <input type="radio" disabled className="teamcolor redpads" id="redpad" value="red" />
                      <span className="teampads slider round redpads" for="redpad">ERROR</span>
                    </div>
                  </label>
                  :
                  <label className="switch">
                    <div className="quizzerpad-radio">
                      <input type="radio" className="teamcolor redpads" id="redpad" value="red" checked={this.state.teamcolor === 'red'} onChange={this.handletcOptionChange} />
                      <span className="teampads slider round redpads" for="redpad"></span>
                    </div>
                  </label>
                }
                {(this.state.yellowout === true || this.state.twoteam === true) ?
                  <label className="switch">
                    <div className="quizzerpad-radio">
                      <input type="radio" disabled className="teamcolor yellowpads" id="yellowpad" value="yellow" />
                      <span className="teampads slider round yellowpads" for="yellowpad">ERROR</span>
                    </div>
                  </label>
                  :
                  <label className="switch">
                    <div className="quizzerpad-radio">
                      <input type="radio" className="teamcolor yellowpads" id="yellowpad" value="yellow" checked={this.state.teamcolor === 'yellow'} onChange={this.handletcOptionChange} />
                      <span className="teampads slider round yellowpads" for="yellowpad"></span>
                    </div>
                  </label>
                }
                {(this.state.greenout === true) ?
                  <label className="switch">
                    <div className="quizzerpad-radio">
                      <input type="radio" disabled className="teamcolor greenpads" id="greenpad" value="green" />
                      <span className="teampads slider round greenpads" for="greenpad">ERROR</span>
                    </div>
                  </label>
                  :
                  <label className="switch">
                    <div className="quizzerpad-radio">
                      <input type="radio" className="teamcolor greenpads" id="greenpad" value="green" checked={this.state.teamcolor === 'green'} onChange={this.handletcOptionChange} />
                      <span className="teampads slider round greenpads" for="greenpad"></span>
                    </div>
                  </label>
                }
              </div>
              <div className="quizzerpadnum-radio-div">
                <label className="switch">
                  <div className="quizzerpadnum-radio">
                    <input type="radio" className="padnum" id="pad1" value="1" checked={this.state.padnum === '1'} onChange={this.handlenumOptionChange} />
                    <span className="slider round seatnum" for="pad1">1</span>
                  </div>
                </label>
                <label className="switch">
                  <div className="quizzerpadnum-radio">
                    <input type="radio" className="padnum" id="pad2" value="2" checked={this.state.padnum === '2'} onChange={this.handlenumOptionChange} />
                    <span className="slider round seatnum" for="pad2">2</span>
                  </div>
                </label>
                <label className="switch">
                  <div className="quizzerpadnum-radio">
                    <input type="radio" className="padnum" id="pad3" value="3" checked={this.state.padnum === '3'} onChange={this.handlenumOptionChange} />
                    <span className="slider round seatnum" for="pad3">3</span>
                  </div>
                </label>
                <label className="switch">
                  <div className="quizzerpadnum-radio">
                    <input type="radio" className="padnum" id="pad4" value="4" checked={this.state.padnum === '4'} onChange={this.handlenumOptionChange} />
                    <span className="slider round seatnum" for="pad4">4</span>
                  </div>
                </label>
                <label className="switch">
                  <div className="quizzerpadnum-radio">
                    <input type="radio" className="padnum" id="pad5" value="5" checked={this.state.padnum === '5'} onChange={this.handlenumOptionChange} />
                    <span className="slider round seatnum" for="pad5" >5</span>
                  </div>
                </label>
              </div>

              {(this.state.teamcolor && this.state.padnum !== null) ?
                <div className='submitclass'>
                  <button className='correctbutton' onClick={this.correctguess}>Correct</button>
                  <button className='incorrectbutton' onClick={this.incorrectguess}>Incorrect</button>
                </div>
                :
                <button className='passbutton' onClick={this.pass}>PASS</button>
              }
            </form>
          </section>
        </div>
      </header>
      <section className='scoreboard'>
        <h2> Question # {this.state.qnumber}</h2>
        <div>
          <h4 className='scoreboard sbl'>RED TEAM: {(this.state.outsetredscore)}  - FOULS: {(this.state.redfoulscore)} = {(this.state.redscore)}<br />
            Errors: {this.state.rederror}   <button className="foulbutton button" onClick={this.redfoul}>Foul</button>: <button className="foulbutton button" onClick={this.redunfoul}>{this.state.redfouls}</button></h4>
        </div>
        <div>
          <h4 className='scoreboard sbl'>YELLOW TEAM: {this.state.outsetyellowscore}  - FOULS: {(this.state.yellowfoulscore)} = {(this.state.yellowscore)}<br />
            Errors: {this.state.yellowerror}   <button className="foulbutton button" onClick={this.yellowfoul}>Foul</button>: <button className="foulbutton button" onClick={this.yellowunfoul}>{this.state.yellowfouls}</button></h4>
        </div>
        <div>
          <h4 className='scoreboard sbl'>GREEN TEAM: {this.state.outsetgreenscore}  - FOULS: {(this.state.greenfoulscore)} = {(this.state.greenscore)}<br />
            Errors: {this.state.greenerror}   <button className="foulbutton button" onClick={this.greenfoul}>Foul</button>: <button className="foulbutton button" onClick={this.greenunfoul}>{this.state.greenfouls}</button></h4>
        </div>
      </section>
      <section className='display-score'>
        <div className="wrapper">
          <ul>
            {this.state.scorecard.map((score) => {
              if (score.user === this.state.user.displayName || score.user === this.state.user.email) {
                return (
                  <li className='smallcard' key={score.id}>
                    {score.jresult === true ?
                      <h3 style={{ color: 'darkgreen', 'font-weight': 'bold' }}>{score.title} {score.user === this.state.user.displayName || score.user === this.state.user.email ?
                        <button className='xelement' onClick={() => this.removeItem(score.id)}>X</button> : null}</h3>
                      :
                      <h3 style={{ color: 'red', 'font-weight': 'bold' }}>{score.title} {score.user === this.state.user.displayName || score.user === this.state.user.email ?
                        <button className='xelement' onClick={() => this.removeItem(score.id)}>X</button> : null}</h3>}
                    <h4 style={{ backgroundColor: score.teamcolor }}>{score.quizzerpad}</h4>
                    <h4>{score.jumptype}</h4>
                  </li>
                )
              }

            })}
          </ul>
        </div>
      </section>
    </div>
  );
  // <Link to="/" activeClassName="active">Home</Link>    

};

export default checkAuth(ProtectedPage);