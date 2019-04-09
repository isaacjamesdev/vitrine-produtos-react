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
        <h3>
          <Button variant="outline-secondary" className='accordion-toggle'
            onClick={() => this.setState({ open: !open })}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            {this.props.nome} >
          </Button>
        </h3>
        <Collapse in={this.state.open}>
          <div id="example-collapse-text">
            {this.props.children}
          </div>
        </Collapse>
      </>
    );
  }
}
