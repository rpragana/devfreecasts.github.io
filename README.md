# DevFreeCasts

This is the repository of the site https://devfreecasts.github.io to submit screencasts links.

## How to add screencasts?

### Via Google docs

You can submit a video via [Google Docs Form](https://docs.google.com/forms/d/e/1FAIpQLSe85Y-RHMyFmhemM-cWcun2SJctviDRiqTZ3MxoOPBRtv5wWw/viewform).

### Via Pull Request

**Before start it, all videos you add must be freeware to be shared**

First of all you need to [fork this repository](https://github.com/devfreecasts/devfreecasts.github.io/fork).

With this project in your hands, edit the `/public/_categories/[category-name].json` and add your videos respecting these parameters:

``` javascript
"index": {
  "name": "category-name",
  "subtitle": "Category's name",
  "about": "Category's description",
  "site": "url of the official category site or wikipedia",
  "image": "category-image.jpg",
  "videos": [
    {
      "site" : "video's site name", // Youtube, Vimeo channels are welcome too
      "site_url": "url of the video's site",
      "image": "video's site logo.jpg",
      "lang": "video's language. Ex.: EN, PT-BR, ES..",
      "title": "video title",
      "description": "Video's description",
      "duration": "3:14", // Video Duration
      "level": "B", // B - Basic video, I - Intermediate video, A - Advanced video,
      "url": "video's url",
      "added_at": "20161112" // Current date you added this video in format YYYYMMDD
    }
  ]
},
```

Obs.: **All image must be an jpeg/jpg with 350x195 size**. If you don't add an `videos.image` attribute the **default category's image will replace it**.

Look this example (`public/_categories/nodejs.json`):

``` javascript
{
  "index": {
    "name": "nodejs",
    "subtitle": "Node.js",
    "about": "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.",
    "site": "http://nodejs.org",
    "image": "nodejs.png",
    "videos": [
      {
        "site" : "TagTree",
        "site_url": "http://tagtree.tv",
        "image": "tagtree.jpg",
        "lang": "en",
        "title": "Node Streams",
        "description": "You've heard a lot about node streams, in this episode you get introduced to streams and see how to code up your own read, write, and transform stream.",
        "duration": "8:28",
        "url": "http://tagtree.tv/intro-to-node-streams",
        "added_at": "20161112"
      }
    ]
  }
}
```

## Development mode

To run this project in **development mode**, you must have installed the latest version of [Node.js](http://nodejs.org).

To install Node.js, just [follow this wiki rules](http://nodejs.org/download)

To get and run this project:

``` bash
git clone git@github.com:devfreecasts/devfreecasts.github.io.git
cd devfreecasts
npm install # or using yarn: yarn install
npm start
```

And access in your browser the url: [http://localhost:3000](http://localhost:3000).

## Author

Caio Ribeiro Pereira - [@crp_underground](http://twitter.com/crp_underground)

## License

MIT - http://caio-ribeiro-pereira.mit-license.org
