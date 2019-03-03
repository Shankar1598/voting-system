// 


import React from 'react';


class Test extends React.Component{

  static getInitialProps ({ query: { id } }) {
    return { id };
  }


  render()
  {
    return(
      <div>
      {this.props.id}
    </div>
    )

  }

}

export default Test;