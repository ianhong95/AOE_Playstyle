import logo from './logo.svg';
import './App.css';

// Find bootstrap template details on https://bootswatch.com/cyborg/

function App() {
  return (
    <div class="jumbotron">
      <h1 class="display-3">Tinder but for your AOE2 civilization!</h1>
      <p class="lead">This is a matchmaking tool to find the civilization that best suits your playstyle! Answer a series of questions to determine your recommended civlization.</p>
      <hr class="my-4"></hr>
      <p>Click the button below to begin.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Begin!</a>
      </p>
    </div>
  );
}

export default App;
