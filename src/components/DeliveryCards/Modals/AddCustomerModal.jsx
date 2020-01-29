import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {FaUserPlus } from 'react-icons/fa';
import { firestore } from './../../../firebase/firebase.utils';


const AddCustomerModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
    };

    const [customer, setCustomer] = useState({
        name:'',
        phone:null,
        address:''
    })

    const createNewCustomer = async () => {

        const customerRef = firestore.collection('/customer/');
        const {name, phone, address} = customer;
        try {
            await customerRef.add({
                name,
                phone,
                address
            })
        } catch(error) {
            console.log('error create new customer', error.message);
        }
        setOpen(false);

  }
    


    return (
        <div>

        <FaUserPlus  
                style={{
                listStyle: 'none', 
                width: '130px', 
                height:'100px',
                fontSize: "50px"}}
                onClick={handleClickOpen}
                                    
        />
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open form dialog
        </Button> */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add New Coustomer</DialogTitle>
          <DialogContent>
            <DialogContentText>

            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              required
              onChange={e => setCustomer({...customer, name: e.target.value})}
            />
            <TextField
              autoFocus
              margin="dense"
              id="phone"
              label="Phone (000 000 0000) "
              type="number"
              fullWidth
              onChange={e => setCustomer({...customer, phone: e.target.value})}

            />
            <TextField
              autoFocus
              margin="dense"
              id="address"
              label="Address"
              type="text"
              fullWidth
              onChange={e => setCustomer({...customer, address: e.target.value})}

            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={createNewCustomer} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
}

export default AddCustomerModal;