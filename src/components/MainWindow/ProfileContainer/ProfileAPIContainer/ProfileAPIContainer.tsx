import React from "react";
import {ProfileContainerPropsType} from "../types";
import {Nullable} from "../../../../types/Nullable";
import {Profile} from "./Profile";

export class ProfileAPIContainer extends React.Component<ProfileContainerPropsType> {

    refreshProfile() {
        let userId: Nullable<string> = this.props.userId
        if (!userId) {
            userId = this.props.authorizedUserID;
            if (!userId) {
                //@ts-ignore
                this.props.history.push(PATH.LOGIN)
            }
        }

        if (!userId) {
            throw new Error("ID should be exists")
        } else {
            this.props.getUserProfile(userId)
            this.props.getUserStatus(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.userId !== prevProps.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <Profile
                {...this.props}
                isOwner={!this.props.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
                savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile}
            />
        )
    }
}