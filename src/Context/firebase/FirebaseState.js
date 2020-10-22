import React, {useReducer} from "react";
import axios from 'axios'
import {FirebaseContext} from "./FirebaseContext";
import {firebaseReducer} from "./firebaseReducer";
import {SHOW_LOADER} from "../types";

const url = 'https://todo-react-app-4f730.firebaseio.com'

export const FirebaseState = ({children}) => {
    const initialState = {
        notes: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER})

    return (
        <FirebaseContext.Provider valuse={{

        }}>
            {children}
        </FirebaseContext.Provider>
    )
}