# Project Name

## Project Setup

To set up and run the backend locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/VIKASH1596KUMARKHARWAR/food-deilvery
  ``

### Database Design Choice

MongoDB vs PostgreSQL:

    MongoDB is chosen for its flexibility in handling unstructured data. It is more suitable for projects that need scalability and handle large amounts of data with varying structures (like products, orders, users, etc.).

    It allows for fast querying and data retrieval without the need for complex relationships between tables, making it ideal for this kind of application.

    PostgreSQL could also be an option if there were more strict relational data needs, but for now, MongoDB provides better scalability for this project.

API Endpoints

Here’s a list of the key API endpoints available in the project:
User Routes:

    POST /api/user/register: Registers a new user.

    POST /api/user/login: Authenticates a user and returns a JWT token.

Food Routes:

    POST /api/food/add: Adds a new food item with an image.

    GET /api/food/list: Lists all available food items.

    POST /api/food/remove: Removes a specific food item.

Cart Routes:

    POST /api/cart/add: Adds an item to the cart.

    POST /api/cart/remove: Removes an item from the cart.

    POST /api/cart/get: Retrieves the current cart contents.

Order Routes:

    POST /api/order/place: Places an order.

    POST /api/order/verify: Verifies an order.

    POST /api/order/userorders: Retrieves orders placed by a specific user.

    GET /api/order/list: Lists all orders.

    POST /api/order/status: Updates the order status.

Frontend Deployment

You can view the deployed frontend application on Netlify at the following link:

Frontend Link
Assumptions Made / Challenges Faced

    Assumptions:

        The project assumes that all users will have unique emails for registration.

        The database connection and environment variables are correctly set up in the .env file.

    Challenges Faced:

        Handling image uploads with multer and ensuring the files are stored correctly in the uploads directory.

        Implementing JWT authentication and ensuring secure access control for protected routes.

Using AI Tools

While AI tools were used to generate some code snippets, a proper understanding of the code and its flow is essential for maintaining the application. Always review the generated code and customize it

to fit your project’s requirements.




