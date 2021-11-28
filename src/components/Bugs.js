import React, { useEffect } from 'react';
import { loadBugs, resolveBug, getUnresolvedBugs }from '../store/bugs';
import { connect } from 'react-redux';

function Bugs(props) {
  useEffect(() => {
    props.loadBugs()
  },[]);

  return ( 
    <ul>{props.bugs.map(bug => 
      <li key={bug.id}>{bug.description}
        <button onClick={() => props.resolveBug(bug.id)}> Resolve </button>
      </li>      
    )}</ul>
   );
}

//bugs: state.entities.bugs.list
const mapStateToProps = state => ({
  bugs: getUnresolvedBugs(state),
});

const mapDispatchToProps = dispatch => ({
  loadBugs: () => dispatch(loadBugs()),
  resolveBug: id => dispatch(resolveBug(id))
});

//Container component that wraps the Presentation component (Bugs)

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);