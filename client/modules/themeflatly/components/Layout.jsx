import React from 'react';

import NavHeader from './NavHeader.jsx';

export default class extends React.Component {

  render() {

    // const content = _.get(this.props,'content', () => {});
    const {
      content
    } = this.props;

    return (
      <div>

        <NavHeader />
        <div className="main-wrapper">
          <div className="container-fluid">

            {content()}

          </div>
        </div>
      </div>
    );
  }
}
