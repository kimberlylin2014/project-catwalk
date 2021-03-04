import React from 'react';
// import PropTypes from 'prop-types';
import Size from './Size/Size.jsx';
import Quantity from './Quantity/Quantity.jsx';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSKU: props.currentStyleObj ? Object.keys(props.currentStyleObj['skus'])[0] : '',
    };
    this.changeSKU = this.changeSKU.bind(this);
  }

  changeSKU(currentSKU) {
    this.setState({ currentSKU });
  }

  render() {
    const { currentStyleObj } = this.props;

    return (
      <div>
        <Size skus={currentStyleObj ? currentStyleObj.skus : ''} changeSKU={this.changeSKU} />
        <Quantity inventory={this.state.currentSKU && currentStyleObj.skus && currentStyleObj.skus[this.state.currentSKU] ? currentStyleObj.skus[this.state.currentSKU].quantity : ''} />
        <button>Add To Cart</button>
      </div>
    );
  }
}

export default AddToCart;
