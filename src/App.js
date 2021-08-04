import {User} from './components/User';
import '../src/styles/index.scss';
import Hero from './images/profile.jpg'
const App = () => {
    return (
        <> 
            <div class="hero"> <img src={Hero} alt="hero"/></div> 
            <h1>React is working</h1>
            <User/>
        </>
    )
}

export default App;