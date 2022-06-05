export type mapStateToPropsType = {
    initialized: boolean
}

export type mapDispatchToPropsType = {
    initializeApp: () => void
}

export type AppContainerType = mapStateToPropsType & mapDispatchToPropsType