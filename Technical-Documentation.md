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
