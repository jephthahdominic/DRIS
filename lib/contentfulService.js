import client from "./client";

class ContentfulService {
    async getMedia(pageNumber = 1){
        const response = await client.getEntries({
            content_type: "media",
            order: "sys.createdAt",
            limit: 10,
            skip: (pageNumber - 1) * 10
        })
        return response.items
    }
    async getAdvert(){
        const response = await client.getEntries({
            content_type: "advertisement",
            limit: 1
        })
        return response.items[0]
    }
}

export const contentfulService = new ContentfulService()