import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";


export type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdeat: string;
};



export type Category = {
  name: string;
} & MicroCMSListContent;