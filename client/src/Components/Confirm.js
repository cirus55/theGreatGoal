import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import API from '../utils'

export class FormUserDetails extends Component {

    currSty(num) {
        return (new Intl.NumberFormat('en-GB').format(num))
    }

    percSty(num) {
        return Number(num/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
    }

    continue = e =>{
        e.preventDefault();
        API.sendData(this.props.values)
        .then(data => this.props.updateCalc(data))
        this.props.nextStep()
    }

    back = e =>{
        e.preventDefault();
        this.props.prevStep()
    }
    
    render() {
        const {values: { firstName, lastName, email, 
            age, retire, expected, 
            income, tax, expense,
            savings } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="One last check before sendind the data!!!" />
                    <List>
                        <ListItem 
                            primaryText="First Name"
                            secondaryText={firstName}
                        />
                        <ListItem 
                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                        <ListItem 
                            primaryText="email"
                            secondaryText={email}
                        />
                        <ListItem 
                            primaryText="Age"
                            secondaryText={age}
                        />
                        <ListItem 
                            primaryText="Desired Age to Retire"
                            secondaryText={retire}
                        />
                        <ListItem 
                            primaryText="Life Expectancy"
                            secondaryText={expected}
                        />
                        <ListItem 
                            primaryText="Monthly Income"
                            secondaryText={this.currSty(income)}
                        />
                        <ListItem 
                            primaryText="Tax"
                            secondaryText={this.percSty(tax)}
                        />
                        <ListItem 
                            primaryText="Monthly Expense"
                            secondaryText={this.currSty(expense)}
                        />
                        <ListItem 
                            primaryText="Savings"
                            secondaryText={this.currSty(savings)}
                        />
                    </List>
                    <br/>
                    <RaisedButton
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails
