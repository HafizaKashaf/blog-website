---
title: Modern CSS Technique
slug: css-tutorials
imageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
description: A comprehensive guide to modern CSS techniques, including Flexbox, CSS Grid, and custom properties
---


Modern CSS provides powerful tools for creating responsive and flexible web designs. This tutorial covers key CSS techniques, including Flexbox, CSS Grid, custom properties, and more.

## 1. Flexbox

Flexbox is a one-dimensional layout system that allows you to align and distribute space among items in a container, even when their size is unknown or dynamic. It is particularly useful for building complex layouts without relying on floats or positioning.

### Example: Basic Flexbox Layout
```css showLineNumbers
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```
In this example, the `.container` uses Flexbox to center its child elements both horizontally and vertically.

### Flexbox Properties:
- `display: flex` - Activates Flexbox layout on a container.
- `justify-content` - Aligns items horizontally (e.g., `center`, `space-between`).
- `align-items` - Aligns items vertically (e.g., `center`, `stretch`).

## 2. CSS Grid

CSS Grid is a two-dimensional layout system that enables you to create both rows and columns, offering more control over the placement of items than Flexbox.

### Example: Basic Grid Layout
```css showLineNumbers
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```
This example creates a grid with three equal-width columns, and the `gap` property ensures there’s space between the grid items.

### Grid Properties:
- `grid-template-columns` - Defines the column structure of the grid.
- `grid-template-rows` - Defines the row structure.
- `gap` - Adds space between grid items.

## 3. Custom Properties (CSS Variables)

CSS variables, also known as custom properties, allow you to define reusable values throughout your stylesheet. They make it easier to manage and update styles across large projects.

### Example: Using CSS Variables
```css showLineNumbers
:root {
  --primary-color: #3498db;
  --font-size: 16px;
}

.button {
  background-color: var(--primary-color);
  font-size: var(--font-size);
}
```
Here, the `--primary-color` and `--font-size` variables are defined globally and then used within the `.button` class.

## 4. Media Queries

Media queries are a cornerstone of responsive web design. They apply different styles based on device characteristics like screen size, resolution, or orientation.

### Example: Responsive Layout with Media Queries
```css showLineNumbers
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```
In this example, the layout changes to a column format for screens smaller than 768px in width.

### Media Query Properties:
- `max-width` / `min-width` - Defines the width range to apply the styles.
- `orientation` - Targets specific screen orientations (e.g., `portrait`, `landscape`).

---

By mastering these modern CSS techniques, you can create dynamic, responsive, and visually appealing web pages that work across a variety of devices and screen sizes.
