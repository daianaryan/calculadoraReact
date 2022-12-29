import './App.css'

import Main from './componentes/Main'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import { UserProvider } from './aplicacion/UserProvider';

/* Mi app la cual contiene el provider que manejara la logica 
y 3 componentes que contendran el front*/

function App() {
  return (
    <UserProvider>
      <div id="fondo">
        <header>
          <Header/>
        </header>
        <main>
          <Main/>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </UserProvider>

  );
}

export default App;
