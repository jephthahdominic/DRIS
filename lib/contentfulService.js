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
}

export const contentfulService = new ContentfulService()