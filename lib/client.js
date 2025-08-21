import { createClient } from "contentful";

if(!import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN)throw new Error("Contentful access token not found");
if(!import.meta.env.VITE_CONTENTFUL_SPACE_ID)throw new Error("Contentful space id not found");

const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
})

export default client