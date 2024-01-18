import React, { Component } from 'react';
import FormUserDetail from './FormUserDetail';
import FormPersonalDetail from './FormPersonalDetail';
import Confirm from './Confirm' 
import Success from './Success';
export class UserForm extends Component {
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        city: "",
        email: "",
        occupation: "", // Fixing the typo
        bio: ""
    }

    // proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // proceed to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle Field change 
    handleChange = (input, e) => {
        this.setState({ [input]: e.target.value });
    }
    render() {
        const { step } = this.state;
        const { firstName, lastName, email, bio, city, occupation } = this.state;
        const values = { firstName, lastName, email, bio, city, occupation }; // This object can be passed to child components

        switch (step) {
            case 1:
                return (
                    <FormUserDetail
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <FormPersonalDetail
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    // Implement the component for the third step (e.g., <ConfirmFormDetails />)
                   <Confirm
                   nextStep={this.nextStep}
                    prevStep={this.prevStep}
                        values={values}
                   />
                );
            case 4:
                return (
                    <Success/>
                );

            default:
                return null; // Handle any additional cases or return null if none match
        }
    }
}

export default UserForm;
