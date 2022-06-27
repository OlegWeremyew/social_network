import { ProfileType } from 'redux/profileReducer/types';

export type ProfileInfoPropsType = {
  profile: ProfileType;
  status: string;
  updateUserStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (file: File) => void;
  saveProfile: (formData: ProfileType) => Promise<any>;
};
