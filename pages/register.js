import React from 'react';
import * as Actions from '../actions/action';
import '../css/index.css';
import {connect} from "react-redux";
import CandidateForm from '../components/CandidateForm';

import {addVoterId} from '../store';

class Register extends React.Component{

 

  static async getInitialProps()
  {
   
    // component will be able to read from store's state when rendered
    return {custom: 'custom'};
  }

 

render()
{
  const { voter_id } = this.props
    return(
      <div className='bg'>     
     <CandidateForm/>
     {console.log(voter_id)}
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"/>
      </div>
    )
}

}

const mapStateToProps = ({ voter_id }) => ({ voter_id });



export default connect(mapStateToProps,Actions)(Register);