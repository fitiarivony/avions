import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState,useEffect } from 'react';
import Tableau  from './table';

interface Avion{
  idavion: string;
  numeromatriculation: string,
  dateDebut:string,
  nom:string,
}
const avions:Avion[]=[
  {
   idavion:"VEH2",
   numeromatriculation:"THR33",
   dateDebut:"2022",
   nom:"Boeing"
  },
  {
   idavion:"VEH6",
   numeromatriculation:"THR43",
   dateDebut:"2022",
   nom:"Airbus"
  },
]


const Accueil: React.FC =  () => {
  const[avions,setAvions] =useState<Avion[]>();
  

  const initTableau=()=>{
    console.log("miditra ");
    
    if (avions!==undefined) {
          if (document.getElementById("content")!=null) {
           
            let tableau=new Tableau(avions,document?.getElementById("content"),"table1",["idvehicule","numeromatriculation"]);
            tableau.initialize();
          }
    }else {
      setAvions(avions);
    }
  } 
  useEffect(initTableau); 
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <div id="content" className="container">
      </div>
      
      </IonContent>
    </IonPage>
  );
};
export default Accueil;
