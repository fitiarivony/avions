import * as React from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import  { useState,useEffect } from 'react';
import Kilometrage from './Kilometrage';
import Mileage from '../../interfaces/Mileage';
import Vehicle_details from '../../interfaces/Vehicule_detail';


const Kilometrages: React.FC =  () => {
    const[kilos,setkilometrage] =useState<Mileage[]>();
    const[vehicule,setvehicule] =useState<Vehicle_details>();
    useEffect(()=>{
        if(kilos===undefined){
            listKilometrage();
        }
    }); 
    
    const Base64ToImage=(base64img:string|undefined, callback:any)=>{
        var img = new Image();
        img.onload = function () {
            callback(img);
        };
        if(base64img===undefined){
            base64img="";
        }
        img.src = base64img;
    }
    Base64ToImage(vehicule?.photo, function (img:any) {
        let docmain:HTMLElement|null=document.getElementById('main');
        docmain?.appendChild(img);
        var log = "w=" + img.width + " h=" + img.height;
        (document.getElementById('log') as HTMLInputElement).value=log;
    });

    const listKilometrage=()=>{
        let idvoiture:string|null=new URLSearchParams(window.location.search)?.get("idvehicule");
        
        let authentification:string|null=new URLSearchParams(window.location.search).get('authorization');    
        if (authentification===undefined || authentification===null) {
            authentification='token';
            
        }
        
        fetch("https://avion-production-ba83.up.railway.app/avions/"+idvoiture+"/kilometrage",{method:'GET',headers:{
            'authorization': authentification,
        }})
        .then(res=>{return res.json() ; })
        .then(data=>{   
            if (data.status === undefined) {
                setvehicule(data.data[0]);
                setkilometrage(data.data[1]);
                // console.log(data.data[1]);
                
            }else{
               if(data.status === "230") {
                window.location.href="/login";
               }
            }
         })
    }
    const setImage = (_event: any) => {
        let f = _event.target.files![0];
        // console.log(f)
        let reader = new FileReader();
        
        reader.onloadend =function (){
            // (document as any).write('REsult',reader.result);
            login(reader.result);
        }
        reader.readAsDataURL(f);
    }
    const openFileDialog = () => {
        (document as any).getElementById("file-upload").click();
    };
    const login=(administrator:string|null|ArrayBuffer)=>{
        let idvoiture:string|null=new URLSearchParams(window.location.search)?.get("idvehicule");
        fetch("https://avion-production-ba83.up.railway.app/avions/"+idvoiture+"/photo",{method:'PUT',headers:{ 'Content-Type': 'application/json'},body: administrator})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
                console.log(data);
                
            if (data.status === undefined) {
                let authentification:string|null=new URLSearchParams(window.location.search).get('authorization'); 
                window.location.href=("/home?authorization="+authentification);  
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
          <IonTitle>Kilometrages</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <div id="details vehicule">
        <p><strong>Matricule avion:{vehicule?.numeroMatricule}</strong></p>
        <p><strong>Marque avion:{vehicule?.nom}</strong></p>
        <div id="main"></div>
                <textarea id="log"></textarea>    
        <div>
        <input
                    type="file"
                    id="file-upload"
                    style={{ display: "none" }}
                    onChange={setImage}
                />

                <IonButton onClick={openFileDialog}>Changer photo
                    <IonIcon slot="icon-only"></IonIcon>
                </IonButton>


        </div>
    </div>
    <IonGrid>
        <IonRow className="ion-align-items-baseline ion-no-padding ion-no-margin">
            <IonCol> <b>date</b></IonCol>
            <IonCol><b>debutkm</b> </IonCol>
            <IonCol><b>finkm</b> </IonCol>
        </IonRow>
        
        {kilos?.map(kilometrage=>
            <Kilometrage key={kilometrage.idkilometrage} data={kilometrage}  />
        )}
       
    </IonGrid>
      
      </IonContent>
    </IonPage>


    );

   
}
export default Kilometrages;