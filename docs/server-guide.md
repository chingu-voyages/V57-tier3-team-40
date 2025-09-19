# Server Side Guide

## Quick Start

### Running the Server
```bash
cd server
npm install
npm run dev
```
Server will run at: `http://localhost:4000`

## API Endpoints

### Base URL
`http://localhost:4000/api`

### Available Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| POST | `/api/users` | Create new user |

### API Examples

#### 1. Get All Users
```bash
GET http://localhost:4000/api/users
```

**Response:**
```json
[
  {
    "id": "cmfr2kci40001v6m4gan97xgx",
    "email": "test@example.com",
    "role": "user",
    "last_login": null,
    "created_at": "2025-09-19T16:44:00.430Z",
    "updated_at": "2025-09-19T16:44:00.430Z"
  }
]
```

#### 2. Get User by ID
```bash
GET http://localhost:4000/api/users/cmfr2kci40001v6m4gan97xgx
```

**Response:**
```json
{
  "id": "cmfr2kci40001v6m4gan97xgx",
  "email": "test@example.com",
  "role": "user",
  "last_login": null,
  "created_at": "2025-09-19T16:44:00.430Z",
  "updated_at": "2025-09-19T16:44:00.430Z"
}
```

**Error Response (User not found):**
```json
{
  "message": "User not found"
}
```

#### 3. Create New User
```bash
POST http://localhost:4000/api/users
Content-Type: application/json

{
  "email": "newuser@example.com",
  "password_hash": "hashed_password_here",
  "role": "user"
}
```

**Response:**
```json
{
  "id": "cmfr2sebq0000v6y4n8e5tkyx",
  "email": "newuser@example.com",
  "role": "user",
  "last_login": null,
  "created_at": "2025-09-19T16:50:16.071Z",
  "updated_at": "2025-09-19T16:50:16.071Z"
}
```

### User Roles
- `user` - Regular user
- `admin` - Administrator

## Project Structure

```
server/
├── src/
│   ├── controllers/     # Handle HTTP requests
│   ├── services/        # Business logic
│   ├── routes/          # API endpoints
│   ├── models/          # Data models
│   ├── mappers/         # Data transformation
│   ├── middleware/      # Request processing
│   ├── config/          # Configuration
│   ├── types/           # TypeScript types
│   └── utils/           # Helper functions
├── prisma/
│   └── schema.prisma    # Database schema
├── index.ts             # Server entry point
└── .env                 # Environment variables
```

## How to Add New Features

### Example: Adding a Product endpoint

1. **Create the type** in `src/types/types/`:
```typescript
export type Product = {
    id: string;
    name: string;
    price: number;
};
```

2. **Add to Prisma schema** in `prisma/schema.prisma`:
```prisma
model Product {
  id         String   @id @default(cuid())
  name       String
  price      Float
  created_at DateTime @default(now())
  updated_at DateTime @updatedAt
}
```

3. **Create service** in `src/services/`:
```typescript
export const productService = {
    async getAllProducts() {
        return await prisma.product.findMany();
    }
};
```

4. **Create controller** in `src/controllers/`:
```typescript
export const productController = {
    async getAllProducts(req, res, next) {
        try {
            const products = await productService.getAllProducts();
            res.json(products);
        } catch (error) {
            next(error);
        }
    }
};
```

5. **Add routes** in `src/routes/`:
```typescript
router.get('/', productController.getAllProducts);
```

6. **Export from index files** (barrel exports)

## Testing with Postman

### Setup
1. Open Postman
2. Create new collection "API Tests"
3. Add requests for each endpoint

### Test Examples

**Create User:**
1. Method: POST
2. URL: `http://localhost:4000/api/users`
3. Body: raw JSON
```json
{
  "email": "test@example.com",
  "password_hash": "hashedpassword123",
  "role": "user"
}
```

**Get All Users:**
1. Method: GET
2. URL: `http://localhost:4000/api/users`

**Get Specific User:**
1. Method: GET
2. URL: `http://localhost:4000/api/users/{user_id}`

## Database Commands

```bash
# Generate Prisma client after schema changes
npx prisma generate

# Push schema changes to database
npx prisma db push

# Open database GUI
npx prisma studio

# Reset database (WARNING: deletes all data)
npx prisma db push --force-reset
```

## Common Issues

### Issue: User creation fails with enum error
**Solution:** Run `npx prisma db push` to sync database schema

### Issue: Cannot connect to database
**Solution:** Check DATABASE_URL in .env file

### Issue: Server not starting
**Solution:** Check if port 4000 is already in use

## Environment Variables

Create `.env` file in server folder:
```env
NODE_ENV=development
PORT=4000
DATABASE_URL="your_postgresql_connection_string"
JWT_SECRET=your_secret_key
```

## Development Tips

1. **Always use barrel exports** - Export from index.ts files
2. **Keep controllers simple** - Business logic goes in services
3. **Use TypeScript types** - Define types for all data
4. **Handle errors properly** - Use try-catch in controllers
5. **Test with Postman** - Verify endpoints work correctly

---

*Server running at: http://localhost:4000*