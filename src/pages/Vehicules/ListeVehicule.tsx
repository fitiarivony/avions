import MessageListItem from '../../components/VehiculeListItem';
import { useState } from 'react';
import { Avion, getVehicules } from '../../data/vehicules';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import '../Home.css';

const ListeVehicule: React.FC = () => {

  const [vehicule, setVehicule] = useState<Avion[]>([]);

  useIonViewWillEnter(() => {
    
    const vehic = getVehicules();
    setVehicule(vehic);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle> Liste Avion</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
             Avion
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {vehicule.map(v => <MessageListItem key={v.idAvion} vehicule={v} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ListeVehicule;
