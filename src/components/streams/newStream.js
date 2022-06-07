import React from 'react';
// import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './streamFor';
class NewStream extends React.Component {
    onSubmit = (formValues) => {
        // event.preventDefault();
        console.log(formValues);
        this.props.createStream(formValues);
        // validate(value);
        // console.log(values);
    }
    
    render(){
        return(
        <div>
            <StreamForm onSubmit={this.onSubmit}/>
        </div>)
    }
}



export default connect(null,{
    createStream
})(NewStream);