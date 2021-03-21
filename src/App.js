import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import WelcomeScreen from './screens/WelcomeScreen';
import AppRouter from './routes/AppRouter';
function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
