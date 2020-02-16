import React from 'react';
import './App.css';
import BlockItems from './components/BlockItems';
import BlockCounter from './components/BlockCounter';
import BlockError from './components/BlockError';
import { connect } from 'react-redux';
import { counter_AC, set_AC, showRandomImageAC } from './Redux/dog-reducer';



class App extends React.Component {
  //асинхронный метод
  componentDidMount = () => {
    debugger
    setInterval(() => {
      this.props.showRandomImage();
    }, 2000);
  }



  render() {
    return (
      <div className="wrapper">
        <BlockItems blockId={this.props.blockId} onClickPlus={this.props.onClickPlus} onClickSet={this.props.onClickSet}
          showRandomImage={this.props.showRandomImage} />
        <div className="counter">
          <BlockCounter counter={this.props.counter} />
          <BlockError errors={this.props.errors} />
        </div>
      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    blockId: state.dog.blockId,
    counter: state.dog.counter,
    errors: state.dog.errors
  };

}
const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    onClickPlus: () => {
      dispatch(counter_AC())
    },
    onClickSet: () => {
      dispatch(set_AC())
    },
    showRandomImage: () => {
      dispatch(showRandomImageAC());
    }
  }
}




const ConnectDog = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectDog;