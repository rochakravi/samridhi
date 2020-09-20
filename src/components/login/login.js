import React, { Component } from 'react'
import { connect } from "react-redux";

export class login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }
    login = () => {
        let item = {
            isAuth: true,
            user: [{
                "id": 1,
                "name": 'Achal'
            }]
        }
        debugger;
        this.props.login(item);
        if (this.props.user) {
            alert("Successfully : " + this.props.user);
        }
        else {
            {
                alert("Error : " + this.props.user);
            }
        }
    };
    render() {
        return (
            <div>
                <input type="button" value="Login" onClick={this.login}></input>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { user: state.user.isAuth };
};
const mapDispatchtoProps = (dispatch) => {
    return {
        login: (item) =>
            dispatch({
                type: "LOGIN", payload: item
            }),
    };
}
export default connect(mapStateToProps, mapDispatchtoProps)(login)
