import Tab from './Tab';
import { useState } from 'react';
import { Message, getMessages } from '../../data/messages';
import { getDetailAssurance } from '../../data/assurancevehiculedetail';
import {
  IonContent,
  IonHeader,  
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

const Expiration: React.FC = () => {

  // 4 mande
  let detail1mois = getDetailAssurance(1);
  let detail3mois = getDetailAssurance(3);

  let header ="idavion,numeromatricule,dateutilisation,datedebut,datefin,prix,idtypeassurance,nomassurance";


  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>

        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Inbox
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonTitle>
          <h1>List Detail Assurance</h1>
        </IonTitle>
        <br/>
        <IonTitle >
          Expire dans 1 Mois
        </IonTitle>
        <br />
        <Tab header={header} data={detail1mois}/>
        <br /><br />

        <IonTitle>
          Expire dans 3 Mois
        </IonTitle>
        <br />
        <Tab header={header} data={detail3mois} />
        <br />
      </IonContent>
    </IonPage>
  );
};

export default Expiration;
