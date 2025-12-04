# Librera-Search-v1.x

Librera Search v1.x solution built with Angular 16, Hangfire Server and .Net 8; enables to index content from PDFs making it searchable with the possibility to classify them by the Web UI. Implements token-based authentication for registered users and policy-based authorization in the endpoints.

The application contains the next functionality:

- Each register has id, title ,authors ,series, ids, published, publisher, languages, tags, formats, path and indexed content
- We can create, retrieve, update, delete records, launch the index service and search PDF content linked to the records
- Includes two pages for finding registers by title or search indexed content
- JWT (JSON Web Token) format used for authentication
- Policy-based authorization in the endpoints

## Token-Based Authentication with Angular 16 and .Net 8 WebAPI

Token-based authentication is a popular approach to securing web applications, providing a stateless and scalable way to verify user identities. In this implementation, we'll explore how to integrate token-based authentication using Angular 16 as the frontend framework and .Net 8 WebAPI as the backend API.

What is Token-Based Authentication?

Token-based authentication involves generating a unique token upon successful user authentication, which is then passed with each subsequent request to verify the user's identity. This approach eliminates the need for server-side session storage, making it ideal for modern web applications.

Key Components:

- .Net 8 WebAPI: Handles token generation and validation
- Angular 16: Manages user authentication and includes the token in requests
- JWT (JSON Web Token): The token format used for authentication

This implementation provides a secure and efficient way to authenticate users, allowing for seamless interaction between the frontend and backend.

### Policy-based authorization in .NET

In ASP.NET, policies are used to define requirements that must be met in order to give a user the authorization to access an endpoint.

Within Web API projects you can use policies to guard and protect endpoints from unauthorized users that don't meet the criteria. Instead of writing the authorization logic in the endpoint itself, you can refactor this into a policy that is reusable across multiple endpoints. By extracting the authorization logic from the endpoint, you can make your code more clear and keep your endpoints concise.

