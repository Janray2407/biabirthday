const SUPABASE_URL = 'https://hhtulgtzdfcifksrhqwv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhodHVsZ3R6ZGZjaWZrc3JocXd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5MjkwNTcsImV4cCI6MjA5MDUwNTA1N30.ckFHNZVOX7G-8cFd0pWnmsZWyH27KrxZgdSwbD89-x8';
const SUPABASE_BUCKET = 'birthday-photos';

const PHOTOS = {
    background: 'background/bg.jpg',
    church:     'venue/church.jpg',
    mcdo:       'venue/mcdo.jpg',
    gallery: [
        'gallery/photo1.jpg', 'gallery/photo2.jpg', 'gallery/photo3.jpg',
        'gallery/photo4.jpg', 'gallery/photo5.jpg', 'gallery/photo6.jpg',
        'gallery/photo7.jpg', 'gallery/photo8.jpg', 'gallery/photo9.jpg',
        'gallery/photo10.jpg','gallery/photo11.jpg','gallery/photo12.jpg',
	 'gallery/photo13.jpg','gallery/photo14.jpg','gallery/photo15.jpg',
    ]
};

const AUDIO = {
    background:       'background/music.m4a',

    heroVenue:        'sounds/hero-venue.mp3',
    heroGallery:      'sounds/hero-gallery.mp3',
    heroGodparents:   'sounds/hero-godparents.m4a',
    heroGifts:        'sounds/hero-gifts.mp3',
    heroDresscode:    'sounds/hero-dresscode.mp3',

    close:            'sounds/close.mp3',
    mapOpen:          'sounds/map-open.mp3',
    musicToggle:      'sounds/music-toggle.mp3',
    buttonClick:      'sounds/button-click.mp3'
};

const AUDIO_SETTINGS = {
    background: { autoplay: true, loop: true, volume: 0.4 },
    ducking:    { enabled: true, volume: 0.12, fadeIn: 500, fadeOut: 150 },
    buttons:    { volume: 0.9 }
};

const EVENT_DATA = {
    date: 'October 24, 2026',
    time: '06:00 AM',
    location: "San Juan Nepomuceno Parish Church",
    locationAddress: 'Padre Burgos Street, Poblacion, San Juan, Batangas',
    locationMapUrl: 'https://www.google.com/maps/search/San+Juan+Nepomuceno+Parish+Church+San+Juan+Batangas',

    receptionVenue: "McDonald's",
    receptionBranch: 'San Juan Batangas',
    receptionAddress: "2 General Luna Street, Poblacion, San Juan, Batangas",
    receptionTime: '5:30 PM',
    receptionMapUrl: 'https://www.google.com/maps/search/McDonalds+San+Juan+Batangas',

    ninongs: [
        'Christopher Ramirez',
        'Erickson Lacson',
        'Ronald Endaya',
        'Ivan Iyas',
        'Jerico Tan',
        'Lucky Jay Rovelo'
    ],
    ninangs: [
        'Janice Costa',
        'Alaina Sevilla',
        'Chris Tin',
        'Alvie Jane Macalalad',
        'Rhainzlyn Mae Macalalad',
        'Rhona Lumanglas',
        'Kecelyn Mataverde',
        'Shiela Mae Salvador',
        'Avi Jen Dela-Fuente',
        'Abegail Sebuc',
        'Ruby Mae Caisip'
    ],

    dressCodeMessage: "Wear whatever you like and come as you are! There's no fancy dress code—just dress comfortably, bring your happy vibes, and celebrate with us!",
    dressCodeNote: '👕 Casual • 👗 Semi-Formal • 😎 Any Color — your comfort is what matters most!',

giftMessage: "Your love, prayers, and presence mean so much to me and are already the sweetest gifts I could ever ask for. Most of all, I'm simply grateful to celebrate this special day surrounded by the people who make my world brighter",
giftNote: "But if you're thinking of giving me a little something, anything chosen with love would be warmly appreciated and treasured. 💝"
};