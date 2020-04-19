console.log(`Runnong from componentState.js`);
 
class Counter extends React.Component {
    constructor(props){
        super(props);
        this.addCount = this.addCount.bind(this);
        this.minusCount = this.minusCount.bind(this);
        this.logReset = this.logReset.bind(this);
        this.state ={
            headerName:'React Components State',
            count: 0
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

ReactDOM.render(<Counter />, document.getElementById('app'));


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