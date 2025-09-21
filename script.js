// Variables de estado
let musicPlaying = false;
let currentSong = null;
let clickCount = 0;
let messageIndex = 0;

// Mensajes para las flores
const messages = [
    "Eres mi luz 💛",
    "Mi felicidad eres tú 🌼",
    "Brillas más que el sol ☀️",
    "Eres mi razón para sonreír 😊",
    "Mi amor por ti crece cada día 🌻",
    "Eres única y especial 🌟",
    "Eres el mejor regalo 🎁",
    "Mi corazón es tuyo 💖",
    "Tus ojos son mi cielo ✨",
    "Eres mi paz en medio del caos 🌸",
    "Mi mundo gira por ti 🌍",
    "Siempre estás en mis pensamientos 💭",
    "Eres más dulce que la miel 🍯",
    "Gracias por existir 🙏",
    "Contigo todo es mejor 💕",
    "Eres mi sueño hecho realidad 🌙",
    "El tiempo a tu lado vuela ⏳",
    "Eres la melodía de mi vida 🎶"
];

// Mensajes especiales que se mostrarán después de 3 clics
const specialMessages = [
    "Eres la persona más especial en mi vida 💛",
    "Cada momento a tu lado es un regalo 🌼",
    "Tu sonrisa ilumina mis días más oscuros ☀️"
];

// Inicializar elementos
const audio = document.getElementById('bg-music');
const musicControl = document.getElementById('music-control');
const revealBtn = document.getElementById('reveal-btn');
const specialMessage = document.getElementById('special-message');
const messageDisplay = document.getElementById('message-display');

// URL de la canción (seleccionada por defecto)
const defaultSongUrl = "https://github.com/Asprog3rX/Tareas/raw/refs/heads/main/saim.co.za%20-%20Coldplay%20-%20Yellow(Sub%20Espa%C3%B1ol%20Lyrics)%20(256%20KBps)%20(1).mp3";

// Partículas amarillas cayendo
function createBgParticle() {
    const p = document.createElement('div');
    p.className = 'bg-particle';
    p.style.left = (Math.random() * 100) + 'vw';
    const size = 8 + Math.random() * 16;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.opacity = 0.5 + Math.random() * 0.5;
    p.style.animationDuration = (3 + Math.random() * 3) + 's';
    document.body.appendChild(p);
    p.addEventListener('animationend', () => p.remove());
}

// Crear confeti
function createConfetti() {
    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = (Math.random() * 100) + 'vw';
        confetti.style.backgroundColor = `hsl(${50 + Math.random() * 15}, 100%, ${60 + Math.random() * 20}%)`;
        confetti.style.animationDuration = (3 + Math.random() * 3) + 's';
        confetti.style.width = (10 + Math.random() * 10) + 'px';
        confetti.style.height = (10 + Math.random() * 10) + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Crear destello de luz
function createLightFlare() {
    const flare = document.createElement('div');
    flare.className = 'light-flare';
    flare.style.left = (Math.random() * 100) + 'vw';
    flare.style.top = (Math.random() * 100) + 'vh';
    document.body.appendChild(flare);
    
    setTimeout(() => {
        flare.remove();
    }, 8000);
}

// Crear fuegos artificiales
function createFirework() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight / 2;
    
    for (let i = 0; i < 50; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.setProperty('--x', `${x}px`);
        firework.style.setProperty('--y', `${y}px`);
        firework.style.setProperty('--random1', Math.random() * 2 - 1);
        firework.style.setProperty('--random2', Math.random() * 2 - 1);
        firework.style.backgroundColor = `hsl(${45 + Math.random() * 15}, 100%, ${50 + Math.random() * 30}%)`;
        document.body.appendChild(firework);
        
        setTimeout(() => {
            firework.remove();
        }, 1000);
    }
}

// Rellenar parte inferior con GIFs
function fillBottomBar() {
    const bar = document.getElementById('gif-bottom-bar');
    bar.innerHTML = '';
    const gifUrl = "https://i.pinimg.com/originals/3d/3c/b1/3d3cb1090cb648efa2c55d542ae5d49d.gif";
    const imgWidth = window.innerWidth < 600 ? 100 : 130;
    const count = Math.ceil(window.innerWidth / imgWidth) + 2;
    for (let i = 0; i < count; i++) {
        const img = document.createElement('img');
        img.src = gifUrl;
        bar.appendChild(img);
    }
}

// Mostrar mensaje especial después de 3 clics
function showSpecialMessage() {
    if (messageIndex < specialMessages.length) {
        specialMessage.textContent = specialMessages[messageIndex];
        specialMessage.classList.add('active');
        createConfetti();
        createFirework();
        
        setTimeout(() => {
            specialMessage.classList.remove('active');
        }, 5000);
        
        messageIndex++;
        
        // Si es el primer mensaje, reproducir la música
        if (messageIndex === 1) {
            audio.src = defaultSongUrl;
            currentSong = defaultSongUrl;
            audio.play();
            musicPlaying = true;
            musicControl.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
    }
}

// Control de música
musicControl.addEventListener('click', function() {
    if (musicPlaying) {
        audio.pause();
        musicControl.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else {
        if (currentSong) {
            audio.play();
            musicControl.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            // Si no hay canción seleccionada, reproducir la predeterminada
            audio.src = defaultSongUrl;
            currentSong = defaultSongUrl;
            audio.play();
            musicControl.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
    }
    musicPlaying = !musicPlaying;
});

// Botón de revelar mensaje
revealBtn.addEventListener('click', function() {
    showSpecialMessage();
});

// Mostrar mensaje en el área de mensajes
function showMessageInDisplay(message) {
    messageDisplay.innerHTML = `<p>${message}</p>`;
    setTimeout(() => {
        messageDisplay.innerHTML = '';
    }, 7000); // ahora dura 5 segundos
}

// Crear varias FLORES amarillas en cada click
document.addEventListener("click", (e) => {
    clickCount++;
    
    // Después de 3 clics, mostrar mensajes especiales
    if (clickCount >= 3) {
        showSpecialMessage();
        clickCount = 0; // Reiniciar contador
    }
    
    const total = 8; // 8 flores, cada una con un mensaje diferente
    
    for (let i = 0; i < total; i++) {
        const flowerContainer = document.createElement("div");
        flowerContainer.className = "flower";
        
        const flower = document.createElement("img");
        flower.src = "https://i.pinimg.com/736x/71/5e/33/715e33b42809d7f58348cf4ef1bf2382.jpg";
        
        const message = document.createElement("div");
        message.className = "flower-message";
        message.textContent = messages[i];
        
        const size = 70 + Math.random() * 50;
        flower.style.width = size + "px";
        flower.style.height = "auto";
        
        flowerContainer.style.left = e.clientX + "px";
        flowerContainer.style.top = e.clientY + "px";
        
        flowerContainer.appendChild(flower);
        flowerContainer.appendChild(message);
        
        const angle = Math.random() * 2 * Math.PI;
        const distance = 100 + Math.random() * 150;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        
        flowerContainer.animate([
            { transform: `translate(-50%, -50%) scale(0.2)`, opacity: 0 },
            { transform: `translate(calc(-50% + ${dx/2}px), calc(-50% + ${dy/2}px)) scale(1)`, opacity: 1 },
            { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(1.2)`, opacity: 0 }
        ], {
            duration: 2500 + Math.random() * 1000,
            easing: "ease-out",
            fill: "forwards"
        });
        
        document.body.appendChild(flowerContainer);
        setTimeout(() => flowerContainer.remove(), 3500);
    }
    
    // Mostrar un mensaje aleatorio en el área de mensajes
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showMessageInDisplay(randomMessage);
    
    createConfetti();
    createFirework();
});

// Inicializar
window.addEventListener('load', function() {
    fillBottomBar();
    
    // Iniciar efectos
    setInterval(() => {
        for (let i = 0; i < 2; i++) createBgParticle();
    }, 350);
    
    setInterval(createLightFlare, 5000);
    setInterval(createFirework, 10000); // Fuegos artificiales cada 10 segundos
    
    // Configurar la canción predeterminada
    audio.src = defaultSongUrl;
    currentSong = defaultSongUrl;
});

window.addEventListener('resize', fillBottomBar);