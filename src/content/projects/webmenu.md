---
title: Webmenu
link: https://www.webmenu.com.ar/info.html
description: A comprehensive restaurant management system with online ordering, table reservations, and menu management.
technologies:
  - NestJS
  - Vue.js
  - Framework7
  - Prisma
  - MySQL
images:
  - /images/projects/webmenu/hero.png
  - /images/projects/webmenu/dashboard.png
  - /images/projects/webmenu/menu-editor.png
---

# WebMenu - Restaurant Management System

WebMenu is a comprehensive platform designed for restaurants to manage their online presence efficiently.

## Features

- **Online Ordering**: Customers can browse menus and place orders directly from their phones
- **Table Reservations**: Built-in booking system with calendar integration
- **Menu Management**: Easy-to-use editor for updating dishes, prices, and categories
- **Analytics Dashboard**: Track orders, revenue, and customer behavior
- **Multi-language Support**: Available in Spanish and English

## Technical Details

The backend is built with NestJS, using Prisma ORM with MySQL database. The frontend uses Vue.js with Framework7 for a mobile-first responsive design that works seamlessly on both web and mobile devices.

### Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Mobile    │────▶│   NestJS    │────▶│    MySQL    │
│   (PWA)     │     │   Backend   │     │  Database   │
└─────────────┘     └─────────────┘     └─────────────┘
       │                   │
       ▼                   ▼
┌─────────────┐     ┌─────────────┐
│   Web App   │────▶│   Vue.js    │
│             │     │   Frontend  │
└─────────────┘     └─────────────┘
```

## Challenges

One of the main challenges was handling real-time updates for order status. We implemented WebSockets to provide instant notifications to both customers and staff when order status changed.

## Results

- **500+** restaurants using the platform
- **50,000+** orders processed monthly
- **4.8** star rating on app stores
