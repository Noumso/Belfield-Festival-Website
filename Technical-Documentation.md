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

[Link to Figma mockups]

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

{
  "_id": "ObjectId",
  "email": "user@example.com",
  "passwordHash": "hashed_password",
  "role": "user",  // "admin" or "user"
  "createdAt": "ISODate",
  "tickets": ["ticketId1", "ticketId2"]
}

- artists

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

- tickets

{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "type": "2-Day Pass",
  "price": 45,
  "purchaseDate": "ISODate",
  "qrCode": "string"  // encoded ticket info for validation
}

___


## 4. High-Level Sequence Diagrams

1. Ticket Purchase Flow

```plaintext
User -> Front-End: Click "Buy Ticket"
Front-End -> Back-End: POST /api/tickets {userId, ticketType}
Back-End -> Database: Save ticket record
Back-End -> Front-End: Return success + ticket details
Front-End -> User: Show confirmation and ticket QR code
```
2. User Login Flow

```plaintext
User -> Front-End: Submit login form
Front-End -> Back-End: POST /api/login {email, password}
Back-End -> Database: Verify credentials
Back-End -> Front-End: Return JWT token
Front-End -> User: Store token, redirect to dashboard
```
3. Admin Adds Artist

```plaintext
Admin -> Front-End: Submit artist form
Front-End -> Back-End: POST /api/artists {artistData}
Back-End -> Database: Save artist
Back-End -> Front-End: Return success message
Front-End -> Admin: Show confirmation
```

---

## 5. API Specifications

### External APIs

- **Shotgun API (optionnel)** : Utilisée pour l'intégration avec une plateforme de billetterie professionnelle, permettant des ventes de billets sécurisées et une validation efficace.

### Internal API Endpoints

| Endpoint         | Method | Description                         | Input                        | Output             |
|------------------|--------|-------------------------------------|-------------------------------|---------------------|
| `/api/login`     | POST   | Authenticate user                   | `{ email, password }`         | `{ token }`         |
| `/api/logout`    | POST   | Invalidate user session             | `{ token }`                   | `{ success: true }` |
| `/api/artists`   | GET    | Get all artists                     | None                          | `[ { artist }, ... ]` |
| `/api/artists`   | POST   | Add new artist (admin only)         | `{ name, genre, day, stage }` | `{ artist }`        |
| `/api/schedule`  | GET    | Get event schedule                  | Optional filters              | `[ { artist }, ... ]` |
| `/api/tickets`   | POST   | Purchase ticket                     | `{ userId, type }`            | `{ ticket }`        |
| `/api/users`     | GET    | Get user info (admin only)          | Query params                  | `[ { user }, ... ]` |

---

## 6. Source Control Management (SCM) & Quality Assurance (QA)

### SCM Strategy

- Dépôt hébergé sur **GitHub**.
- Branches :
  - `main` pour le code en production.
  - `dev` pour l'intégration des fonctionnalités et les tests.
  - `feature/*` pour les tâches ou fonctionnalités individuelles.
- Utiliser des **Pull Requests (PR)** pour les revues de code et l'intégration.
- Enforcer des messages de commit descriptifs et des commits fréquents.
- Protéger la branche `main` avec des revues de PR obligatoires.

### QA Strategy

- **Tests unitaires** avec Jest pour les composants React et la logique backend.
- **Tests d'API** avec Supertest.
- **Tests manuels** des flux utilisateurs clés : connexion, achat de billet, mises à jour admin.
- **GitHub Actions** pour l'intégration continue (CI), exécutant les tests sur les PR.
- **Environnement de staging** pour les tests d'acceptation avant la mise en production.

---

## 7. Technical Justifications

- **React.js** choisi pour son architecture orientée composants, sa réactivité, et sa large communauté.
- **Node.js avec Express** pour un backend API évolutif et flexible.
- **MongoDB Atlas** pour un design de schéma flexible, utile pour les données artistes et billets.
- **Authentification JWT** pour une gestion des sessions sécurisée et sans état.
- **Déploiement** via Vercel (frontend) et Render ou Railway (backend) pour simplifier l'hébergement et le CI/CD.
- **Intégration avec l'API Shotgun** pour profiter d’un service de billetterie éprouvé, réduisant la complexité du développement.

---

**Conclusion**  
This concludes the technical documentation blueprint for the Belfield Festival Website MVP.
It provides a clear roadmap for development, testing, and deployment, aligned with the project goals.