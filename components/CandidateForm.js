import React from 'react';
import VotingSystem from '../votingSystem';
import Progress from '../components/progressbar';
import {connect} from "react-redux";
import web3 from '../web3';
import '../css/index.css';
import * as Actions from '../actions/action';
// import Form from '../components/form';
import Accounts from '../accounts';
import {Router} from '../routes';

class Form extends React.Component{
    state={candidate_name:'',candidate_party:'',accounts:''}

async componentDidMount()
{

}

async onSubmitHandler(e)
{
e.preventDefault();

const accounts = await web3.eth.getAccounts();
this.setState({accounts:accounts})
 await VotingSystem.methods.registerCandidates(this.state.candidate_name,this.state.candidate_party).send({from:accounts[0],gas:'1000000'})
console.log(accounts)
Router.pushRoute('/');

}

render()
{
    const { voter_id,AccountInfo } = this.props
    return(
       
        <div id="form" className="form-holder">
    {console.log(AccountInfo)}    
        {/* <Progress/> */}

        <div className="form-group">
          <div  id="txt"><h3>ENTER CANDIDATE NAME</h3></div>
          <input onChange={(e)=>{this.setState({candidate_name:e.target.value});console.log(this.state.candidate_name)}} value={this.state.candidate_name} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Candidate Name"/>
          
         
        </div>
        <div className="form-group">
          <div  id="txt"><h3>ENTER CANDIDATE PARTY</h3></div>
          <input onChange={(e)=>{this.setState({candidate_party:e.target.value});console.log(this.state.candidate_party)}} value={this.state.candidate_party} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Candidate Party"/>
          
         
        </div>
            <div  id="btn-holder">
                <button onClick={(e)=>{this.onSubmitHandler(e)}}  type="submit" id="verify"  className="btn btn-primary btn-lg">REGISTER</button>

            </div>   
</div>
    
    )
}


}
const mapStateToProps = ({ voter_id,Accounts }) => ({ voter_id,Accounts });

export default connect(mapStateToProps,Actions)(Form);