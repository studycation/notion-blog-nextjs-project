import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
      },
      {
        hostname: 'www.notion.so',
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // 이후 필요한 마크다운 플러그인 추가할 수 있다.
  options: {
    remarkPlugins: [
      // @ts-expect-error remark-gfm 타입 충돌 문제 해결 Without options
      'remark-gfm',
      // @ts-expect-error remark-gfm 타입 충돌 문제 해결 With options
      ['remark-toc', { heading: 'The Table' }],
    ],
  },
});

export default withMDX(nextConfig);
