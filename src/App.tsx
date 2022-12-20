import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/login/Login';
import ViewMessage from './pages/ViewMessage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Accueil from './pages/Accueil/Accueil';
import Kilometrages from './pages/Kilometrage/Kilometrages';
import Expiration from './pages/Assurance/Expiration';
import ListeVehicule from './pages/Vehicules/ListeVehicule';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        <Route path="/" exact={true}>
          <Redirect to="/home" />
        </Route>

        <Route path="/home" exact={true}>
          <Home />
        </Route>

        <Route path="/login" exact={true}>
          <Login />
        </Route>

        <Route path="/accueil" exact={true}>
          <Accueil />
        </Route>

        <Route path="/kilometrages" exact={true}>
          <Kilometrages />
        </Route>

        <Route path="/expiration" exact={true}>
          <Expiration />
        </Route>
        <Route path="/vehicules" exact={true}>
          <ListeVehicule/>
        </Route>

        <Route path="/message/:id">
           <ViewMessage />
        </Route>
        <Route path="/" exact={true}>
          <Redirect to="/home" />
        </Route>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
