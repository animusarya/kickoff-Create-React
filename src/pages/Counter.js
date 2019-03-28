import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Layout from '../components/Layout';

const counterQuery = gql`
  {
    counter @client {
      value
    }
  }
`;

const Counter = () => {
  const handleIncrement = (data, client) => {
    client.writeData({
      data: {
        counter: { __typename: 'Counter', value: data.counter.value + 1 }
      }
    });
  };

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className="title">Counter - Local Update</h1>
          <Query query={counterQuery}>
            {({ data, client }) => (
              <div>
                <p>
                  {data && data.counter && `🐑 Counter: ${data.counter.value}`}
                </p>
                <button onClick={() => handleIncrement(data, client)}>
                  Increment
                </button>
              </div>
            )}
          </Query>
        </div>
      </section>
    </Layout>
  );
};

export default Counter;
