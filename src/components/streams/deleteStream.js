import React from 'react';
import Modal from '../modal';
import history from '../../history';
import {deleteStream} from '../../actions';
import {connect} from 'react-redux';
class DeleteStream extends React.Component {
    onClick = () => {
        console.log(this.props);
        this.props.deleteStream(this.props.match.params.id);
    }
    actions =() => (
        <React.Fragment>
            <button onClick={this.onClick} className="ui red button">DELETE</button>
            <button className="ui green button" onClick={() => history.push('/')}>CANCEL</button>
        </React.Fragment>
    )
    render(){
        return(<div>Delete Stream
            <Modal 
                title="Delete Stream"
                content="Do you want to delete the stream?"
                actions={this.actions}
            />
        </div>)
    }
}
export default connect(null,{
    deleteStream
})(DeleteStream);