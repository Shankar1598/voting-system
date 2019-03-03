import React from 'react';
import VotingSystem from '../votingSystem';
import {Button,Icon, Label,Image, Menu, Table } from 'semantic-ui-react';
import web3 from '../web3';
import '../css/vote.css';
import {connect} from "react-redux";
import * as Actions from '../actions/action';

import List from '../components/candidateList';

class Admin extends React.Component{


    static async getInitialProps(){
        const Accounts = await web3.eth.getAccounts();
        // const regCandidate = await VotingSystem.methods.registerCandidates("rama","upka").send({from:Accounts[0],gas:'1000000'})
        const candidatesCount = await VotingSystem.methods.getCandidates().call();
        const num = new Number(candidatesCount);
        //loop through all the candidates count
        console.log(candidatesCount)
        const candidates = await Promise.all(

            Array(parseInt(candidatesCount)).fill().map((element,index)=>{
                 return VotingSystem.methods.candidatesList(index).call();
            })

        );

        console.log(candidates[0]);
        return {candidates,Accounts};
    }
    

   renderCandidates()
   {
       const candidateList = this.props.candidates.map((element,index)=>{
           return <List key={index} Account={this.props.Accounts} role={'admin'} voter_id={this.props.voter_id}  list = {element} index={index}/>
       })

    return candidateList;
   } 


render()
{
    const {voter_id} = this.props;
    return(
        

   <div className='bg'>
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"></link>
        <div id="form" class="form-holder">
        {console.log(this.props.voter_id)}
                <div class="info">
                {this.renderCandidates()}
                </div>
        </div>
</div>

   
    )
}


}

const mapStateToProps = ({ voter_id }) => ({ voter_id });

export default connect(mapStateToProps,Actions)(Admin);