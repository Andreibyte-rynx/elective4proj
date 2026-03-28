# Team Spotlight

**A beautiful, fully interactive front-end team introduction website**  
Built as a pure HTML/CSS/JavaScript project (no backend required).


## 🌟 About the Project

**Team Spotlight** is a modern multi-page website that showcases a Tokyo-based creative team.  
It features an attractive home page with member cards. Clicking any card takes you to a detailed individual profile with favorite food, drink, hobbies, fun facts, and a quote.

The site also includes dedicated pages for **About Us**, **Projects**, **Careers**, and **Contact**.

Perfect for portfolios, team introductions, or class projects that need to look professional and feel premium.

## ✨ Key Features

- Responsive, modern design with Tailwind CSS
- Fully functional dark/light mode (remembers your choice)
- Interactive team member cards → detailed profile pages
- Smooth animations and hover effects
- Multiple pages: Home, About, Projects, Careers, Contact
- Working contact form (front-end only with success message)
- Professional navigation with active page highlighting
- Automatic deployment via GitHub Actions (CI/CD)

## 📄 Pages

| Page            | Description |
|-----------------|-------------|
| `index.html`    | Home – Team grid with 4 member cards |
| `profile.html`  | Individual member profile (favorite food, drink, hobby, fun fact, quote) |
| `about.html`    | Company mission, values, and stats |
| `projects.html` | (Ready for future project showcase) |
| `careers.html`  | Open positions with apply buttons |
| `contact.html`  | Contact form + company info |

## 🛠 Tech Stack

- **HTML5** + **CSS3**
- **Tailwind CSS** (via CDN + custom styles)
- **Vanilla JavaScript** (no frameworks)
- **Font Awesome** icons
- **GitHub Pages** + **GitHub Actions** for automatic deployment

## 🚀 How to Run Locally

1. Clone or download the repository
2. Open `index.html` in your browser (double-click the file)
3. No installation or server required — it works 100% offline

## 📦 Project Structure
team-spotlight/
├── index.html
├── profile.html
├── about.html
├── projects.html
├── careers.html
├── contact.html
├── main.js
├── styles.css
├── .github/
│   └── workflows/
│       └── deploy.yml     ← Automatic deployment + validation
└── README.md
text## 🔄 Continuous Integration & Deployment

This repository uses **GitHub Actions** with a custom workflow (`.github/workflows/deploy.yml`):

- Every push to `main` is automatically validated (HTML syntax check + required files)
- If validation passes → the website is automatically deployed to GitHub Pages
- If validation fails → deployment is rejected and a clear error message is shown
- Your professor can push changes directly and they will go live automatically (if valid)

## 🎨 Design Highlights

- Clean Tokyo-inspired minimal aesthetic
- Consistent dark navbar across all pages
- Beautiful profile cards with hover animations
- Mobile-friendly responsive layout

## 👥 Team Members (Demo Data)

- **Member 1** – Lead Designer
- **Member 2** – Full-Stack Developer
- **Member 3** – Content & Marketing Lead
- **Member 4** – Product Photographer

*(Easy to replace with real names and photos in `main.js`)*

## 📝 License

This project was created for educational purposes. Feel free to use and modify it.

---

**Made For Sir RJ with ❤️ **

---

