export type CardType = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    /* Intrinsic size of `image`. Only used to declare og:image dimensions on the case
       routes, which lets a social scraper lay out the preview before it has fetched the
       file. Not used for layout - the grid crops via object-fit. */
    imageWidth: number;
    imageHeight: number;
    link: string;
};
