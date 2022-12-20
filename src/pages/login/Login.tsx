import { IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar,IonLabel,IonText,IonInput,IonButton } from '@ionic/react';
import React, { useState } from 'react';
import Administrator from '../../interfaces/Administrator';


const Data: React.FC = () => {
    let admin:Administrator={
        identifiant:"admin",
        mdp:"admin",
    }
    const [administrator,setAdministrator]=useState<Administrator>(admin);
    
  const handleSubmit=(event:React.FormEvent)=>{
        event.preventDefault();
        login();
   }
   const handleIdChange=(event:any)=>{
        let user:Administrator=administrator;
        user.identifiant=event.target.value;
        setAdministrator(user);
   }
   const handleMdpChange=(event:any)=>{
    let user:Administrator=administrator;
    user.mdp=event.target.value;
    setAdministrator(user);
    }
    const login=()=>{
        
        fetch("https://avion-production-ba83.up.railway.app/admin/login",{method:'POST',headers:{ 'Content-Type': 'application/json'},body: JSON.stringify(administrator)})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
            if (data.status === undefined) {
                 window.location.replace("/home?authorization="+data.data.token);  
            }else{
                alert("erreur");
                console.log("echec");
            }
         })
    }
    return(
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <form id="myForm" method="get" onSubmit={handleSubmit}>
        <IonItem>
              <IonLabel position="stacked">
                Email <IonText color="danger">*</IonText>
              </IonLabel>
              <IonInput
              value="admin"
                required
                type="text"
                onIonChange={handleIdChange}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">
                Mot de passe:<IonText color="danger">*</IonText>
              </IonLabel>
              <IonInput
                required
                value="admin"
                type="text"
                onIonChange={handleMdpChange}
              ></IonInput>
            </IonItem>
            <IonButton
              expand="block"
              type='submit'
              class="ion-no-margin"
            >
              Login
            </IonButton>
        </form>
        </IonContent>
    </IonPage>
    )
}
export default Data;