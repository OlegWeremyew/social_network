import { ProfileActions } from './profileActions';
import { profileReducer } from './profileReducer';
import { PostType, ProfileType } from './types';

import { EMPTY_STRING, THIRD_ELEMENT_IN_ARRAY } from 'constants/variables';

const initialState = {
  posts: [
    { message: 'Hello', likesCount: 12, id: 1 },
    { message: 'Dinosaurs are great', likesCount: 17, id: 2 },
  ] as Array<PostType>,
  profile: null as ProfileType,
  status: EMPTY_STRING,
};

test('length message should been increment', () => {
  const postMessage: string = 'new post';
  const newState = profileReducer(initialState, ProfileActions.addPost(postMessage));
  const length: number = 3;

  expect(newState.posts.length === length).toBe(true);
});

test('title message should be correct', () => {
  const postMessage: string = 'new post';
  const newState = profileReducer(initialState, ProfileActions.addPost(postMessage));

  expect(newState.posts[THIRD_ELEMENT_IN_ARRAY].message).toBe(postMessage);
});

test('after delete length should be decrement', () => {
  const postNumber: number = 2;
  const newState = profileReducer(initialState, ProfileActions.deletePost(postNumber));
  const length: number = 1;

  expect(newState.posts.length === length).toBe(true);
});

test('after delete length should not be decrement', () => {
  const postNumber: number = 4;
  const newState = profileReducer(initialState, ProfileActions.deletePost(postNumber));
  const length: number = 1;

  expect(newState.posts.length === length).toBe(false);
});
