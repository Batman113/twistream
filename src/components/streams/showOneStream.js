import React from 'react';
import {connect} from 'react-redux';
import flv from 'flv.js';
import {getStream} from '../../actions';
class ShowOneStream extends React.Component {
    constructor(props){
        super(props);
        this.videoref = React.createRef();
    }
    componentDidMount() {
        this.props.getStream(this.props.match.params.id);
        // console.log(this.props);
        //set up for fetching the streams
        // this.videoPlayer = flv.createPlayer({
        //     type:'flv',
        //     url:`http://localhost:8000/live/${this.props.match.params.id}.flv`
        // });
        // this.videoPlayer.attachMediaElement(this.videoref.current);
        // this.videoPlayer.load();
        // this.videoPlayer.play();
        this.player();
    }
    componentDidUpdate(){
        this.player();
    }
    componentWillUnmount(){
        this.videoPlayer.destroy();
    }
    player = () => {
        if(this.videoPlayer || !this.props.stream){
            return;
        }
        this.videoPlayer = flv.createPlayer({
            type:'flv',
            url:`http://localhost:8000/live/${this.props.match.params.id}.flv`
        });
        this.videoPlayer.attachMediaElement(this.videoref.current);
        this.videoPlayer.load();
    }
    render(){
        if(this.props.stream===undefined)
        return <div>Loading....</div>;
         const {title,description} = this.props.stream;
        console.log(this.props);
        
        return (<div>
            {/* for showing video content from fly.js */}
            <video ref={this.videoref} style={{width:'100%'}} controls />
            <h1>{title}</h1>
            <h5>{description}</h5>
        </div>)
    }
}
const mapStateToProps = (state,ownProps) => {
    // console.log(state);
    return {
        stream:state.streams[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps,{getStream})(ShowOneStream);