import React from 'react';

import { ReturnComponentType } from '../../../../../../../types/ReturnComponentType';
import style from '../ProfileInfo.module.scss';

import { ProfileData } from './ProfileData';
import { ProfileDataFormReduxForm } from './ProfileDataForm';
import { ProfileEditPropsType } from './types';

export const ProfileEdit: React.FC<ProfileEditPropsType> = ({
  editMode,
  profile,
  onSubmit,
  isOwner,
  setEditModeHandler,
  disableViewMode,
}): ReturnComponentType => (
  <>
    <div className={style.view__btn} onClick={disableViewMode}>
      <button type="button">Hide contacts</button>
    </div>
    {editMode ? (
      <>
        <ProfileDataFormReduxForm
          initialValues={profile}
          profile={profile}
          onSubmit={onSubmit}
        />
      </>
    ) : (
      <ProfileData
        profile={profile}
        isOwner={isOwner}
        goToEditMode={setEditModeHandler}
      />
    )}
  </>
);
