# Vanilla Node REST API

This repository is based on [bradtraversy/vanilla-node-rest-api](https://github.com/bradtraversy/vanilla-node-rest-api) with small changes that I made.

Client side only works with json-server, not /server, because DB is still not implemented.

## Usage

Install dependencies after cloning repository

```
npm install
```

Run in develpment

- server

```
npm run dev:server
```

- json-server (database) - PORT 5000 is just for example, default (json-server --watch data/db.json) is 3000

```
json-server --watch server/data/db.json --port 5000
```

Run in production

```
npm start
```

You make request using [Postman](https://www.postman.com/downloads/).

## MVC model

Model–view–controller (usually known as MVC) is a software design pattern commonly used for developing user interfaces that divides the related program logic into three interconnected elements. This is done to separate internal representations of information from the ways information is presented to and accepted from the user.

_View hasn't been used in this project. Could update project in the future._

### Model

The central component of the pattern. It is the application's dynamic data structure, independent of the user interface. It directly manages the data, logic and rules of the application.

The model is responsible for managing the data of the application. It receives user input from the controller.

### View

Any representation of information such as a chart, diagram or table. Multiple views of the same information are possible, such as a bar chart for management and a tabular view for accountants. The view means presentation of the model in a particular format.

### Controler

Accepts input and converts it to commands for the model or view. The controller responds to the user input and performs interactions on the data model objects. The controller receives the input, optionally validates it and then passes the input to the model.

## What is REST

REST is acronym for REpresentational State Transfer. Web services that conform to the REST architectural style, called RESTful Web services, provide interoperability between computer systems on the internet. RESTful Web services allow the requesting systems to access and manipulate textual representations of Web resources by using a uniform and predefined set of stateless operations. Other kinds of Web services, such as SOAP Web services, expose their own arbitrary sets of operations.

<div align="center">
  <img src="https://miro.medium.com/max/2053/1*EbBD6IXvf3o-YegUvRB_IA.jpeg" width="350" height="300" />
</div>

### Client-server

Client–server – By separating the user interface concerns from the data storage concerns, we improve the portability of the user interface across multiple platforms and improve scalability by simplifying the server components.

##
