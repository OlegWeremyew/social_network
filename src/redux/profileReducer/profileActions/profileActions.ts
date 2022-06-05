import { ProfileReducerEnum } from '../constants';
import { PhotosType, ProfileType } from '../types';

export const ProfileActions = {
  addPost: (newPostText: string) =>
    ({ type: ProfileReducerEnum.ADD_POST, payload: { newPostText } } as const),
  deletePost: (postId: number) =>
    ({ type: ProfileReducerEnum.DELETED_POST, payload: { postId } } as const),
  setUserProfile: (profile: ProfileType) =>
    ({ type: ProfileReducerEnum.SET_USER_PROFILE, payload: { profile } } as const),
  setStatus: (status: string) =>
    ({ type: ProfileReducerEnum.SET_STATUS, payload: { status } } as const),
  savePhotoSuccess: (photos: PhotosType) =>
    ({ type: ProfileReducerEnum.SAVE_PHOTO, payload: { photos } } as const),
};
