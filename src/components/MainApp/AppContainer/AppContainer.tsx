import {AppStateType} from "../../../redux/types";
import {getInitializedAppSelector} from "../../../selectors";
import {connect} from "react-redux";
import {initializeApp} from "../../../redux/AppReducer";
import {mapDispatchToPropsType, mapStateToPropsType} from "./types";
import {App} from "./App";

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    initialized: getInitializedAppSelector(state)
})

export const AppContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    initializeApp,
})(App)