

import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonToolbar,
  
} from '@ionic/react';


import './ViewVehicule.css';

function ViewVehicule() {
 


 

  return (
    <IonPage id="view-vehicule-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Liste Vehicule" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      </IonPage>
  );
}

export default ViewVehicule;
