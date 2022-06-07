import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from '../GoogleAuth';
class Header extends React.Component {
    render(){
        return(<div className='ui inverted segment'>
            <div className='ui inverted secondary menu'>
            <Link className='active item' to='/'>Twistream</Link>
            <div className='right menu'>
            <Link className='item' to='/stream/show'>Streams</Link>
            <GoogleAuth /> 
            </div>            
        </div>
        </div>)
    }
}
export default Header;