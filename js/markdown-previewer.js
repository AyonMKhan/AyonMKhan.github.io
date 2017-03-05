(function () {
	"use strict";

	document.addEventListener("DOMContentLoaded", function () {



		var Container = React.createClass({
		  getInitialState: function() {
			return {
			  text: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Ayon](https://freecodecamp.com/AyonKhan)*"
			}
		  },

		  txtChanged: function(e) {
			this.setState({
			  text: e.target.value
			})
		  },


		  render: function() {
			return (
			  <div>
				<textarea className="input" value={this.state.text} onChange={this.txtChanged}/>
				<RenderedText text={this.state.text}/>
			  </div>
			);
		  }
		});

		var RenderedText = React.createClass({
		  markup: function() {
			return {__html: marked(this.props.text, {sanitize: true, gfm: true})}
		  },

		  render: function() {
			return (
			  <div className="rendered" dangerouslySetInnerHTML={this.markup()}>
			  </div>
			)
		  }
		});

		ReactDOM.render(
		  <Container />,
		  document.getElementById('app')
		);
	}); //end of Dom content loaded

}()); //end of use strict function wrapping