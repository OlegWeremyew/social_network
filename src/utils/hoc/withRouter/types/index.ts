import { Nullable } from 'types/Nullable';

export type locationType = {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: Nullable<object>;
};

export type WrappedComponentWithRouterPropsType = {
  userId: string;
  location: locationType;
};

export type InjectedProps = {
  userId: string;
};
