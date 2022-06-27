export type ProfileStatusPropsType = {
  status: string;
  updateUserStatus: (status: string) => void;
  isOwner: boolean;
};

export type stateProfileStateType = {
  editMode: boolean;
  status: string;
  isOwner: boolean;
};
