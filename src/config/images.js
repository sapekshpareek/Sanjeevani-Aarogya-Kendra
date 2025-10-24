export const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export const imageSizes = {
  hero: {
    width: 1920,
    height: 1080,
  },
  service: {
    width: 800,
    height: 600,
  },
  testimonial: {
    width: 400,
    height: 400,
  },
};

export const serviceImages = {
  vitiligo: {
    primary:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    fallback:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
  },
  psoriasis: {
    primary:
      "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80",
    fallback:
      "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80",
  },
  skinDisease: {
    primary:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    fallback:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
  },
  obesity: {
    primary:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
    fallback:
      "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80",
  },
  womenHealth: {
    primary:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    fallback:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
  },
};

export const generalImages = {
  hero: {
    primary:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80",
    fallback:
      "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80",
  },
  clinic: {
    primary:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
    fallback:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
  },
};
