import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @author Yuki Takei <yuki@weseek.co.jp>
 *
 * @export
 * @class PageTagForm
 * @extends {React.Component}
 */

export default class PageTagForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pageTags: this.props.pageTags,
    };

    this.updateState = this.updateState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      pageTags: nextProps.pageTags
    });
  }

  getCurrentOptionsToSave() {
    return Object.assign({}, this.state);
  }

  updateState(value) {
    this.setState({pageTags: value});
  }

  render() {
    return (
      <div className="input-group input-group-sm input-group-slack extended-setting">
        <input className="form-control" type="text" value={this.state.pageTags} placeholder="input tag name"
          data-toggle="popover"
          title="ページタグ"
          data-content="タグ付けによりページをカテゴライズすることができます。"
          data-trigger="focus"
          data-placement="top"
          onChange={e => this.updateState(e.target.value)}
          />
      </div>
    );
  }
}

PageTagForm.propTypes = {
  crowi: PropTypes.object.isRequired,
  pageId: PropTypes.string,
  pagePath: PropTypes.string,
  pageTags: PropTypes.string,
};

PageTagForm.defaultProps = {
};
