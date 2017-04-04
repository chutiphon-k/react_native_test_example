import React from 'react';
import { Keyboard } from 'react-native';

const withKeyboard = Component => (
  class extends React.Component {
    constructor() {
      super();

      this.state = {
        hideKeyboard: true,
        keyboardHeight: 0
      };

      this.keyboardDidShow = this.keyboardDidShow.bind(this);
      this.keyboardDidHide = this.keyboardDidHide.bind(this);
    }

    componentWillMount() {
      this.keyboardDidShowListener =
        Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
      this.keyboardDidHideListener =
        Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }

    componentWillUnmount() {
      this.keyboardDidShowListener.remove();
      this.keyboardDidHideListener.remove();
    }

    keyboardDidShow(frames) {
      this.setState({
        hideKeyboard: false,
        keyboardHeight: frames.endCoordinates.height
      });
    }

    keyboardDidHide(frames) {
      this.setState({
        hideKeyboard: true,
        keyboardHeight: 0
      });
    }

    render() {
      return <Component { ...this.props } { ...this.state } />
    }
  }
);

export default withKeyboard;
