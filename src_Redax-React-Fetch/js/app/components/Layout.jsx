import React     from 'react';
import {connect} from 'react-redux';

import {fakeFetch, fetchUser} from '../actions/userAction';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd           from 'material-ui/svg-icons/content/add';

@connect(store => {
  return {
    user: store.user.user,
    data: store.user.ajax.data,
  };
})

class Layout extends React.Component {

  componentWillMount() {
    this.props.dispatch(fakeFetch());
  }

  onFetch() {
    this.props.dispatch(fetchUser());
  }

  render() {
    const {data} = this.props;
    const {user} = this.props;

    if (!data) {
      return (
          <FloatingActionButton onClick={() => this.onFetch()} secondary={true}>
            <ContentAdd />
          </FloatingActionButton>
      );
    }

    const mappedData = data.map((data, i) => {
      return <li key={i}>{data.name}</li>;
    });

    return (
        <div>
          <h2>Fake Fetch Name: {user.name}</h2>
          <hr/>
          <h1>Real Fetch</h1>
          <ul>
            {mappedData}
          </ul>
        </div>
    );
  }
}

export default Layout;