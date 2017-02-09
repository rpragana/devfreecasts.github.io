const harp = require('./harp.json').globals;
const RSS = require('rss');
const moment = require('moment');
const fs = require('fs-extra');
const path = require('path');

const rootUrl = harp.root_url.production;
const categoryDir = path.join(__dirname, 'public/_categories');
const imageRootUrl = `${rootUrl}assets/images/`;
const outputFeed = 'www/rss.xml';
const videos = [];
const feed = new RSS({
  title: harp.title,
  description: harp.description,
  feed_url: `${rootUrl}rss.xml`,
  site_url: rootUrl,
  image_url: `${imageRootUrl}${harp.slug_title}-thumb.png`,
  managingEditor: harp.author,
  pubDate: moment().format('LLLL'),
  ttl: 60
});

fs.readdirSync(categoryDir).forEach((categoryFile) => {
  const categoryName = categoryFile.replace('.json', '');
  const category = require(path.join(categoryDir, categoryFile)).index;
  category.videos.forEach((video) => {
    const videoId = video.title.replace(/[^\w\s]/g, '').replace(/\s/g, '-').toLowerCase();
    const videoLink = `${rootUrl}${categoryName}/#${videoId}`;
    const videoPublishedAt = moment(video.published_at || moment().format('YYYYMMDD'), 'YYYYMMDD');
    const videoImage = video.image || `${categoryName}.png`;
    videos.push({
      title: `Video: ${video.title}`,
      description: `
        <article>
          <figure style="text-align:center;">
            <img src="${imageRootUrl}${videoImage}" title="${video.title}" />
            <figcaption>${video.title}</figcaption>
          </figure>
          <p>
            ${video.description}
            <br />
            Site: <b>${video.site}</b> | Section: <b>${category.subtitle}</b>
            <br />
            Lang: <b>${video.lang}</b> | Level: <b>${video.level}</b> | Duration: <b>${video.duration}</b>
          </p>
        </article>
      `,
      url: videoLink,
      author: harp.author,
      date: videoPublishedAt.format('ll')
    });
  });
});

const sortedVideos = videos.sort((first, second) => {
  const a = moment(first.date, 'll').toDate().getTime();
  const b = moment(second.date, 'll').toDate().getTime();
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
});

sortedVideos.forEach(video => feed.item(video));

fs.writeFileSync(outputFeed, feed.xml());
console.log(`Generated RSS: ${outputFeed}`);
