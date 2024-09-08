import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'
import viteCompression from 'vite-plugin-compression';
import Sitemap from 'vite-plugin-sitemap'
import StoryblokClient from "storyblok-js-client";

const storyblok = new StoryblokClient({accessToken: 'n7i9Pmb1fWHjFxkR3mAq9Att'});
const storiesNews = await storyblok.get('cdn/stories', {starts_with: 'news'}).then(({data}) => data.stories);
const storiesGallery = await storyblok.get('cdn/stories', {starts_with: 'gallery'}).then(({data}) => data.stories);
const dynamicRoutes = [
    '/announcements',
    '/intentions',
    '/news',
    ...storiesNews.map(({slug}) => `/news/${slug}`),
    '/gallery',
    ...storiesGallery.map(({slug}) => `/gallery/${slug}`),
    '/contact',
];

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [viteCompression(), million.vite({auto: true}), react(), Sitemap({
        hostname: 'https://www.milosierdzieradom.pl/', dynamicRoutes,
    })],
});