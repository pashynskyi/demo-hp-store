import React from "react";
import styles from "./MenTShirts.module.css";
import PortalList from "../PortalList/PortalList";
import PortalMenTypes from "../MenHome/PortalMenTypes/PortalMenTypes";
import MenTShirtProduct from "./MenTShirtProduct/MenTShirtProduct";
import { Container, Row, Col} from 'react-bootstrap';


const MenTSirts = (props) => {
    let state = props.products;
    let productElements = state.map((p) => (
        <Col xs="12" sm="6" md="4" lg="3" xl="3" key={p.id}>
        <MenTShirtProduct
            id={p.id}
            photoUrl={p.photoUrl}
            price={p.price}
            firm={p.firm}
            type={p.type}
            material={p.material}
            sizes={p.sizes}
        /></Col>
    ));
    return (
        <section>
            <PortalList />
            <PortalMenTypes />
            <Container>
                <Row>
                   {productElements}
                </Row>
            </Container>
        </section>
    );
}

export default MenTSirts;
