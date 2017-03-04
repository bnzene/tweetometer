[![Stories in Ready](https://badge.waffle.io/shezdev/tweetometer.png?label=ready&title=Ready)](https://waffle.io/shezdev/tweetometer)

# tweetometer

A single-page Node web app which commmunicates with the [Twitter Streaming API](https://dev.twitter.com/streaming/overview) to return real-time data visualisation of the performance of Twitter hashtags searched for by the user.

This was a week-long group project to learn Agile practices. Taking the opportunity to learn new technologies in a sandbox-like environment, this was tackled with a focus on learning and research rather than shipping.

## Using the App

Download the zip or clone to your directory of choice. Depending on what you have installed, you might need to install Node and any missing packages (I'd suggest https://nodejs.org/en/download/), but theoretically you should be able to run node start, then open tweetometer/index.html in your browser.

Enter the hashtag you want to search for in the text box, click 'Search' and watch your terminal window: after five seconds the app will start returning data from the Twitter API. 

Each line logged to the terminal contains a timestamp and a hash with your search term and the number of tweets with that hashtag posted in the past five seconds. The next step here is to bring this data back through the app and represent it graphically in the browser using ChartJS.

### Prerequisites

Possibly [Node](https://nodejs.org/en/download/).

### Testing

At this point the project has been a catalyst for research and learning; the next step is to TDD the app properly.

<!--- Testing for Twitter side largely handled by Twitter API; otherwise, due to time constraints (project is ongoing and being built in parallel with the learning process) we've been researching and trying things out and have only just settled on the final combination of technologies. --->

## Deployment

<!--- Add additional notes about how to deploy this on a live system --->

## Technologies used:

* [Node.js](https://nodejs.org/en/docs/) - Framework
* [JQuery](https://maven.apache.org/) - Dependency Management
* [Node-Twitter-API](https://www.npmjs.com/package/node-twitter-api) - Twitter API for Node
* [ChartJS](http://chartjs.org/) - dynamic data visualisation
* [Websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) - server-client interaction

## Authors

List of [contributors](https://github.com/shezdev/tweetometer/contributors) to this project.

## License

Unlicensed.
