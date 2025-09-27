// Company logos (replace with your own URLs if needed)
const logos = [
  { name: "Sendbox", url: "https://via.placeholder.com/100x60?text=Sendbox" },
  { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg" },
  { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Budapest Bank", url: "https://via.placeholder.com/100x60?text=Budapest+Bank" },
  { name: "Coinfy", url: "https://via.placeholder.com/100x60?text=Coinfy" }
];

// Function to populate the marquee with logos
function populateMarquee(id) {
  const container = document.getElementById(id);
  const marqueeContent = document.createElement('div');
  marqueeContent.classList.add('marquee-content');

  // Add logos to the marquee content
  logos.forEach(logo => {
    const img = document.createElement('img');
    img.src = logo.url;
    img.alt = logo.name;
    marqueeContent.appendChild(img);
  });

  // Duplicate logos to create seamless effect
  for (let i = 0; i < 5; i++) { // You can adjust this number
    marqueeContent.appendChild(marqueeContent.cloneNode(true)); // Clone the logos
  }

  container.appendChild(marqueeContent);
}

// Populate both top and bottom marquees
populateMarquee("top-marquee");
populateMarquee("bottom-marquee");

const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.testimonial-card');

function updateCenterCard() {
  let center = window.innerWidth / 2;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;

    if (Math.abs(center - cardCenter) < rect.width / 2) {
      card.classList.add('center');
    } else {
      card.classList.remove('center');
    }
  });

  requestAnimationFrame(updateCenterCard);
}

updateCenterCard();

