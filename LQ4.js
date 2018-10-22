// https://github.com/javascript-playground/remote-data-react-screencasts/blob/master/src/Github.js
import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { FavoriteBorder, Repeat, GraphicEq, Score } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";

// const urlForUsername = username => `https://api.github.com/users/mayojich`;
// another url with replies
const url1 =
  "https%3A%2F%2Ftwitter.com%2Ffchollet%2Fstatus%2F1044465230317645824";
const url2 = "https://twitter.com/miuki_miu/status/1049298310392107010";

const card = {
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "90%",
  backgroundColor: "#f8f8f8"
};

const cardcontent = {
  margin: "1%"
};

const styles = {
  row: {},
  avatar: {
    display: "flex",
    justifyContent: "center",
    width: 60,
    height: 60,
    margin: 10
  }
};

const apilink = link =>
  `https://tweet-tree-backend.herokuapp.com/v1/tweets/tree?url=${url1}`;

class LQ4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    // fetch the data
    fetch(apilink(this.props))
      .then(d => d.json())
      .then(d => {
        console.log(d);
        this.setState({
          data: d
        });
      });
  }

  render() {
    // this is to if else away the state of react when there is no data
    if (!this.state.data) return <p>Hold on...</p>;

    // write a functions to go through the list of entities
    const entities = this.state.data.entities; // this is a list

    // the function that looks like python loops
    // for i in some_list:
    //    # do something
    const entities_for_return = [];
    // define the function
    function pythonLikeParsing() {
      // if you look at it carefully, i'm defining an entire function inside the forEach bracket
      // if in python you're familiar with enumerate(), here the index comes after, not before
      // if you're not familiar with enumerate() have a look online
      entities.forEach(function(entity, number) {
        // make the output a bit smarter
        // i like javascript's lambda format (mini one-time-use functions)
        // if you don't know what's lambda, read it up XD its python's nameless functions
        const numberthis = function() {
          for (let number = 1; number < 10; number++) {}
        };
        // return a list of jsx
        // push (js) == append (python)
        entities_for_return.push(
          <div>
            <h4>Entity {number}</h4>
            <p>Label: {entity.label}</p>
            <p>Salience: {entity.salience.toFixed(4)}</p>
            <p>Type: {entity.type}</p>
          </div>
        );
      });
    }
    // call the function
    pythonLikeParsing();

    // point to note: your children cannot be called like this
    // try switching the url to url2 and you will see that react
    // cannot place an array into html
    return (
      <div style={{ fontFamily: "sans-serif" }}>
        <Card style={card}>
          <CardContent style={cardcontent}>
            <h1>Tweet Sentiment</h1>
            <Avatar src={this.state.data.images} style={styles.avatar} />
            <p>Text:{this.state.data.text}</p>

            {/* Begin */}
            <CardActions>
              <Repeat />
              <Typography className="badge">
                {this.state.data.retweets}
              </Typography>
              <FavoriteBorder />
              <Typography className="badge">
                {this.state.data.favourites}
              </Typography>
              <GraphicEq />
              <Typography className="badge">
                {this.state.data.sentiment.magnitude.toFixed(2)}
              </Typography>
              <Score />
              <Typography className="badge">
                {this.state.data.sentiment.score.toFixed(2)}
              </Typography>
            </CardActions>
            {/* End */}
            <h3>Entities</h3>
            {entities_for_return}
            <h3>Children</h3>
            <p>{this.state.data.children}</p>
            <Button
              variant="contained"
              color="primary"
              href={this.state.data.url}
            >
              View Tweet
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default LQ4;
