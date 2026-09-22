// Theme Background Assets
import bgFirstPageClean from '../assets/images/bg_first_page_clean.png';
import bgArchBearCar from '../assets/images/bg_arch_bear_car.png';
import bgBearBalloons from '../assets/images/bg_bear_balloons.png';
import bgBotanicalLush from '../assets/images/bg_botanical_lush.png';
import bgBunnyCradle from '../assets/images/bg_bunny_cradle.jpg';
import bgStorkCradle from '../assets/images/bg_stork_cradle.png';
import babyTeddyImg from '../assets/images/baby_teddy.jpg';
import babyClotheslineImg from '../assets/images/baby_clothesline.jpg';
import hotairBalloonImg from '../assets/images/hotair_balloon.jpg';
import babyFeetCircleImg from '../assets/images/baby_feet_circle.jpg';
import planeTeddyImg from '../assets/images/plane_teddy_animated.png';

export const invitationData = {
  themeBackgrounds: {
    firstPagePlane: bgFirstPageClean,
    heroArch: bgArchBearCar,
    overallPage: bgBearBalloons,
    wishes: bgBunnyCradle,
    sendWishes: bgStorkCradle,
    gallery: bgBotanicalLush,
  },
  baby: {
    title: "Our Little Prince",
    subCaption: "With hearts full of love, welcome the little wonder of",
    bornDate: "21 December 2026",
    bornTime: "11:45 AM",
    weight: "3.2 kg",
    nickname: "Little Bear",
    quote: "Ten little fingers, ten tiny toes, two lovely eyes and a button nose.",
    teddyPhoto: babyTeddyImg,
    clotheslinePhoto: babyClotheslineImg,
    balloonPhoto: hotairBalloonImg,
    wreathPhoto: babyFeetCircleImg,
    planeTeddyPhoto: planeTeddyImg,
    heroIllustration: bgFirstPageClean,
  },
  parents: {
    familyName: "The Naik Family",
    parentsNames: "Mr. & Mrs. Naik",
    inviteIntro: "The Naik Family warmly invites you to celebrate the",
    eventTitle: "Naming Ceremony & Baby Celebration",
    subtitle: "of their newborn baby boy",
  },
  eventDetails: {
    ceremonyDatetime: "2026-12-21T11:45:00",
    dateDisplay: "Monday, 21st December 2026",
    timeDisplay: "11:45 AM onwards",
    venueName: "The Naik Heritage Lawns",
    venueAddress: "Club Road, Camp, Belagavi, Karnataka 590001",
    city: "Belagavi",
    mapsUrl: "https://maps.google.com/?q=Club+Road+Belagavi+Karnataka",
    dressCode: "Pastels, Whites & Gentle Florals",
    rsvpContact: "8050720900",
    rsvpName: "Rohan Naik",
  },
  warmInvite: {
    heading: "A Little Invitation From Our Hearts",
    message:
      "Our home in Belagavi has grown a little brighter, our hearts a little larger, and our world infinitely more blessed. We warmly invite our dearest family and friends to gather with us as we whisper his sacred name, seek divine blessings, and celebrate this beautiful new beginning in our little prince's life.",
    note: "Your presence and blessings will make this milestone truly unforgettable.",
  },
  milestones: [
    {
      id: "m1",
      title: "First Sweet Smile",
      tag: "Pure Wonder",
      description: "A gentle beam of morning sunshine that melted our hearts into tears of happiness.",
      icon: "sun",
    },
    {
      id: "m2",
      title: "First Warm Cuddle",
      tag: "Safe & Cherished",
      description: "Tucked peacefully in mama's arms, listening to the quiet rhythm of love.",
      icon: "heart",
    },
    {
      id: "m3",
      title: "Tiny Big Footsteps",
      tag: "Ten Little Toes",
      description: "Ten tiny toes ready to explore the world, one curious little step at a time.",
      icon: "sparkles",
    },
    {
      id: "m4",
      title: "Our Little Dreamer",
      tag: "Starlit Nights",
      description: "Drifting into celestial wonder, watched over by crescent moons and teddy bears.",
      icon: "moon",
    },
  ],
  schedule: [
    {
      time: "10:30 AM",
      title: "Welcome & Gathering",
      subtitle: "Arrival of guests at The Naik Heritage Lawns, Belagavi with welcome drinks & refreshments.",
      badge: "Arrival",
    },
    {
      time: "11:00 AM",
      title: "Namakarana Pooja & Rituals",
      subtitle: "Sacred Vedic chants, traditional cradle blessings, and prayers invoked by elders.",
      badge: "Ceremony",
    },
    {
      time: "11:45 AM",
      title: "Name Whispering & Aarti",
      subtitle: "The sacred whisper of the baby's name into his right ear, followed by the auspicious Aarti.",
      badge: "The Reveal",
    },
    {
      time: "12:15 PM",
      title: "Blessings & Family Photos",
      subtitle: "Shower of fragrant flower petals, family photographs, and collective blessings.",
      badge: "Blessings",
    },
    {
      time: "01:00 PM",
      title: "Celebration Feast",
      subtitle: "A traditional celebratory feast and festive sweets served with warmth and gratitude.",
      badge: "Feast",
    },
  ],
  wishes: [
    {
      id: 1,
      author: "Doting Grandparents",
      relationship: "Grandparents",
      message:
        "May your precious life be guided by kind starlight, bathed in endless affection, and illuminated with wisdom, laughter, and courage. Welcome to the Naik family, sweet little prince.",
    },
    {
      id: 2,
      author: "Priya & Karthik",
      relationship: "Aunt & Uncle",
      message:
        "Little one, you have already filled our Belagavi home with immense pride and joy. We promise to be your biggest cheerleaders, storytellers, and lifelong protectors!",
    },
    {
      id: 3,
      author: "The Kulkarni Family",
      relationship: "Close Friends",
      message:
        "Heartiest congratulations to the Naik family! May this little bundle of sunshine bring immense prosperity, health, and limitless playful adventures into your lives.",
    },
    {
      id: 4,
      author: "Loving Godparents",
      relationship: "Family Friends",
      message:
        "May the heavens always watch over you, little star. Grow curious, stay gentle, and always know how deeply and unconditionally you are adored by all of us.",
    },
  ],
  // Empty initial gallery so user can upload original photos
  gallery: [],
  cartoonVideo: {
    title: "Little Star Cartoon Corner",
    subtitle: "A sweet cartoon video for our little guests to watch, giggle, and enjoy!",
    youtubeUrl: "https://www.youtube-nocookie.com/embed/yCjJyiqpAuU",
  },
  audio: {
    title: "Sweet Nursery Chime Lullaby",
    src: "/music/baby-lullaby.mp3",
  },
};
