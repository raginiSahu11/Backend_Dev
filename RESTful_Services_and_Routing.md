# RESTful Services & Routing Tutorial

## Table of Contents
1. Understanding REST Architecture  
2. GET vs POST Requests  
3. Parsing Request Body Using Express Middleware  
4. Creating REST Routes for CRUD Operations  

---

## 1. Understanding REST Architecture

REST (Representational State Transfer) is an architectural style used for designing networked applications. It relies on a **stateless, client-server** communication model and commonly uses the **HTTP protocol**.

### Key Principles of REST

- **Statelessness**  
  Each request from the client must contain all the information required to process it. The server does not store client state between requests.

- **Client-Server Architecture**  
  The client and server are independent and communicate via HTTP. This separation allows scalability and independent evolution.

- **Uniform Interface**  
  REST uses standard HTTP methods such as **GET, POST, PUT, PATCH, DELETE** to perform operations on resources.

- **Resource-Based**  
  Everything is treated as a resource (users, books, products). Each resource is identified by a unique URI, for example:

- **Representation**  
Resources can be represented in multiple formats such as JSON or XML. JSON is most commonly used in REST APIs.

---

### REST vs Traditional Web Services

Traditional web services often use SOAP, which relies on complex XML-based protocols. REST is simpler, uses standard HTTP methods, and commonly exchanges data using lightweight JSON, making it easier to build and consume.

---

### Common HTTP Status Codes

- **200 OK** – Request succeeded  
- **201 Created** – Resource created successfully  
- **204 No Content** – Request succeeded with no response body  
- **400 Bad Request** – Client-side error  
- **401 Unauthorized** – Authentication required  
- **404 Not Found** – Resource not found  
- **500 Internal Server Error** – Server error  

---

## 2. GET vs POST Requests

HTTP methods define the action performed on a resource. **GET** and **POST** are the most commonly used methods.

---

### GET Request

GET is used to **retrieve data** from the server. It should not modify any data.

**Characteristics:**
- Data sent via URL query parameters
- Can be cached
- Saved in browser history
- Can be bookmarked
- Limited URL length
- Not suitable for sensitive data

**Example:**
```http
GET /api/users?page=1&limit=10 HTTP/1.1
Host: example.com


### Exercise Summary

1. **Exercise 1:** Filtering books using query parameters (`author`, `year`)
2. **Exercise 2:** Input validation middleware for checking valid year range
3. **Exercise 3:** Pagination using `page` and `limit` query parameters
4. **Exercise 4:** Full CRUD operations for a new resource (Authors)
5. **Exercise 5:** Search endpoint to find books by title

Each exercise runs independently and demonstrates a specific REST API concept using Express.js.

---

## Additional Resources

- Express.js Documentation: https://expressjs.com/  
- REST API Tutorial: https://restfulapi.net/  
- HTTP Status Codes: https://httpstatuses.com/  
- MDN HTTP Methods: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

