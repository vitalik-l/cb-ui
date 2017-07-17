import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class RenderInBody extends Component {
	componentDidMount() {
		this.popup = document.createElement("span");
		document.body.appendChild(this.popup);
		this.renderLayer();
	}

	componentDidUpdate() {
		this.renderLayer();
	}

	componentWillUnmount() {
		ReactDOM.unmountComponentAtNode(this.popup);
		document.body.removeChild(this.popup);
	}

	renderLayer() {
		ReactDOM.render(this.props.children, this.popup);
	}

	render() {
		// Render a placeholder
		return null;
	}
}