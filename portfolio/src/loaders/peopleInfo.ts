
const peopleTextFiles = import.meta.glob(
  '/content/people/*/*.json',
  { eager: true }
);
const peopleJson: any = {}
for (const key in peopleTextFiles) {
  const curInfo = (peopleTextFiles[key] as any).default;
  const curName = key.split('/')[3];
  peopleJson[curInfo.id] = {
    "name": curInfo.name,
    "photoPath": curInfo.imgUrl,
    "fallBackPhotoPath": `/content/people/${curName}/avatar.jpg`,
    "url": curInfo.url
  }
}

export default peopleJson;