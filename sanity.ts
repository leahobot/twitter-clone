import {createClient} from 'next-sanity'
import imageUrlBuilder from "@sanity/image-url";

const config = {
      dataset : process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,

      useCdn : process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(sanityClient);

export const imgUrl = (source: HTMLImageElement) => builder.image(source);