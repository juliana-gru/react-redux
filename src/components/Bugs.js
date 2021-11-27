import React, { useEffect } from 'react';
import { loadBugs }from '../store/bugs';
import { connect } from 'react-redux';

function Bugs(props) {
  useEffect(() => {
    props.loadBugs()
  },[]);

  return ( 
    <ul>{props.bugs.map(bug => 
      <li key={bug.id}>{bug.description}</li>
    )}</ul>
   );
}

//bugs: state.entities.bugs.list
const mapStateToProps = state => ({
  bugs: state.entities.bugs.list
});

const mapDispatchToProps = dispatch => ({
  loadBugs: () => dispatch(loadBugs())
});

//Container component that wraps the Presentation component (Bugs)

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);