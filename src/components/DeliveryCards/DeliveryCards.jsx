// import Divider from '@material-ui/core/Divider';
// import Typography from '@material-ui/core/Typography';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'; 
import Container from '@material-ui/core/Container';
import { FaPhoneVolume, FaUser, FaRegMap, FaUserPlus, FaTrashAlt,FaCartPlus } from 'react-icons/fa';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddCustomerModal from './Modals/AddCustomerModal';
import  { firestore } from './../../firebase/firebase.utils';

import {getCustomer} from './../../actions/customerActions';
 
const useStyles = makeStyles(theme => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      whiteSpace: 'wrap',
      minWidth: '200px',
      minHeight: '150px',
      margin: '3px 3px',
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
  }));





const DeliveryCards =  ({customers: {customers}}) => {
    const classes = useStyles();



    useEffect(() => {
        // getCostomerData()

        getCustomer();

        // eslint-disable-next-line 
    }, [])

    // const getCostomerData = async () => {
        
    //     const _customer = []
    //     const  customersRef = firestore.collection('/customer/');
    //     const snapShot_customers = await customersRef.onSnapshot(snapshot => {
    //         let changes = snapshot.docChanges();

    //         changes.forEach(change => {
    //             // console.log(change)
    //             // console.log(change.doc.data())
    //             // console.log("Current data:", doc.data())
                
    //             if (change.type == 'added') {

    //                 _customer.push(change.doc.data())
                   
    //                 setCustomers([..._customer, change.doc.data()]);
    //             }
                
                
 
    //         })
    //         // console.log(_customer)
    //         setCustomers(_customer);
          
    //     });
     
    //    // return _customer;
         
    // }



    return (
        <div>
            <Container fixed>
            <Grid container spacing={3} style={{marginTop: '12%'}}>
                    <Paper className={classes.paper}>
                        <div >
                            <AddCustomerModal />
                            {/* <FaUserPlus  
                                style={{
                                    listStyle: 'none', 
                                    width: '130px', 
                                    height:'100px',
                                    fontSize: "50px"}}                                    
                            /> */}
                        </div>
                        
                    </Paper>
             {customers.map((customer,index) => (
                    <div key={index}>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <ul style={{listStyle: 'none'}}>
                                <li><FaUser />: {customer.name}</li>
                                <li><FaPhoneVolume /> : {customer.phone}</li>
                                <li><FaRegMap />: {customer.address}</li>
                            </ul>
                          
                            <div style={{marginTop: '1px', display:'flex'}}>
                                <Button variant="contained" ><FaTrashAlt /></Button>
                                <Button variant="contained" color="primary" style={{marginLeft:'5px'}}><FaCartPlus/></Button>
                            </div>
                        </Paper>
                        
                    </Grid>
                    </div>
                ))} 
                
             
                </Grid>
            </Container>
        </div>
    )
}
 
const mapStateToProps = (state) => ({
    customers: state.customers
});

export default connect(mapStateToProps, getCustomer)(DeliveryCards);