import './center.css'
import shoot from './events';
import Goal from './Goal';

function Center(props){
    
    return (
        
        <div className="hero-section">
            <h1>{props.headline}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit neque amet reprehenderit nihil iure modi libero fugiat cumque veritatis ex molestiae sequi corporis, aspernatur  <br /> facere reiciendis tempora saepe ut! Voluptas, qui adipisci eaque dolor corrupti distinctio? Provident, dolorem praesentium. Culpa delectus perferendis dolores officiis eligendi  <br /> dolore placeat mollitia officia eaque accusantium dignissimos illum, quia ut at autem, et molestiae natus. Nesciunt earum cumque enim ad expedita quos sequi sunt voluptatibus  <br /> explicabo tenetur, consequuntur eius deleniti provident aspernatur ipsa error, corporis sint, facere amet nisi! Ullam esse totam adipisci, quaerat explicabo facilis molestiae nemo <br />  quas quidem, debitis amet odit odio quo.</p>
        <button onClick={()=>shoot('Goal!!!')}>Take the shot!</button>
        <Goal isGoal={0}/>
    </div>
        )


}
export default Center;
