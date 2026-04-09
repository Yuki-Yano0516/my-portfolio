import type { MicroCMSImage, MicroCMSListContent } from 'microcms-js-sdk';

export type Work = MicroCMSListContent & {
  title: string;
  thumbnail?: MicroCMSImage;
  url?: string;
  year?: string;
  tags?: string[];
};

export type Blog = MicroCMSListContent & {
  title: string;
  body: string;
  category?: string;
  eyecatch?: MicroCMSImage;
};
