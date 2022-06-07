import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import ListItem from './listStream';
class ShowStream extends React.Component {
    renderCreate = () => {
        if(this.props.isSigned){
            return <Link to='/stream/new'><button className='ui blue button'>CREATE STREAM</button></Link>
        }else{
            return null;
        }
    }
    render(){
        return(
        <div>
            <ListItem/>
            <br />
            {this.renderCreate()}
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        isSigned:state.signState.isSignedIn
    }
}
export default connect(mapStateToProps)( ShowStream);