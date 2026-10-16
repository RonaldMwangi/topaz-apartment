import test from 'node:test';
import assert from 'node:assert/strict';
import { galleryPlaceholderCount } from '../src/utils/gallery.ts';

test('gallery categories complete desktop rows without duplicating photographs', () => {
  for (const [photos, placeholders] of [[0,3],[1,2],[2,1],[3,0],[4,2],[5,1],[6,0],[7,2]]) {
    assert.equal(galleryPlaceholderCount(photos), placeholders, `${photos} photographs`);
    assert.equal((photos + placeholders) % 3, 0);
  }
});
