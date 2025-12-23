# Expense Management App

## 📱 Overview

**Expense Management App** is an intelligent mobile application designed to help users manage their finances with discipline and ease. The app enforces mandatory allocation of every income, provides AI-powered financial coaching, reduces impulsive spending through smart alerts, and enables collective savings among friends.

## 🎯 Key Features

### Core Functionality

- **User Authentication**: Secure registration and login with JWT-based authentication
- **Financial Objectives**: Create and track multiple financial goals with target amounts, priorities, and deadlines
- **Mandatory Income Allocation**: Every income must be distributed 100% across objectives and spending categories
- **Expense Tracking**: Record expenses with categories and optional links to objectives
- **Smart Anti-Temptation Alerts**: AI-powered alerts before expense validation to reduce impulsive spending
- **Dashboard**: Unified view of allocated funds, objective progress, and active collective projects
- **Collective Projects**: Create and manage shared savings goals with friends via invitation links or codes

### AI Coach Features

- **Spending Habit Analysis**: AI analyzes income and expense patterns
- **Behavioral Alerts**: Notifications for repetitive, impulsive, or off-track spending
- **Intelligent Allocation**: AI-assisted suggestions for income distribution
- **Daily Motivation**: Personalized messages, congratulations, and financial projections
- **Conversation Support**: Simple Q&A interface with the financial AI coach

## 🏗️ Project Structure

```
expense-management-app/
├── README.md                 # Project documentation
├── docs/
│   ├── analysis.md          # Project analysis and requirements
│   ├── class_diagram.md     # UML class diagram
│   └── class_documentation.md # Detailed class descriptions
├── src/                      # Source code (to be determined)
├── tests/                    # Test suite (to be determined)
└── .gitignore
```

## 📋 MVP Scope

### Sprint 1: Foundations
- User registration and authentication
- Profile management
- Create and track financial objectives
- Record income with mandatory 100% allocation
- Manual and AI-assisted allocation modes

### Sprint 2: Expenses & Dashboard
- Record and categorize expenses
- Anti-temptation alerts before expense validation
- Main dashboard with global overview
- Visual progress tracking for objectives

### Sprint 3: AI Coach & Social
- AI-powered spending habit analysis
- Objective status alerts
- Daily AI coaching messages
- Chat interface with AI coach
- Collective project creation and management
- Friend invitations and project contributions

## 🔐 Security & Data

- **Authentication**: JWT-based token authentication
- **Data Storage**: Secure backend with encrypted sensitive data
- **Privacy**: User data is private and not shared without consent
- **No Banking Integration (MVP)**: Manual data entry only (future: banking API integration)

## 💱 Supported Features

- **Currency**: FCFA (configurable per user)
- **Platforms**: Mobile (Android priority, iOS support planned)
- **Data Entry**: Manual (no automatic bank sync in MVP)

## 🛠️ Technology Stack

*To be determined during development phase*

Potential options:
- Frontend: React Native, Flutter, or Expo
- Backend: Node.js/Express, Python/FastAPI, or similar
- Database: PostgreSQL, MongoDB, or Firebase
- AI Integration: OpenAI API, Hugging Face, or custom ML models

## 📊 Data Model

The application uses the following core entities:

| Entity | Purpose |
| :--- | :--- |
| **User** | Represents the application user with authentication credentials |
| **Objective** | Financial goal with target amount, priority, and deadline |
| **Income** | Money received by the user |
| **Allocation** | Distribution of income to objectives or spending categories |
| **Expense** | Money spent by the user with category and optional objective link |
| **Category** | Spending categories (food, transport, entertainment, etc.) |
| **CollectiveProject** | Shared savings goal among multiple users |
| **ProjectParticipation** | User's contribution to a collective project |
| **AIAlert** | Messages, advice, and warnings from the AI coach |

For detailed class descriptions and UML diagram, see `docs/class_documentation.md`.

## 🚀 Getting Started

*Instructions will be added once the technology stack is finalized.*

## 📝 Development Roadmap

1. **Phase 1**: Technology selection and architecture design
2. **Phase 2**: Backend API development (Sprint 1 features)
3. **Phase 3**: Mobile frontend development (Sprint 1 features)
4. **Phase 4**: Sprint 2 implementation (Expenses & Dashboard)
5. **Phase 5**: Sprint 3 implementation (AI Coach & Social)
6. **Phase 6**: Testing, optimization, and deployment

## 🤝 Contributing

Contributions are welcome! Please follow the project's coding standards and submit pull requests for review.

## 📄 License

This project is licensed under the MIT License. See LICENSE file for details.

## 📞 Contact & Support

For questions or support, please open an issue on GitHub.

---

**Last Updated**: December 23, 2025  
**Project Status**: Planning Phase
