# Trimurti-web-login
A modern and visually engaging React-based login page for Trimurti Solutions, inspired by the Hindu Trimurti — Brahma, Vishnu, and Shiva. This project features 3D elements, responsive design, and Tailwind CSS integration, offering a smooth and secure user login experience.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Docker Usage (Development)

To run the Vite development server inside Docker (for development, with hot reload):

```bash
# Build the development image
docker build -f Dockerfile.dev -t trimurti-web-login-dev .

# Run the development server (Vite on port 5173)
docker run -p 5173:5173 trimurti-web-login-dev
```

To enable live code updates (hot reload) without rebuilding the image every time, run:

```bash
docker run -p 5173:5173 -v $(pwd):/app trimurti-web-login-dev
```

Then visit: http://localhost:5173