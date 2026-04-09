import { createClient } from 'microcms-js-sdk';
import type { Work, Blog } from '@/types/microcms';

const isConfigured =
  !!process.env.MICROCMS_SERVICE_DOMAIN && !!process.env.MICROCMS_API_KEY;

const client = isConfigured
  ? createClient({
      serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
      apiKey: process.env.MICROCMS_API_KEY!,
    })
  : null;

// Works 一覧取得
export const getWorks = async (limit = 6): Promise<Work[]> => {
  if (!client) return [];
  const data = await client.getList<Work>({
    endpoint: 'works',
    queries: { limit, orders: '-createdAt' },
  });
  return data.contents;
};

// Works 詳細取得
export const getWork = async (contentId: string) => {
  if (!client) throw new Error('microCMS is not configured');
  return await client.getListDetail<Work>({
    endpoint: 'works',
    contentId,
  });
};

// Works の全スラッグ取得（静的生成用）
export const getAllWorkSlugs = async (): Promise<Work[]> => {
  if (!client) return [];
  const data = await client.getList<Work>({
    endpoint: 'works',
    queries: { limit: 100, fields: 'id' },
  });
  return data.contents;
};

// Blog 一覧取得
export const getBlogs = async (limit = 4): Promise<Blog[]> => {
  if (!client) return [];
  const data = await client.getList<Blog>({
    endpoint: 'blog',
    queries: { limit, orders: '-createdAt' },
  });
  return data.contents;
};

// Blog 詳細取得
export const getBlog = async (contentId: string) => {
  if (!client) throw new Error('microCMS is not configured');
  return await client.getListDetail<Blog>({
    endpoint: 'blog',
    contentId,
  });
};

// Blog の全スラッグ取得（静的生成用）
export const getAllBlogSlugs = async (): Promise<Blog[]> => {
  if (!client) return [];
  const data = await client.getList<Blog>({
    endpoint: 'blog',
    queries: { limit: 100, fields: 'id' },
  });
  return data.contents;
};
