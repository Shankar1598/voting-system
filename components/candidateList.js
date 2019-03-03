import React from 'react';
import VotingSystem from '../votingSystem';
import {Button,Form, Label,Image, Menu, Table,Message } from 'semantic-ui-react';
import web3 from '../web3';
// import '../css/vote.css';
import {Grid,Row,Col} from 'react-bootstrap';
import {Router} from '../routes';
import {connect} from "react-redux";
import * as Actions from '../actions/action';

class Candidatelist extends React.Component{

state={loader:false,role:this.props.role,error:""}


async onClickVoteHandler(e,candidate_index)
{


this.setState({loader:true});
try{
    await VotingSystem.methods.voteForCandidate(this.props.voter_id,candidate_index).send({from:this.props.Account[0],gas:'1000000'});
}
catch(err)
{
this.setState({error:err.message})
}
if(!!this.state.error)
{
    this.setState({loader:false});
}else{
   
    Router.pushRoute('/')

}


}

errorStyle()
{
    if(!!this.state.style)
    {
        return {opacity:0}
    }
    else
    {
        return {opacity:1}
    }
}


render()
{
   if(this.state.role=='admin')
   {
return(
      
<div className="row">
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
/>
   <div className="col-4">
       <strong>{this.props.list.candidate_name}  </strong>
   </div>
   <div className="col-4"><img width="15%" src="http://pngimg.com/uploads/apple_logo/apple_logo_PNG19682.png" alt=""/></div>
   <div className="col-4 vote-btn-holder">
   
   <h3>{this.props.list.noOfVotes}</h3>
    
   </div>
</div>
)
   }
   else
   {
       return(
      
<div className="row">
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
/>
   <div className="col-4">
       <strong>{this.props.list.candidate_name}  </strong>
   </div>
   <div className="col-4"><img width="15%" src="http://pngimg.com/uploads/apple_logo/apple_logo_PNG19682.png" alt=""/></div>
   <div  className="col-4 vote-btn-holder">
   <Form  error={!!this.state.error}  style={{padding:'4px'}} >
   <Message style={this.errorStyle()} error  header='something went wrong' content= {this.state.error}/>
   </Form>
   
   <Button loading={this.state.loader} onClick={(e)=>this.onClickVoteHandler(e,this.props.index)}   style={{color:'white'}} >Vote</Button>
    
   </div>
</div>

       )
   }
  
}


}

// const mapStateToProps = ({ voter_id }) => ({ voter_id });


export default connect(null,null)(Candidatelist);