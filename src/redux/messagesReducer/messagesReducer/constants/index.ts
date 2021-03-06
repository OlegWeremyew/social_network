import { MessageType, UserType } from 'redux/messagesReducer/types';

export const usersArray: Array<UserType> = [
  {
    name: 'Oleg',
    id: 1,
    img: 'https://avatars.mds.yandex.net/get-zen_doc/3986249/pub_607ecd1d13c71c1ca8a34192_607ee065330a4f14d551104b/scale_1200',
  },
  {
    name: 'Diana',
    id: 2,
    img: 'https://avatars.mds.yandex.net/i?id=64b380ea3aa0d80cad94cb1a24a3b3f5-4233014-images-thumbs&ref=rim&n=33&w=150&h=150',
  },
  {
    name: 'Fat cat',
    id: 3,
    img: 'https://data.whicdn.com/images/310252363/original.jpg',
  },
  {
    name: 'Dmitriy',
    id: 4,
    img: 'https://i.pinimg.com/originals/b7/44/46/b744464dd3d970ad96745be8de69d755.jpg',
  },
  {
    name: 'Ella',
    id: 5,
    img: 'https://st.depositphotos.com/1023162/5099/i/950/depositphotos_50991807-stock-photo-sexy-woman-in-fashion-sunglasses.jpg',
  },
  {
    name: 'Marat',
    id: 6,
    img: 'https://avatars.mds.yandex.net/i?id=55d09aa1629f72a149098b2c3127e039-5222024-images-thumbs&ref=rim&n=33&w=150&h=150',
  },
];
export const messagesArray: Array<MessageType> = [
  {
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti, eos hic ipsam iusto officiis? Ea magnam quam quasi temporibus!',
    id: 1,
  },
  { message: 'Lorem ipsum dolor sit amet, consectetur adipisicing', id: 2 },
  {
    message:
      'Atque deleniti, eos hic ipsam iusto officiis? Ea magnam quam quasi temporibus!',
    id: 3,
  },
  { message: 'Lorem ipsum dolor sit amet? Ea magnam quam quasi temporibus!', id: 4 },
  {
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus!',
    id: 5,
  },
  { message: 'Consectetur adipisicing elit. Atque deleniti, eos temporibus!', id: 6 },
];
