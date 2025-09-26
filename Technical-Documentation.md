# 📘 Technical Documentation – Belfield Festival Website

---

## 1. User Stories & Mockups

### User Stories (MoSCoW Prioritization)

#### Must Have
- As a user, I want to view practical information (location, transport, schedule) so that I can plan my visit to the festival.
- As a user, I want to browse the event schedule by day and stage to organize which performances to attend.
- As a user, I want to purchase tickets online so that I can secure my attendance.
- As an admin, I want to add or update artists, schedule, and information via an admin dashboard without developer intervention.

#### Should Have
- As a user, I want to create an account to access and manage my tickets.
- As a user, I want to browse photos and videos from previous editions to get a feel of the festival atmosphere.
- As an admin, I want to manage registered users.

#### Could Have
- As a user, I want to filter artists by music genre to find my preferred acts easily.
- As a user, I want to receive email confirmations after ticket purchases.

#### Won't Have
- Native mobile app development
- Multilingual support
- Real-time chat or live streaming

### Mockups

Wireframes created for key pages using Figma:  
- Home  
- Schedule  
- Practical Information  
- Ticketing (login/signup and purchase)  
- Admin Dashboard  

<img width="1170" height="1241" alt="image" src="https://github.com/user-attachments/assets/454f4bce-54aa-4c37-8510-8da4077d946f" />

---

## 2. System Architecture

```plaintext
                                +------------------+
                                |     User         |
                                +------------------+
                                          |
                                          v
                             +------------------------+
                             |    Front-End (React)   |
                             +------------------------+
                             | Pages: Home, Info,     |
                             | Schedule, Ticketing    |
                             +------------------------+
                                          |
                                          v
                      +----------------------------------------+
                      |      Back-End (Node.js / Express)      |
                      +----------------------------------------+
                      | Routes: /artists, /schedule, /auth,    |
                      | /tickets                               |
                      +----------------------------------------+
                                          |
                                          v
                          +-----------------------------+
                          |      MongoDB Database       |
                          +-----------------------------+
                          | Collections: users, artists, |
                          | tickets                     |
                          +-----------------------------+

                (Optional integration with Shotgun ticketing API)

___


## 3. Components, Classes & Database Design

- Front-End Components
- <Navbar /> – Navigation bar
- <HomePage /> – Festival overview and welcome
- <SchedulePage /> – Displays the schedule by day and stage
- <InfoPage /> – Practical information about the festival
- <TicketPage /> – Ticket purchase and login/signup
- <AdminDashboard /> – Admin tools for content management
- <ArtistCard /> – Displays artist info in schedule

Database Collections (MongoDB)

- users

```json
{
  "_id": "ObjectId",
  "email": "user@example.com",
  "passwordHash": "hashed_password",
  "role": "user",  // "admin" or "user"
  "createdAt": "ISODate",
  "tickets": ["ticketId1", "ticketId2"]
}
```
- artists
```json
{
  "_id": "ObjectId",
  "name": "Artist Name",
  "genre": "Electronic",
  "description": "Short bio",
  "image": "image_url",
  "day": "friday",
  "stage": "Main Stage",
  "time": "22:00"
}
```
- tickets
```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "type": "2-Day Pass",
  "price": 45,
  "purchaseDate": "ISODate",
  "qrCode": "string"  // encoded ticket info for validation
}
```
___


## 4. High-Level Sequence Diagrams

1. Ticket Purchase Flow
<img src="https://raw.githubusercontent.com/Noumso/Belfield-Festival-Website/main/Diagram/TickectDiagram.svg" alt="Ticket Diagram" width="600" />

2. User Login Flow

<img src="https://raw.githubusercontent.com/Noumso/Belfield-Festival-Website/main/Diagram/UsersDiagram.svg" alt="Users Diagram" width="600" />

3. Admin Adds Artist

<img src="https://raw.githubusercontent.com/Noumso/Belfield-Festival-Website/main/Diagram/AdminDiagram.svg" alt="Admin Diagram" width="600" />

---

## 5. API Specifications

### External APIs

- **Shotgun API (optional)**: Used for integration with a professional ticketing platform, enabling secure ticket sales and efficient validation.

### Internal API Endpoints

| Endpoint         | Method | Description                         | Input                        | Output               |
|------------------|--------|-------------------------------------|-------------------------------|-----------------------|
| `/api/login`     | POST   | Authenticate user                   | `{ email, password }`         | `{ token }`           |
| `/api/logout`    | POST   | Invalidate user session             | `{ token }`                   | `{ success: true }`   |
| `/api/artists`   | GET    | Get all artists                     | None                          | `[ { artist }, ... ]` |
| `/api/artists`   | POST   | Add new artist (admin only)         | `{ name, genre, day, stage }` | `{ artist }`          |
| `/api/schedule`  | GET    | Get event schedule                  | Optional filters              | `[ { artist }, ... ]` |
| `/api/tickets`   | POST   | Purchase ticket                     | `{ userId, type }`            | `{ ticket }`          |
| `/api/users`     | GET    | Get user info (admin only)          | Query params                  | `[ { user }, ... ]`   |

---

## 6. Source Control Management (SCM) & Quality Assurance (QA)

### SCM Strategy

- Repository hosted on **GitHub**.
- Branches:
  - `main` for production code.
  - `dev` for feature integration and testing.
  - `feature/*` branches for individual tasks/features.
- Use **Pull Requests (PRs)** for code review and integration.
- Enforce descriptive commit messages and frequent commits.
- Protect the `main` branch with mandatory PR reviews.

### QA Strategy

- **Unit testing** with Jest for React components and backend logic.
- **API endpoint testing** with Supertest.
- **Manual testing** of key user flows: login, ticket purchase, admin updates.
- **GitHub Actions** for Continuous Integration (CI) to run tests on PRs.
- **Staging environment** deployed for acceptance testing before production release.

---

## 7. Technical Justifications

- **React.js** chosen for its component-driven architecture, responsiveness, and large community support.
- **Node.js with Express** provides a scalable, flexible backend API.
- **MongoDB Atlas** offers a flexible schema design, ideal for artist and ticket data.
- **JWT Authentication** enables secure, stateless session management.
- **Deployment** via Vercel (frontend) and Render or Railway (backend) simplifies hosting and CI/CD.
- **Integration with the Shotgun API** leverages an established ticketing service, reducing development complexity.

---

**Conclusion**  
This document concludes the technical blueprint for the **Belfield Festival Website MVP**.  
It provides a clear roadmap for development, testing, and deployment, aligned with the project's goals.
