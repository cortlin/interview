import { Counter } from './components/Counter';
import { Rating } from './components/Rating';
import { RandomUser } from './components/RandomUser';

function App() {
  return (
    <div>
      <h1>Hello react</h1>
      <Counter initialValue={3} />
      <Counter initialValue={0} />
      <Rating numOfRatings={5} />
      <RandomUser />


    </div>
  );
}

export default App;
