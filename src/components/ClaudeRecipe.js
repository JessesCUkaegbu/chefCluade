import ReactMakedown from 'react-markdown'



function Clauderecipe(props) {
    return (
    <main>
   <section className='suggested-recipe-container'>
    <h2>Chef Claude Recommends:</h2>
       <ReactMakedown>{props.recipe}</ReactMakedown>
    </section>
    </main>
    );
}


export default Clauderecipe;