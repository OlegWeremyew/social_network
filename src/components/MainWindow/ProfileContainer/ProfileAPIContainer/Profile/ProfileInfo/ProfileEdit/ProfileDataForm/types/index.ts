import { ProfileType } from 'redux/profileReducer/types';

export type ProfileDataFormPropsType = {
  profile: ProfileType;
  goToEditMode?: () => void;
};
