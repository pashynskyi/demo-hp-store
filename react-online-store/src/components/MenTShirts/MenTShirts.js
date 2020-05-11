import React from "react";
import styles from "./MenTShirts.module.css";
import PortalList from "../MenHome/PortalList/PortalList";
import PortalMenTypes from "../MenHome/PortalMenTypes/PortalMenTypes";
import MenTShirtProduct from "./MenTShirtProduct/MenTShirtProduct";

const MenTSirts = (props) => {
    let state = props.products;
    let productElements = state.map((p) => (
        <MenTShirtProduct 
        key={p.id}
        id={p.id}
        photoUrl={p.photoUrl}
        price={p.price}
        firm={p.firm}
        type={p.type}
        material={p.material}
        sizes={p.sizes}
        />
    ));
    return (
        <section>
            <PortalList />
            <PortalMenTypes />
            {productElements}
        </section>
    );
}

export default MenTSirts;
