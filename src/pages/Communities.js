import React from "react";
import {
  IonContent,
  IonPage,
} from "@ionic/react";

import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";

const Communities = () => {
  return (
    <IonPage>
      <SmallHeader title="Communities" />
      <IonContent fullscreen>
        <LargeHeader title="Communities" />
      </IonContent>
      
    </IonPage>
  );
};

export default Communities;