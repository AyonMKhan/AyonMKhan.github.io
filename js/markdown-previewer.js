(function () {
	"use strict";

	document.addEventListener("DOMContentLoaded", function () {



		var Container = React.createClass({
			displayName: "Container",

			getInitialState: function getInitialState() {
				return {
					text: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Ayon](https://freecodecamp.com/AyonKhan)*"
				};
			},

			txtChanged: function txtChanged(e) {
				this.setState({
					text: e.target.value
				});
			},

			render: function render() {
				return React.createElement(
					"div",
					null,
					React.createElement("textarea", {
						className: "input",
						value: this.state.text,
						onChange: this.txtChanged
					}),
					React.createElement(RenderedText, {
						text: this.state.text
					})
				);
			}
		});

		var RenderedText = React.createClass({
			displayName: "RenderedText",

			markup: function markup() {
				return {
					__html: marked(this.props.text, {
						sanitize: true,
						gfm: true
					})
				};
			},

			render: function render() {
				return React.createElement("div", {
					className: "rendered",
					dangerouslySetInnerHTML: this.markup()
				});
			}
		});

		ReactDOM.render(React.createElement(Container, null), document.getElementById('app'));
	}); //end of Dom content loaded

}()); //end of use strict function wrapping