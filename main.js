function initializeTailwind() {
    tailwind.config = { darkMode: 'class', theme: { extend: {} } }
}

const teamMembers = [
    { id: 1, name: "Aiko Tanaka", role: "Lead Designer", photo: "https://picsum.photos/id/1011/800/800", heroImage: "https://picsum.photos/id/1015/1600/900", bio: "Passionate designer who turns ideas into beautiful, user-friendly experiences. Obsessed with clean interfaces and Japanese minimalism.", favoriteFood: "Sushi & Sashimi", favoriteDrink: "Matcha Latte", hobby: "Urban sketching & photography", funFact: "Once designed a whole app in 24 hours during a hackathon", quote: "Good design is invisible" },
    { id: 2, name: "Hiroshi Sato", role: "Full-Stack Developer", photo: "https://picsum.photos/id/1005/800/800", heroImage: "https://picsum.photos/id/201/1600/900", bio: "Code architect who loves building fast, reliable systems. Always exploring new technologies and optimizing every line of code.", favoriteFood: "Tonkotsu Ramen", favoriteDrink: "Cold Brew Coffee", hobby: "Building mechanical keyboards", funFact: "Can solve a Rubik's cube in under 45 seconds", quote: "Code is poetry in motion" },
    { id: 3, name: "Sakura Yamamoto", role: "Content & Marketing Lead", photo: "https://picsum.photos/id/1009/800/800", heroImage: "https://picsum.photos/id/1003/1600/900", bio: "Storyteller who connects people with meaningful brands. Loves creating content that sparks joy and conversation.", favoriteFood: "Okonomiyaki", favoriteDrink: "Hojicha Tea", hobby: "Reading mystery novels & journaling", funFact: "Has visited 18 countries and counting", quote: "Stories connect us all" },
    { id: 4, name: "Kenji Nakamura", role: "Product Photographer", photo: "https://picsum.photos/id/1016/800/800", heroImage: "https://picsum.photos/id/133/1600/900", bio: "Visual storyteller capturing the soul of products and moments. Obsessed with light, composition, and authentic emotions.", favoriteFood: "Takoyaki & Street Food", favoriteDrink: "Yuzu Sparkling Water", hobby: "Film photography & cycling", funFact: "Shot a campaign that went viral with 3.2 million views", quote: "Every frame tells a story" }
]

function renderTeamGrid() {
    const grid = document.getElementById('team-grid')
    if (!grid) return
    grid.innerHTML = ''

    teamMembers.forEach(member => {
        const cardHTML = `
            <a href="profile.html?id=${member.id}" class="card-hover block bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-xl border border-transparent hover:border-sky-200 dark:hover:border-sky-900">
                <div class="h-64 relative">
                    <img src="${member.photo}" alt="${member.name}" class="w-full h-full object-cover">
                    <div class="absolute top-4 right-4 bg-white dark:bg-zinc-900 text-xs font-semibold px-3 py-1 rounded-2xl shadow">${member.role}</div>
                </div>
                <div class="p-6">
                    <h3 class="text-2xl font-semibold mb-1">${member.name}</h3>
                    <p class="text-sky-600 dark:text-sky-400 font-medium">${member.favoriteFood}</p>
                    <p class="text-zinc-500 dark:text-zinc-400 text-sm mt-4 line-clamp-2">${member.bio.substring(0, 110)}...</p>
                </div>
            </a>
        `
        grid.innerHTML += cardHTML
    })
}

function loadProfile() {
    const params = new URLSearchParams(window.location.search)
    const id = parseInt(params.get('id'))
    if (!id) { window.location.href = 'index.html'; return }

    const member = teamMembers.find(m => m.id === id)
    if (!member) { window.location.href = 'index.html'; return }

    // Hero & basic info
    document.getElementById('profile-hero-image').src = member.heroImage
    document.getElementById('profile-name').textContent = member.name
    document.getElementById('profile-role').textContent = member.role
    document.getElementById('profile-bio').textContent = member.bio

    // Favorites & Fun Facts cards
    const infoContainer = document.getElementById('info-cards')
    infoContainer.innerHTML = `
        <div class="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl">
            <div class="text-5xl mb-4">🍣</div>
            <h4 class="font-semibold text-lg mb-1">Favorite Food</h4>
            <p class="text-3xl font-medium">${member.favoriteFood}</p>
        </div>
        <div class="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl">
            <div class="text-5xl mb-4">🥤</div>
            <h4 class="font-semibold text-lg mb-1">Favorite Drink</h4>
            <p class="text-3xl font-medium">${member.favoriteDrink}</p>
        </div>
        <div class="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl">
            <div class="text-5xl mb-4">🎨</div>
            <h4 class="font-semibold text-lg mb-1">Hobby / Passion</h4>
            <p class="text-3xl font-medium">${member.hobby}</p>
        </div>
        <div class="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl">
            <div class="text-5xl mb-4">✨</div>
            <h4 class="font-semibold text-lg mb-1">Fun Fact</h4>
            <p class="text-3xl font-medium">${member.funFact}</p>
        </div>
        <div class="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl col-span-2 md:col-span-3 lg:col-span-1 flex flex-col justify-center">
            <div class="text-6xl text-sky-300 mb-4">“</div>
            <p class="italic text-2xl font-light leading-tight">${member.quote}</p>
        </div>
    `
}

function toggleDarkMode() {
    const html = document.documentElement
    const isDark = !html.classList.contains('dark')
    html.classList.toggle('dark')
    localStorage.setItem('darkMode', isDark)   // saved like your old script
}

function handleContact(e) { /* unchanged - your nice success message */ }

function setActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html'
    document.querySelectorAll('nav a.nav-link').forEach(a => {
        if (a.getAttribute('href') === path || (path.includes('profile') && a.getAttribute('href') === 'index.html')) {
            a.classList.add('active')
        }
    })
}

function init() {
    initializeTailwind()

    // === EXACT SAME LOGIC AS YOUR OLD script.js ===
    const saved = localStorage.getItem('darkMode')
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const useDark = saved !== null ? saved === 'true' : systemDark

    if (useDark) document.documentElement.classList.add('dark')

    // Update gear icon to sun/moon if you want (optional)
    const icon = document.getElementById('theme-icon')
    if (icon) icon.classList.toggle('fa-sun', useDark)

    if (document.getElementById('team-grid')) renderTeamGrid()
    if (document.getElementById('profile-name')) loadProfile()
    setActiveNav()

    console.log('%c✅ Team Spotlight ready • Auto system theme fixed (like your old site)', 'color:#0ea5e9')
}

document.addEventListener('DOMContentLoaded', init)