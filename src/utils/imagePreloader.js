import { generalImages, serviceImages } from "../config/images";

export const preloadImages = (images) => {
  images.forEach((imageUrl) => {
    const img = new Image();
    img.src = typeof imageUrl === "object" ? imageUrl.primary : imageUrl;
  });
};

export const preloadCriticalImages = () => {
  const criticalImages = [
    generalImages.hero.primary,
    generalImages.clinic.primary,
    serviceImages.vitiligo.primary,
    serviceImages.psoriasis.primary,
  ];

  preloadImages(criticalImages);
};
