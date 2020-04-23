console.log(`Running from Indecision-App/src/playGround/statelessFunctionalComponents.js`)
const User = (props)=>{
    return (
        <div>
        <p>Name : {props.name}</p>
        <p>Age : {props.age}</p>
        </div>
    )
}

ReactDOM.render(<User name ='VaibhaV' age='33'/>, document.getElementById('app'))