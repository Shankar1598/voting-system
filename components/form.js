import React from 'react';
import VotingSystem from '../votingSystem';
import Progress from '../components/progressbar';
import {connect} from "react-redux";
import '../css/index.css';
import * as Actions from '../actions/action'
// import Form from '../components/form';
import {Router,Link} from '../routes';

class Form extends React.Component{
    state={voter_id:''}


onSubmitHandler(e)
{
e.preventDefault();
this.props.addVoterId(this.state.voter_id);
Router.pushRoute('/vote')

}

render()
{
    const { voter_id } = this.props
    return(
       
        <div id="form" className="form-holder">
        
        <Progress/>

        <div className="form-group">
          <div  id="txt"><h3>ENTER VOTER ID</h3></div>
          <input onChange={(e)=>{this.setState({voter_id:e.target.value});console.log(this.state.voter_id)}} value={this.state.voter_id} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Voter_ID"/>
         
        </div>
            <div  id="btn-holder">
            <Link href={{ pathname: '/vote', query: { voter_id: this.state.voter_id }}}><a id="verify"  className="btn btn-primary btn-lg" >VERIFY ID</a></Link> 
                {/* <button onClick={(e)=>{this.onSubmitHandler(e)}}  type="submit" >VERIFY ID</button> */}
               
            </div>   
</div>
    
    )
}


}
const mapStateToProps = ({ voter_id }) => ({ voter_id });

export default connect(mapStateToProps,Actions)(Form);