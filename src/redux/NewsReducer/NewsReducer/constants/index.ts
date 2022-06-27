import { v1 } from 'uuid';

import { ImagesType, NewsType } from 'redux/NewsReducer/types';

export const imagesArray: ImagesType[] = [
  {
    imageForBackground:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPiDO89QlCqt5rl7UI4XOUCQzYA6HBkMNsbA&usqp=CAU',
  },
  {
    imageForBackground:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxS2hQOJC-Aycw9EdLQp90JL3aibHWVB2FQ&usqp=CAU',
  },
  {
    imageForBackground:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYIKDro5BiB_9ovMAVV9tsnoUXolUwkS63ZQ&usqp=CAU',
  },
  {
    imageForBackground:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROO-MgGXP9Ryb20_YWCA8VUKPIWeEgdbzjxA&usqp=CAU',
  },
  {
    imageForBackground:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7trf0SnVCbXTPBMFbspsf3LDx3RmcpQrNJw&usqp=CAU',
  },
  {
    imageForBackground:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_nbxbH9uzFOkLNcI-LmE5xShJhbx_nV8-g&usqp=CAU',
  },
  {
    imageForBackground:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhPeeqnU_7s16RI8bOLs4giqKOUorM7iiW2g&usqp=CAU',
  },
];
export const newsArray: NewsType[] = [
  {
    id: v1(),
    image:
      'https://s9.travelask.ru/system/images/files/000/336/893/wysiwyg_jpg/makro-fotografiya.jpg?1502197661',
    text:
      'Articles about mushrooms will be useful and interesting for both experienced mushroom pickers' +
      ' and beginners who know only the basics of mushroom gathering. In this section, you will certainly' +
      ' find something that you did not know about before. Picking mushrooms is not just a casual pastime,' +
      ' but a rather serious hobby that will require more and more new, extensive and complete knowledge from you.',
    title: 'Mushrooms',
  },
  {
    id: v1(),
    image:
      'https://funart.pro/uploads/posts/2021-03/1617075044_6-p-oboi-krasota-russkoi-prirodi-7.jpg',
    text:
      'I remember the disdainful attitude of the authorities towards people and their problems,' +
      ' which, due to circumstances, constantly arose. I remember skinny collective farm cows that' +
      ' gave a liter of milk a day, and constantly drunk shepherds. It was impossible to buy something' +
      ' officially, but “for a bottle” you could get a lot: hay, straw, grain, silage, and so on. Something' +
      ' to bring, take, plow, mow turned into a big problem. In general, then life in the village was quite' +
      ' difficult. Half a century has passed. What has changed during this time?',
    title: 'Village',
  },
  {
    id: v1(),
    image: 'https://i.pinimg.com/originals/5a/df/1b/5adf1b97742a65d0a3c98299c545570b.jpg',
    text:
      'Full Moon (lat. Luna plena, plenilunium) is the phase of the Moon, at which the' +
      ' difference between the ecliptic longitudes of the Sun and the Moon is 180 °. This means' +
      ' that the plane through the Sun, Earth and Moon is perpendicular to the plane of the' +
      ' ecliptic. If all three objects are on the same line, a lunar eclipse occurs. The full moon' +
      ' looks like a fully illuminated circle.t',
    title: 'Full moon',
  },
];
