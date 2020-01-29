import { GET_CUSTOMER, ADD_CUSTOMER, SET_LOADING} from './types';
import { firestore } from './../firebase/firebase.utils';

export const getCustomer =  () => {
    return async (dispatch) => {
       // setLoading();
        const _customer = []
        const  customersRef = firestore.collection('/customer/');
        await customersRef.onSnapshot(snapshot => {
            let changes = snapshot.docChanges();

            changes.forEach(change => {
                
                if (change.type === 'added') {

                    _customer.push(change.doc.data())
                    
                    dispatch({type: ADD_CUSTOMER, payload: change.doc.data()})
                    // setCustomers([..._customer, change.doc.data()]);
                }
 
            })
            // setCustomers(_customer);
            dispatch({type: GET_CUSTOMER, payload: _customer});
        });
    }

}

//Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}


