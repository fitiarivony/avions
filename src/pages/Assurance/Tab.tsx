import {
    IonList,
    IonCol,
    IonRow,
    IonGrid
} from '@ionic/react';


interface TabPropos {
    header : string;
    data :any[][] ;
}

const Tab: React.FC<TabPropos> = ({ header,data }) => {
    let dataheader = header.split(",");
    return (
        <IonGrid>
        <IonRow className="ion-align-items-baseline ion-no-padding ion-no-margin" >
            {dataheader.map((head: string) =>
                <IonCol><b>{head}</b></IonCol>
            )}
        </IonRow>
        {
            data.map((item: any) =>
                <IonRow className="ion-align-items-baseline ion-no-padding ion-no-margin" >
                    {dataheader.map((head: string) =>
                        <IonCol>{item[head]}</IonCol>
                    )}
                </IonRow>
            )
        }
        </IonGrid>
        
    );
};

export default Tab;
