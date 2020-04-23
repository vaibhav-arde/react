console.log(`Runnong from componentState.js`);
 
class Counter extends React.Component {
    constructor(props){
        super(props);
        this.addCount = this.addCount.bind(this);
        this.minusCount = this.minusCount.bind(this);
        this.logReset = this.logReset.bind(this);
        this.state ={
            headerName:'React Components State',
            count: props.count
        }
    }
    addCount(){
        this.setState((prevState) => {
            return{
                count : prevState.count + 1
            }
        });
        console.log(`Method called is : addCount`);
    }
    
    minusCount(){
        this.setState((prevState)=>{
            return{
                count: prevState.count -1
            }
        });
        console.log(`Method called is : minusCount`);
    }
    
    logReset(){
        this.setState(()=>{
            return{
                count: 0
            }
        })
        // console.log(`Method called is : logReset`);
        // this.setState({
        //     count:0
        // });
        // this.setState({
        //     count:this.state.count + 1
        // });
    }
    render() {
        return (
            <div>
                <h1>{this.state.headerName}</h1>
                <h2>Current Count is : {this.state.count}</h2>
                <button onClick={this.addCount}>Add Count</button>
                <button onClick={this.minusCount}>Minus Count</button>
                <button onClick={this.logReset}>Reset</button>
            </div>
        )
    }
}

Counter.defaultProps={
    count: 0
}

ReactDOM.render(<Counter count={7}/>, document.getElementById('app'));

// ========================================

// let myId  = 'test'
// let count = 0

// let addCount = () => {
//     count++;
//     console.log('addCount', count);
//     renderCounterApp();
// }

// let minusCount = () => {
//     count--;
//     console.log('minusCount', count);
//     renderCounterApp();
// }

// let logReset = () => {
//     count = 0;
//     console.log(`reset`, count);
//     renderCounterApp();
// }



// const appRoot = document.getElementById('app');


// const renderCounterApp = () =>{
//     const template = (
//         <div>
//             <h1>Events and Attributes</h1>
//             <h2>Count before reset is : {count}</h2>
//             <button id = {myId} className = 'btnOne' onClick = {addCount}>Add Count</button>
//             <button onClick = {minusCount}>Minus Count</button>
//             <button onClick = {logReset}>Reset</button>
//         </div>
//     );
    
//     ReactDOM.render(template, appRoot);
// }

// renderCounterApp();

// ==================================================

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this)
        this.state= {
            hName : 'Visibility Toggle',
            tState : true
        }
    }

    toggleVisibility(){
        this.setState((prevState)=>{
            return{
                tState: !prevState.tState
            }
        });
    }

    render(){
        return(
            <div>
            <h1>{this.state.hName}</h1>
            <button onClick={this.toggleVisibility}>
                {this.state.tState ? `Hide Details` : `Show Details`}
            </button>
            {this.state.tState && (
                <div>
                <p>Here are some details for toggle</p>
                </div>
            )}
        </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app1'));

// ==================================================

// const toggleVisibility = () => {
//     btnState = !btnState;
//     renderApp();
// }

// const buttonLogic = () => {
//     if (btnState == true) {
//         return <div><button onClick={toggleVisibility}>Hide Details</button> <p>Here is some more info</p></div>;
//     } else {
//         return <button onClick={toggleVisibility}>Show Details</button>;
//     };

// }


// let renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             {buttonLogic()}

//             <h1>Visibility Toggle 2</h1>
//             <button onClick={toggleVisibility}>
//                 {btnState ? `Hide Details 2` : `Show Details 2`}
//             </button>
//             {btnState && (
//                 <div>
//                 <p>Here are some details for sencond toggle</p>
//                 </div>
//             )}
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// }

// const appRoot = document.getElementById('app');
// renderApp();