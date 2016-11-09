const harp = require('./harp.json').globals;
const RSS = require('rss');
const moment = require('moment');
const fs = require('fs');

const rootUrl = harp.root_url.production;
const imageRootUrl = `${rootUrl}assets/images/`;
const outputFeed = 'www/rss.xml';
const videos = [];
const feed = new RSS({
  title: harp.title,
  description: harp.description,
  feed_url: `${rootUrl}rss.xml`,
  site_url: rootUrl,
  image_url: `${imageRootUrl}${harp.slug_title}-128.png`,
  managingEditor: harp.author,
  pubDate: moment().format('LLLL'),
  ttl: 60
});

harp.platforms.forEach((platformName) => {
  const platform = require(`./public/${platformName}/_data.json`).index;
  platform.videos.forEach((video) => {
    const videoId = video.title.replace(/[^\w\s]/g, '').replace(/\s/g, '-').toLowerCase();
    const videoLink = `${rootUrl}${platformName}/#${videoId}`;
    const videoPublishedAt = moment(video.published_at || moment().format('YYYYMMDD'), 'YYYYMMDD');
    const videoImage = imageRootUrl + (video.image || platform.image);
    videos.push({
      title: `Video: ${video.title}`,
      description: video.description,
      url: videoLink,
      author: harp.author,
      date: videoPublishedAt.format('ll'),
      enclosure: {
        url: videoImage
      }
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
