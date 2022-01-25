import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";

type HeaderContainerType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    isAuth: boolean
    login: string
}
type mapDispatchToPropsType = {
    setAuthUserData: (id: string, email: string, login: string) => void
}

class HeaderContainer extends React.Component<HeaderContainerType, HeaderContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )

    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.data.login,
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
