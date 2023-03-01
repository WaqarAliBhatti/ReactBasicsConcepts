
function Goal(props){
    const isGoal=props.isGoal;
    return(
    <>
    { 
        isGoal?<MadeGoal/>:<MissedGoal/>
    }
    </>
    )
    
}

function MissedGoal(){
    return(
        <h1>Missed Goal</h1>
    )
}
function MadeGoal(){
    return(
        <h1>Goal!!</h1>
    )
}
export default Goal;