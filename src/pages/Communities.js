import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import ProductList from "../components/Product/ProductList";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";

const Community = (props) => {
  return (
    <IonPage>
      <SmallHeader title="Communities" />
      <IonContent>
        <LargeHeader title="Communities" />
        <ProductList location={props.location} />
      </IonContent>
    </IonPage>
  );
};

export default Community;