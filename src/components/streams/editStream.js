import React from 'react';
// import {Field,reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {getStream,updateStream } from '../../actions';
import StreamForm from './streamFor';
class EditStream extends React.Component {
    onSubmit = (values) => {
        this.props.updateStream(this.props.match.params.id, values);
    }
    // renderInput = (formProps) => {
    //     // console.log(formProps.meta);
    //     // const er = formProps.meta.touched === true ? 'error' :'';
    //     return (<div>
    //         <input {...formProps.input} autoComplete='off' />
    //         {/* {this.onError(formProps.meta)} */}
    //     </div>)
    // }
    componentDidMount = () => {
        this.props.getStream(this.props.match.params.id);
    }
    render(){
        const {props} = this;
        console.log(props); 
        // console.log(props.stream.title);
        if(props.stream === undefined){
            return <div></div>
        }
        return(<div>
            <h1>Edit the Stream</h1>
            <StreamForm onSubmit={this.onSubmit} initialValues={{title:props.stream.title,description:props.stream.description}}/>
        </div>)
    }
}
const mapStateToProps = (state,ownProps) => {
    return {
        stream:state.streams[ownProps.match.params.id]
    }
}
// const editFile = reduxForm({
//     form:'editStream'
// })(EditStream);
export default connect(mapStateToProps,{updateStream, getStream})(EditStream);