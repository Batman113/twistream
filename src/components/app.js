//client id = 
/*Browser Router*/
import React from 'react';
import {Router, Route, Link, Switch} from 'react-router-dom';
// import NewStream from './streams/newStream';
import ShowStream from './streams/showStream';
import NewStream from './streams/newStream';
import DeleteStream from './streams/deleteStream';
import EditStream from './streams/editStream';
import ListStream from './streams/listStream';
import Header from './Header/header';
import history from '../history';
import ShowOneStream from './streams/showOneStream';
class App extends React.Component{
    render(){
        return (<div>
            {/* <h1>h1> */}
            <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                    <Route path="/stream/edit/:id" exact component={EditStream} />
                    <Route path="/stream/delete/:id" exact component={DeleteStream} />
                    <Route path="/stream/new" exact component={NewStream} />
                    <Route path="/" exact component={ListStream} />
                    <Route path="/stream/show"  component={ShowStream} />
                    <Route path="/stream/:id/" component={ShowOneStream} />
                    </Switch>
                </div>
            </Router>
        </div>)
    }
}

export default App;

/*Hash Router*/
/*Memory*/
// import React from 'react';
// import {HashRouter, Route, Link} from 'react-router-dom';
// const POne = () => {
//     return (<div>hell page 1 <Link to='/p2'>Click for 2</Link></div>);
// };
// const PTwo = () => {
//     return (<div>p 2<Link to='/'>Click for 1</Link></div>);
// };
// class App extends React.Component{
//     render(){
//         return (<div>
//             <HashRouter>
//                 <div>
//                     <Route path="/" exact component={POne} />
//                     <Route path="/p2" component={PTwo} />
//                 </div>
//             </HashRouter>
//         </div>)
//     }
// }

// export default App;