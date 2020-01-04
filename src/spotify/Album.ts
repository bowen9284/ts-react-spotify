import Image from './Image';

class Album {
  album_type!: string;
  artists!: Array<object>;
  available_markets!: Array<string>;
  external_urls!: object;
  href!: string;
  id!: string;
  images!: Array<Image>;
  name!: string;
  popularity!: number;
  type!: string;
  uri!: string;
  limit!: number;
  offset!: number;
  next!: string | undefined;
  previous: string | undefined;
  total!: number;
}

export default Album;
