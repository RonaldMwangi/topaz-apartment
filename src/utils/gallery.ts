/** Complete desktop rows of three, including one row for an empty category. */
export function galleryPlaceholderCount(photoCount: number): number {
  return photoCount === 0 ? 3 : (3 - (photoCount % 3)) % 3;
}
