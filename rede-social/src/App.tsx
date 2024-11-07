import { ConnectionProvider } from './hooks';
import { Router } from './routes';

function App() {
  return (
   <ConnectionProvider>
    <Router />
   </ConnectionProvider>
  )
}

export default App
