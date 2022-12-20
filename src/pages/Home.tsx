import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  IonItem,
  useIonViewWillEnter,
  IonNote,
  IonNavLink
} from '@ionic/react';
import './Home.css';
import { IonLabel, IonButton } from '@ionic/react';
import Expiration from './Assurance/Expiration';

const Home: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };
  
  const authentification=new URLSearchParams(window.location.search).get('authorization');    
        var url="";
        if (authentification!==undefined && authentification!==null) {
            url+="?authorization="+authentification;
        }
        const showlogin=()=>{
          
          if (authentification===undefined || authentification===null) {
            return(
              <IonItem >
              <div slot="start" className="dot dot-unread"></div>
              <IonLabel  className="ion-text-wrap" >
                <IonButton href='/login'>Connexion</IonButton>
              </IonLabel>
            </IonItem>
            )
          }
        }
  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Accueil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Accueil
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
    <IonItem >
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel  className="ion-text-wrap" >
        <IonButton href={'/vehicules'+url}>Liste Avion</IonButton>
      </IonLabel>
    </IonItem>

    <IonItem >
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel  className="ion-text-wrap" >
        <IonButton href='/expiration'>Liste Expiration</IonButton>
      </IonLabel>
    </IonItem>
  
    {showlogin()}


        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
