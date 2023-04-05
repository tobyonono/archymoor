
import image1 from '../images/000030.JPG';
import image2 from '../images/20200629_221719.jpg';
import image3 from '../images/000068850001.png';
import image4 from '../images/CityEyesCover.png';
import image6 from "../images/Press01.JPG";
import image5 from '../images/cover.png';
import image7 from '../images/Press02.jpg';
import image8 from '../images/Press04.png';
import video1 from '../images/IMG_0538.mp4';
import Jollof from '../images/jollof.jpg';
import Mihalis from '../images/Mihalis.jpg';
import Toni from '../images/Toni-Morrison-Beloved (1).jpg';
import Toni2 from '../images/Toni-Morrison-Early-draft-of-Beloved-2-(2).jpg';
import Sembene from '../images/Sembene.webp';
import atu from '../videos/atu2.mp4';
import dancaesar from '../videos/dancaesar.mp4';
import dance from '../videos/dance.mp4';
import caine from '../videos/caine.mp4';
import durimel from '../videos/durimel.mp4';
import guap from '../videos/Guap.mp4';
import notion from '../videos/Notion.mp4';
import culted from '../videos/Culted.mp4';







const PressImgs = [
  {
    url:
      image1
  },
  {
    url:
      image2
  },
  {
    url:
      image3
  },
  {
    url:
      image4
  },
  {
    url:
      video1,
    type: 'video'

  },
  {
    url: image5
  }

];

const ArchiveImgs = [
  {
    url: image6
  },
  {
    url:
      image7
  },
  {
    url:
      image8
  },
  {
    url:
      video1,
    type: 'video',
    duration:7

  },
  image2
];

const Lyrics = [Jollof, Mihalis, Toni, Toni2, Sembene];
const Videos = [atu, dancaesar,dance, caine, durimel];
const PressVideos= [guap, notion, culted];

export { PressImgs, ArchiveImgs, Lyrics, Videos, PressVideos };