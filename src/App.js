import { Counter } from './components/Counter';

function App() {
  return (
    <div>
      <h1>Hello react</h1>
      <Counter initialValue={3} />
      <Counter initialValue={0} />
    </div>
  );
}

export default App;
