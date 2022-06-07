import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getStreams} from '../../actions';
class ListStream extends React.Component {
    componentDidMount() {
        this.props.getStreams();
    }
    renderList =() =>this.props.formData.map(stream => {
        return (<div className='item' key={stream.id}>
            {stream.userId === this.props.userId ? <div className='right floated content'>
                    <Link to={`/stream/delete/${stream.id}`}><button className='ui red button'>DELETE</button></Link>    
                    <Link to={`/stream/edit/${stream.id}`}><button className='ui yellow button'>EDIT</button></Link>
            </div> : <div></div>}
            <div>
                <div className='content'>
                <Link to={`/stream/${stream.id}`} ><h4>{stream.title}</h4></Link>
            </div>
            <div className='description'>
                <p>{stream.description}</p>
            </div>
            </div>
            
        </div>)
    })
    render(){
        console.log(this.props);
        return(<div >
            <h1>Streams</h1>
            <div className='ui celled list'>{this.renderList()}</div>
        </div>)
    }
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        formData:Object.values(state.streams),
        userId:state.signState.userId
    }
}
export default connect(mapStateToProps,{
    getStreams
})(ListStream);