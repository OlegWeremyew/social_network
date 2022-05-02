import {newObjPropsType} from "./types";

export const updateObjectInArray = (items: any[], itemId: string, objPropName: string, newObjProps: newObjPropsType) => {
    return items
        .map(m => {
            if (m[objPropName] === itemId) {
                return {...m, ...newObjProps}
            }
            return m
        })
}