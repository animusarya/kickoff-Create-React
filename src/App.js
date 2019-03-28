import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import theme, { GlobalStyle } from './utils/theme';
import apolloClient, { persistor } from './utils/apolloClient';

import { Home, About, Contact, Cars, Counter, Error404 } from './pages';

class App extends React.Component {
  state = { loaded: false };

  async componentDidMount() {
    await persistor.restore();
    this.client = apolloClient;
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;
    if (!loaded) {
      return <div>loading</div>;
    }

    return (
      <ApolloProvider client={this.client}>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/cars" component={Cars} />
                <Route path="/counter" component={Counter} />
                <Route component={Error404} />
              </Switch>
            </BrowserRouter>
            <GlobalStyle />
          </React.Fragment>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
