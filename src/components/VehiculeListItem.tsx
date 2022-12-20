import {
  IonCol,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonNote,
  IonRow
  } from '@ionic/react';
import { Avion } from '../data/vehicules';
import './VehiculeListItem.css';
import { IonButton } from '@ionic/react';

interface VehiculeListItemProps {
  vehicule: Avion;
}
const authentification=new URLSearchParams(window.location.search).get('authorization');
var url="";
if (authentification!==undefined && authentification!==null) {
     url+="&&authorization="+authentification;
}

const VehiculeListItem: React.FC<VehiculeListItemProps> = ({ vehicule }) => {
  return (
    <>
    
    <IonItem routerLink={`/kilometrages?idvehicule=${vehicule.idAvion}${url}`} detail={false}>

        <div slot="start" className="dot dot-unread"></div>

        <IonLabel className="ion-text-wrap">
          <IonGrid fixed={true}>
          
      <IonGrid>
        <IonRow>
          <IonCol>{vehicule.numeroMatricule}</IonCol>
          <IonCol>datedebut</IonCol>
          <IonCol> <IonButton  target=''>Afficher kilometrage</IonButton> </IonCol>
        </IonRow>
      

      </IonGrid>
            <IonRow>
              <IonCol></IonCol>
              <IonCol>{vehicule.dateDebut}</IonCol>
              <IonCol></IonCol>
            </IonRow>
          </IonGrid>
        </IonLabel>
      </IonItem>
      </>

  );
};

export default VehiculeListItem;
