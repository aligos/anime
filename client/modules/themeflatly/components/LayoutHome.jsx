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
          <div className="section-header">
            <h1>Cari Anime Yang Kamu Suka!</h1>
            <form role="search" className="form-faq" data-dropdown-container="" data-faq-search="">
              <input type="search" placeholder="Cari anime favorite kamu disini" id="faq-search-term" />
              <label><svg className="icon icon-magnifying-glass"></svg></label>
            </form>
          </div>
          <div className="container-fluid">

            {content()}

          </div>
          <div className="section-footer">
            <h1><span className="text-ft">Kamu lagi ngapain disini?</span></h1>
            <h5><span className="copyright-ft">Made with crots</span></h5>
          </div>
        </div>
      </div>
    );
  }
}
