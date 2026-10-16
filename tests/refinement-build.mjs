// Run after building. Checks editorial assignments across the complete site.
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {join} from 'node:path';
const routes=['/','/accommodation/','/accommodation/one-bedroom/','/accommodation/two-bedroom/','/facilities/','/gallery/','/location/','/contact/'];
const used=new Map();const captions=new Set();
for(const route of routes){
 const html=readFileSync(join('dist',route,'index.html'),'utf8');
 assert.doesNotMatch(html,/\bparking\b/i,`${route}: parking must not appear in marketing, metadata or schema`);
 const text=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ');
 assert.doesNotMatch(text,/\btax(?:es)?\b|Coastal studies|Abstract artwork|parking|Photography to follow|provider confirmation|\uFFFD/i,route);
 if(['/','/location/','/contact/'].includes(route))assert.match(text,/Sunset Paradise/,route);
 for(const figure of html.matchAll(/<figure\b([^>]*)>([\s\S]*?)<\/figure>/g)){
  const id=figure[1].match(/data-photo-id="([^"]+)"/)?.[1];if(!id)continue;
  assert.ok(!used.has(id),`${id} repeated on ${route}; first used on ${used.get(id)}`);used.set(id,route);
  const caption=figure[2].match(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/)?.[1].replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
  if(caption){assert.ok(!captions.has(caption),`Repeated caption: ${caption}`);captions.add(caption);}
  const img=figure[2].match(/<img\b([^>]+)>/)?.[1];assert.ok(img,id);
  for(const attr of ['width','height','sizes','srcset','loading'])assert.match(img,new RegExp(`${attr}="[^\"]+"`),id);
  if(/data-photo-kind="illustrative"/.test(figure[1])){
   assert.ok(['coastal-inspiration','home-yacht','facilities-yacht','pool-inspiration','meal-inspiration','gallery-pool-inspiration','dining-inspiration','kenya-coast-inspiration'].includes(id));assert.match(figure[2],/illustrative/);
  }
 }
 for(const source of html.matchAll(/srcset="([^"]+)"/g))for(const part of source[1].split(',')){
   const path=part.trim().split(' ')[0];if(path.startsWith('/'))assert.ok(existsSync(join('dist',path)),`${route}: ${path}`);
 }
 for(const link of html.matchAll(/href="(https:\/\/wa\.me\/[^\"]+)"/g)){
  const msg=new URL(link[1].replaceAll('&amp;','&')).searchParams.get('text');
  if(/yacht/.test(msg)){assert.match(msg,/Topaz Apartments to arrange a yacht experience along Mtwapa Creek/);assert.match(msg,/availability, applicable charges and booking terms/);assert.doesNotMatch(msg,/tax|provider|complimentary|September/i);}
 }
}
assert.equal(used.size,29,'21 property and eight illustrative photographs must each appear once');
console.log('Refinement verification passed: 29 unique photograph placements, unique captions, valid responsive assets, location copy, yacht messaging and no generic tax or design-placeholder copy.');
