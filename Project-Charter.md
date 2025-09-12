# 📘 Project Charter – Belfield Festival Website

---

## 🎯 Project Objectives

**Purpose:**  
The Belfield Festival Website project aims to provide a professional, responsive, and centralized online platform for the Belfield Association. It will serve as the festival’s official website, helping to increase visibility, streamline communication, and improve the experience for attendees, partners, and organizers.

**SMART Objectives:**
1. Deliver a responsive and user-friendly website showcasing festival details, schedule, and media content by the end of Stage 4.
2. Integrate an admin dashboard allowing content updates (text, images, events) without developer intervention.
- 3. Enable easy access to the ticketing platform and practical information (location, transport) to reduce information requests by 50%.
+ 3. Provide a built-in ticketing system that allows users to create an account, log in, and purchase tickets securely.
+ 4. Provide practical information (location, transport) to reduce common user inquiries by 50%.

---

## 👥 Stakeholders and Team Roles

**Internal Stakeholders:**
| Role                | Name               | Responsibilities                                                 |
|---------------------|--------------------|------------------------------------------------------------------|
|Project Manager & Communication Lead        | Noumane Bouqetyb        |Manage planning, coordinate with Belfield Association, ensure deadlines |
|UX/UI & Content Manager  | Gabriel Cohen   |  Design mockups, ensure usability, manage website content | 
|Technical Lead | Emi Hatano  | Lead frontend & backend development, support technical decisions |
|Developers (All) | Whole Team |Collaboratively code, test, and prepare the final presentation |

**External Stakeholders:**
| Role                 | Organization        | Responsibilities                                  |
|----------------------|---------------------|---------------------------------------------------|
| Client               | Belfield Association | Provide content, validate design, define priorities |
| End Users            | Festival Audience    | Use the website to get information, access tickets |
|Technical Mentors  | Holberton Tutors  | Provide technical support, review deliverables
 |

---

## 🔍 Scope

**In-Scope:**
- Responsive and accessible public-facing website
- Homepage with general festival presentation
- Dynamic event schedule (by day, stage, artist)
- Media gallery (photos/videos)
- Practical information section (location, transport, FAQ)
- Admin dashboard for content management
- Integration with Shotgun ticketing platform
- Built-in ticketing system with user authentication (account creation/login)
- Optional integration with Shotgun if required

**Out-of-Scope:**
- Native mobile app development
- Multilingual support
- Full-scale e-commerce platform
- Real-time chat or live streaming features
- External payment gateway development (Stripe/PayPal SDKs will be used instead)
---

## ⚠️ Risks and Mitigation Strategies

| Risk                                              | Mitigation Strategy                                                  |
|---------------------------------------------------|----------------------------------------------------------------------|
| Delay in content delivery from the association    | Request all content by a fixed early deadline with reminders         |
| Coordination challenges in team development                 |    Use Trello and weekly meetings to align progress                    |
| Different skill levels among members             | Assign tasks based on strengths, use pair programming for complex tasks, and schedule short knowledge-sharing sessions within the team       |
| Bugs or regressions in admin dashboard            | Write tests and perform frequent manual QA during development        |
| Security vulnerabilities in account/login system  | Use Firebase Auth or Auth0, avoid storing passwords manually         |


---

## 📅 High-Level Project Plan

| Stage                        | Duration    | Description                                         |
|-----------------------------|-------------|-----------------------------------------------------|
| Stage 1 – Idea Development  | Week 1–2    | Brainstorm, evaluate, and select MVP concept        |
| Stage 2 – Project Charter   | Week 3–4    | Define scope, risks, objectives, timeline           |
| Stage 3 – Technical Docs    | Week 5–6    | Design system architecture, mockups, and workflows  |
| Stage 4 – MVP Development   | Week 7–10   |  Team collaborates on frontend & backend, build and test core features  |
| Stage 5 – Project Closure   | Week 11–12  | Final presentation, reflections, and documentation  |

---

✅ **Status:** Stage 2 – Project Charter in Progress  
🗂️ **Next Deliverable:** Technical Documentation (system design and wireframes)

---

> _This document will evolve during the project. Updates may occur to accommodate new stakeholder requirements or unexpected project developments._
