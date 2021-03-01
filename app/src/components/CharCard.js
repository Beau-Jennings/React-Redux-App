import React, { useEffect } from "react";
import { connect } from "react-redux";

import {getChars} from "../actions/CharActions";

const Chars = (props) => {
    const { char, isFetching, error } = props;
    console.log("this is char", char)
    
    const handleClick = (props) => {
        props.getChars();
    }

    useEffect(()=> {
        props.getChars();
    }, []);

    if(error) {
        return<h2>Sorry... We are experiencing technical difficulties with our scanner at the moment</h2>
    }

    if (isFetching) {
        return <h2>Scanning alternate dimensions...</h2>
    }
    
    return (
        <>
        <button onClick={handleClick}>Characters</button>
        <h2>Name: </h2>
        <p>Status: </p>
        <p>Species: </p>
        <p>Gender: </p>
        <p>Origin:</p>
        <p>Location: </p>
        </>
    );
};

const mapStateToProps = state => {
    console.log("This is state", state)
    return {
        character: state.character,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getChars} )(Chars);