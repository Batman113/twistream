import React from 'react';
import {Field, reduxForm} from 'redux-form';
// import {connect} from 'react-redux';
// import {createStream} from '../../actions';
class StreamForm extends React.Component {
    onSubmit = (formValues) => {
        // event.preventDefault();
        console.log(formValues);
        this.props.onSubmit(formValues);
        // validate(value);
        // console.log(values);
    }
    onError({error, touched}){
        if(touched && error){
            return (<div className='ui error message'>
                <div className='header'>{error}</div>
            </div>);
        }
        else{
            return <div></div>;
        }
    }
    renderInput = (formProps) => {
        // console.log(formProps.meta);
        // const er = formProps.meta.touched === true ? 'error' :'';
        return (<div>
            <input {...formProps.input} autoComplete='off' />
            {this.onError(formProps.meta)}
        </div>)
    }
    render(){
        
        return(
        <div>
            <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className='field'>
                    <h1>Title</h1>
                    <Field name='title' component={this.renderInput} />
                </div>
                <div className='field'>
                    <h1>Description</h1>
                    <Field name='description' component={this.renderInput} />                    
                </div>
                <button type='submit' className='ui button'>Submit</button>
            </form>
        </div>)
    }
}

const validate = (formValues) => {
    // console.log('go');
    const errors = {};
    if(!formValues.title){
        errors.title = 'Entering title is must';
    }
    if(!formValues.description){
        errors.description = 'Entering description is must';
    }
    return errors;
}
export default reduxForm({
    form:'streamForm',
    validate
})(StreamForm);

