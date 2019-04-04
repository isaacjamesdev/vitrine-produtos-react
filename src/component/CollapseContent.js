import React from 'react'
import {Collapse, Button} from 'react-bootstrap'

export default class CollapseContent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: true,
    };
  }

  render() {
    const { open } = this.state;
    return (
      <>
        <Button
          onClick={() => this.setState({ open: !open })}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          {this.props.nome}
        </Button>
        <Collapse in={this.state.open}>
          <div id="example-collapse-text">
            {this.props.children}
          </div>
        </Collapse>
      </>
    );
  }
}
