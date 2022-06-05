import { EMPTY_STRING } from '../../../constants';
import { Nullable } from '../../../types/Nullable';
import { ProfileReducerEnum } from '../constants';
import {
  ActionProfileTypes,
  initialStateProfileType,
  PostType,
  ProfileType,
} from '../types';

export const initialProfileState = {
  posts: [
    {
      message: 'Hi all. My name is Oleg and. I am a front-end developer',
      likesCount: 12,
      id: 1,
    },
    { message: 'Dinosaurs are great. I love them so much', likesCount: 17, id: 2 },
  ] as Array<PostType>,
  profile: null as Nullable<ProfileType>,
  status: EMPTY_STRING,
};

export const profileReducer = (
  state = initialProfileState,
  action: ActionProfileTypes,
): initialStateProfileType => {
  switch (action.type) {
    case ProfileReducerEnum.ADD_POST: {
      const newPost: PostType = {
        id: new Date().getTime(),
        message: action.payload.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [newPost, ...state.posts],
      };
    }
    case ProfileReducerEnum.DELETED_POST: {
      return {
        ...state,
        posts: state.posts.filter(f => f.id !== action.payload.postId),
      };
    }
    case ProfileReducerEnum.SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.payload.profile,
      };
    }
    case ProfileReducerEnum.SET_STATUS: {
      return {
        ...state,
        status: action.payload.status,
      };
    }
    case ProfileReducerEnum.SAVE_PHOTO: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.payload.photos } as ProfileType,
      };
    }
    default:
      return state;
  }
};
