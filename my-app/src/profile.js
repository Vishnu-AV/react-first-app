export function Profile({person}) {
   const src =  'https://i.imgur.com/' +   person.imageId +   's.jpg';
   return <img alt={person.name} src={src} />;
  }