import { Component } from "react";

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <h4>{this.props.book}</h4>
        <h6>{this.props.author}</h6>
        {this.props.desc}
        <div>
          <img src={this.props.img} alt={this.props.title}></img>
        </div>

      </article>
    );
  }
}

export default Content;