 import React from 'react';
import Mileage from '../../interfaces/Mileage';
import { IonRow, IonCol } from '@ionic/react';
 
type Props={
 data:Mileage;
}

const Kilometrage:React.FC<Props>= ({data}) => {
        return (
            <IonRow className="ion-align-items-baseline ion-no-padding ion-no-margin">
                <IonCol> {data.datekilometrage} </IonCol>
                <IonCol> {data.debutkm}</IonCol>
                <IonCol>{data.finkm}</IonCol>
            </IonRow>
        );
}
export default Kilometrage;