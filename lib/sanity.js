import {
    createClient,
    createPreviewSubscriptionHook,
    createImageUrlBuilder,
} from 'next-sanity'

import { PortableText as PortableTextComponent } from '@portabletext/react'

const config = {
    projectId: "o5y32i8c",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
}

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const portableText = (props) => <PortableTextComponent components={{}} {...props} />