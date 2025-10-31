# 🚀  MVP Development and Execution – Belfield Festival Website

## 1. Stage Objectives

The **Execution stage** focused on transforming the design and architecture from Stage 3 into a working web application.  
During this phase, we developed and integrated both the front-end and back-end systems of the **Belfield Festival Website**, implemented the ticket purchase system via **Stripe**, and deployed the first live version of the backend.  

The primary objective was to deliver a functional **festival information and ticketing platform**, ready for internal testing and user validation.

---

## 2. Development Process

We adopted an **agile approach**, progressing in short iterations to gradually integrate each feature.  
Development tasks were divided between **frontend** and **backend** implementation, with continuous testing and deployment.

### 🧩 **Frontend Development (Next.js + TailwindCSS)**
- Core pages implemented:
  - **Home** – General overview of the festival  
  - **A propos** – Practical information (Festival history,location, etc.)  
  - **Festival** – Schedule and artist lineup  
  - **Ticket** – Ticket purchase and payment integration  
  - **Admin Dashboard** – Admin-only access for content and data management
- Shared components: `<Navbar />` and `<Footer />`
- Styled using **TailwindCSS** for responsiveness.
- Integrated **API calls** to fetch data from the backend (`/api/artists`, `/api/events`, `/api/tickets`).
- **Stripe Checkout** connected to simulate payment flow.

🛠️ *Note:* The **frontend deployment on Vercel is still pending**, as additional configuration and debugging are required.  
Currently, testing is done in a local development environment.

---

### ⚙️ **Backend Development (Node.js / Express / MongoDB)**

- Developed a modular REST API with the following main endpoints:

| Endpoint | Method | Description |
|-----------|---------|-------------|
| `/api/artists` | GET / POST | Manage artist data (public fetch, admin creation) |
| `/api/events` | GET / POST | Manage event schedule |
| `/api/tickets` | POST / GET | Create and list purchased tickets |
| `/api/webhook` | POST | Stripe webhook for payment validation |
| `/api/admin` | POST | Admin login and authentication |


- Implemented **admin-only authentication** using JWT (no public user accounts in this version).  
- Integrated **Stripe** for ticket purchases, including webhook verification via `STRIPE_WEBHOOK_SECRET`.  
- Connected backend to **MongoDB Atlas** for data storage (collections: `artists`, `events`, `tickets`, `admins`, `gallery`).  
- Deployed backend successfully to **Render**, with environment variables securely configured.

---
## 3. Database Design (MongoDB Atlas)

### Collections (example)
- **🎤artists**
  ```json

  {
   name: "D'RAM",
    style: "Electro",
    bio: "Le son phare du festival Belfield.",
    image: "https://www.instagram.com/woodland_festival/p/Cw0Lcr9ozWN/",
    socials: { instagram: "https://www.instagram.com/julesderramond/" },
    order: 1
  }

- **🎪Events**

```json
{
   title: "Soirée d'ouverture",
    description: "Concert d'ouverture avec DJ Belfield",
    date: "2025-08-15T20:00:00Z",
    location: "Parc de la Lère - Caussade",
    stage: "Main Stage",
    featured: true
}
```

---

## 4. Tools & Technologies Used

| Category        | Tools / Frameworks                         | Purpose                          |
|-----------------|-------------------------------------------|----------------------------------|
| Frontend        | Next.js, React, TailwindCSS                | User interface and page rendering |
| Backend         | Node.js, Express.js                         | REST API and server logic         |
| Database        | MongoDB Atlas                               | Persistent data storage           |
| Payments        | Stripe                                      | Online ticket payments            |
| Version Control | GitHub                                      | Code hosting and collaboration    |
| Deployment      | Render (backend), Vercel (frontend – pending) | Hosting and CI/CD                 |
| Testing         | Postman, Jest, Supertest                     | Manual and automated testing      |

---

## 5. Workflow & Collaboration

- Code reviewed and merged via Pull Requests
- Trello used to manage sprints, priorities, and progress tracking
- Weekly progress meetings to identify issues and next steps
- `.env` variables securely managed for API keys, MongoDB, and Stripe credentials

---

## 6. Key Challenges & Solutions

| Challenge                               | Description                                                   | Solution                                                                 |
|----------------------------------------|---------------------------------------------------------------|--------------------------------------------------------------------------|
| Frontend Deployment (Vercel)           | Build failed due to missing environment variables and path resolution errors. | Added `.env.local` file configuration; debugging still in progress.      |
| Stripe Webhook Handling                 | Verifying payment signatures caused request parsing issues.   | Implemented raw body middleware in Express to handle Stripe webhook verification. |
| Admin Authentication Only               | The initial plan included user login, but was simplified to admin login only. | Removed public auth endpoints and limited token-based access to `/api/admin`. |

---
## 7. Testing & Quality Assurance

- ✅ **API Testing:** All backend endpoints tested via Postman (GET, POST, PUT, DELETE)
- ⚠️ **Manual Testing:** Ticket purchase flow (Stripe test mode) is under verification; event retrieval and admin login have been confirmed
- ✅ **Unit Testing:** Basic tests implemented using Jest for backend routes
- ✅ **Deployment Validation:** Render backend tested live with connected MongoDB Atlas 


### API Test Example: Admin Login

**Endpoint:** `POST /api/admin/login`  
**Description:** Authenticate admin user and retrieve JWT token.  

**Request (curl):**
```bash
curl -X POST http://localhost:5000/api/admin/login \
  -H "Content-Type: application/json" \
  -d '{
        "email": "admin@belfieldfest.com",
        "password": "yourpassword"
      }'
```
Result 
```      
{
  "_id": "69024a70e4943d0d9aa63bdc",
  "username": "admin",
  "email": "admin@example.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MDI0YTcwZTQ5NDNkMGQ5YWE2M2JkYyIsImlhdCI6MTc2MTkxNDk1MiwiZXhwIjoxNzYyNTE5NzUyfQ.7iUnSFWSjB_USjJCYx49eXE8RUUjfY9fByayzEVG5Uk"
}
```
✅ Result: Successfully authenticated admin user and retrieved a valid JWT token.

### API Test Example: Get Events

**Endpoint:** `GET /api/events`  
**Description:** Retrieve all festival events.  

**Request (curl):**
```bash
curl -X GET http://localhost:5000/api/events \
  -H "Content-Type: application/json"
  ```
  Result
  ```
[
  {
    "_id": "69037825134d9902649d2923",
    "title": "LALUDE B2B GABRAIZE",
    "description": "",
    "date": "2025-08-15T00:00:00.000Z",
    "startTime": "19:00",
    "endTime": "20:00",
    "location": "Parc de la Lère - Caussade",
    "stage": "Main Stage",
    "featured": false,
    "createdAt": "2025-10-30T14:37:25.039Z",
    "updatedAt": "2025-10-30T14:37:25.039Z",
    "__v": 0
  }
]
```

---

## 8. Deployment Status

| Component | Platform | Status | Description |
|-----------|---------|--------|-------------|
| Backend   | Render  | ✅ Deployed successfully | Connected to MongoDB Atlas & Stripe |
| Frontend  | Vercel  | ⚙️ Pending | Build errors under investigation |
| Database  | MongoDB Atlas | ✅ Active | Cloud NoSQL storage |
| Payments  | Stripe  | ⚠️ Test mode partially verified | Ticket purchase flow still under verification |

**Backend URL (Render):**  
👉 [https://belfield-backend.onrender.com](https://belfield-backend.onrender.com)

---

## 9. Outcome

At the end of Stage 4, the backend API was fully implemented and deployed, and the Stripe-based ticketing system has been integrated but **ticket purchase flow is still under verification**.  
The frontend is functionally complete but requires further debugging for deployment on Vercel.  
Admin authentication and festival data management are operational, and the core pages provide all “Must Have” features defined in the project plan.

The platform is now ready for final integration testing, including completion of ticket purchase verification, and optimization in preparation for public release.

---

## 10. Next Steps

- Complete frontend deployment on Vercel
- Conduct full integration testing between frontend and backend
- Add automated tests for API and Stripe flows
- Prepare Stage 5 documentation (Project Closure & Evaluation)
