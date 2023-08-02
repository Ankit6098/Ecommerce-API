
# 🛍️ Ecommerce API

An eCommerce API built with Node.js, Express, and MongoDB allows developers to interact with an online store's product data. The API provides several features for managing products: view all products present in database, view only one product using product id, search products by name, create products, update quantity, price and delete product.

The Node.js and Express framework facilitate building the server-side API, and MongoDB serves as the database to store the product data. These technologies, in combination, provide a robust and scalable foundation for handling various eCommerce operations, allowing for easy integration with front-end applications and supporting a seamless online shopping experience.

The eCommerce API acts as a bridge between the front-end applications (such as web or mobile apps) and the back-end database or services. It follows RESTful principles, providing a standardized approach to interact with the platform, using HTTP methods (GET, POST, PUT, DELETE) to perform different operations.



## API Reference

#### Get all products

```http
  GET /products
```


#### Get only one product

```http
  GET /products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch         |

#### Get all products by name

```http
  GET /products/search/name?name=${string}
```

| Query | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`    | `string` | **Required**. name of product |

#### POST create product

```http
  POST /products/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Your name         |
| `quantity`  | `Number` | **Required**. Product qunatity  |
| `price`     | `Number` | **Required**. product price     |
| `image`     | `string` |                                 |

#### PATCH update product quantity

```http
  PATCH /products/${id}/update_quantity?number=${Number}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `Number` | **Required**. Value to update quantity |

#### PATCH update product price

```http
  PATCH /products/${id}/update_price?number=${Number}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `Number` | **Required**. Value to update quantity |

#### DELETE delete product

```http
  DELETE /products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of iterm to delete |


## Demo

https://ecommerce-api-88nm.onrender.com - folow the above endpoint
## Features

- **Get All Products:** This endpoint allows clients to retrieve a list of all products available in the online store. It returns a JSON array containing the details of each product, such as name, quantity, price, and image URL.

- **Get Only One Product:** Clients can retrieve the details of a specific product using this endpoint. The API expects the unique identifier (e.g., product ID) as a parameter and returns the corresponding product information.

- **Create Product with Name, Quantity, Price, and Image:** This endpoint allows clients to add new products to the store. The API expects the product details (name, quantity, price, and image URL) as a request body in JSON format. Upon successful creation, the new product is stored in the MongoDB database.

- **Update Product Quantity:** Clients can use this endpoint to modify the quantity of a specific product. The API expects the product ID and the new quantity as parameters, and it updates the product's quantity in the database accordingly.

- **Update Product Price:** Similar to the previous endpoint, this feature allows clients to update the price of a specific product. The API expects the product ID and the new price as parameters and updates the product's price in the database.

- **Delete Product:** This endpoint enables clients to remove a specific product from the online store. The API expects the product ID as a parameter, and upon successful execution, the product is deleted from the MongoDB database.
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URI`


## Run Locally

Clone the project

```bash
  git clone https://github.com/Ankit6098/Ecommerce-API
```

Go to the project directory and open index.html file

```bash
  cd Ecommerce-API
```

Install the packages

```bash
  npm install / npm i
```

Start the Server

```bash
    npm start / nodemon start
```
## Deployment

To deploy this project run

```bash
  npm i
```


## Screenshots
![image](https://github.com/Ankit6098/Ecommerce-API/assets/92246613/99fd001e-a85c-4b80-b773-903c142f4e6b)
![image](https://github.com/Ankit6098/Ecommerce-API/assets/92246613/e4d50359-1763-4727-b7da-38d4cb0cc2d2)


## 🚀 About Me

Full Stack developer professional with experience developing and designing web applications using Html, CSS, javascript, node.Js, Expressjs, MongoDB, React, GitHub, and UI/UX. Abel to create eye catchy designs and easily adept at developing complex backend systems, web services, and databases.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ankithub.vercel.app/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColorwhite=)](https://www.linkedin.com/in/ankit-vishwakarma-6531221b0/)


## Feedback

If you have any feedback, please reach out to us at ankitvis609@gmail.com


## Authors

- [@AnkitVishwakarma](https://github.com/Ankit6098)

