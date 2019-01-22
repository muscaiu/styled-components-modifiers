import React, { Component } from 'react';
import Button from 'components/Button'
import Icon from 'components/Icon'
import Text from 'components/Text'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button modifiers={['secondary']}>
          <Icon modifiers={['left']} name='home' />
          <Text>Home</Text>
        </Button>
      </div>
    );
  }
}

export default App;
