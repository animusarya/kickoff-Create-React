import React from 'react';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input is-medium"
            type="text"
            placeholder="Search events..."
            onChange={this.onChange}
          />
        </div>
        <div className="control">
          <a className="button is-medium">Search Events</a>
        </div>
      </div>
    );
  }
}

export default SearchInput;
