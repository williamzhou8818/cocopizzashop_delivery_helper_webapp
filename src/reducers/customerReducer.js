import {GET_CUSTOMER, ADD_CUSTOMER, SET_LOADING } from '../actions/types';

const  initialState = {
     name: '',
     phone: null,
     address: '',
     loading: false,
     customers: []
}

export default (state = initialState, action) => { 
    switch(action.type) {
        case GET_CUSTOMER: 
          console.log('From customerreduce', action.payload) 
          //console.log('init State', initialState)
          return {
              ...state,
              customers: action.payload
          }
          
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            }
        default: return state
    }
}