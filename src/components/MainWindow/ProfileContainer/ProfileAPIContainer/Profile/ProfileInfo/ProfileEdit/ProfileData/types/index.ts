import { ProfileType } from 'redux/profileReducer/types';

export type ProfileDataPropsType = {
  profile: ProfileType;
  isOwner: boolean;
  goToEditMode?: () => void;
};
