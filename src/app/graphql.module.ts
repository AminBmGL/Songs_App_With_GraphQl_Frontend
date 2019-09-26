import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { DefinitionNode } from 'graphql';
import { ApolloLink } from 'apollo-link';



const uri = 'http://localhost:4000/graphql'; // <-- add the URL of the GraphQL server here

export function createApollo(httpLink: HttpLink) {

  //Simplest Configuration:All request with same type
  /*
  return {
    cache: new InMemoryCache(),
    link: httpLink.create({
      uri: 'http://localhost:4000/graphql'
    })
  }
*/
  //Suffisticated Configuration to diffrenciate queries and mutations: Associate queries with get methodand mutations with post methods
  
  const linkMutations = httpLink.create({
    uri: 'http://localhost:4000/graphql'
  });

  const linkQueries = httpLink.create({
    uri: 'http://localhost:4000/graphql',
    method: 'GET'
  });

  const definitionIsMutation = (d: DefinitionNode) => {
    return d.kind === 'OperationDefinition' && d.operation === 'mutation';
  };

  const splittedLink = ApolloLink.split(
    ({ query }) => {
      return query.definitions.some(definitionIsMutation);
    },
    linkMutations,
    linkQueries,
  );

  return {
    ssrMode:true,
    link: splittedLink,
    cache: new InMemoryCache()
  };
  
 
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
