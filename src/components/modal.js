import React from "react";
import ReactDOM from 'react-dom';
import history from '../history';
const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={() => history.push('/')} className='ui dimmer modals visible active'>
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active" >
            <div className="header" style={{backgroundColor:'pink'}}>{props.title}</div>
            <div className="content" style={{padding:'30px 20px 232px 20px',backgroundColor:'lightblue'}}><p>{props.content}</p></div>
            <div className="actions" style={{backgroundColor:'pink'}}>
                {props.actions()}
                {/* <div className="ui approve button">Approve</div> */}
            </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal;