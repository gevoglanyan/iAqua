import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const inventory = {
  fish: {
    African: [
      { id: 6, name: 'African Butterfly Fish', price: 15.95 },
      { id: 7, name: 'Blond Dwarf Frog (Male)', price: 2.99, pricingTiers: [{ min: 15, max: 50, price: 2.49 }] },
      { id: 8, name: 'African Dwarf Frog (M/L)', price: 2.89, pricingTiers: [{ min: 12, max: 50, price: 2.39 }] },
      { id: 9, name: 'Bichir (Ornate) 4"', price: 36.99 },
      { id: 10, name: 'Bichir (Royal Delhezi) 3"', price: 15.99 },
      { id: 11, name: 'Bichir (Senegalus) 4"', price: 14.98 },
      { id: 12, name: 'Leaf Fish (Leopard)', price: 8.99 },
      { id: 13, name: 'Puffer (Fahaka) Small', price: 15.99, pricingTiers: [{ min: 4, max: 10, price: 15.49 }] },
      { id: 14, name: 'Rope Fish', price: 14.99, pricingTiers: [{ min: 4, max: 10, price: 14.49 }] },
      { id: 15, name: 'Shrimp (Vampire)', price: 14.99 },
      { id: 16, name: 'Syn Catfish - Synodontis Petricola (M)', price: 14.99 },
      { id: 17, name: 'Syn Catfish - Synodontis Multipunctatus (S)', price: 17.99 },
      { id: 18, name: 'Syn Catfish - Upside Down', price: 5.99, pricingTiers: [{ min: 8, max: 30, price: 5.49 }] },
      { id: 19, name: 'Tetra (Congo) Medium', price: 5.99, pricingTiers: [{ min: 10, max: 30, price: 5.49 }] },
      { id: 20, name: 'Tetra (Congo) Large', price: 8.99, pricingTiers: [{ min: 10, max: 30, price: 8.49 }] }
    ],

    'African Cichlids': [
      { id: 151, name: 'Assorted Color 1 1/4" African Cichlids', price: 3.99, pricingTiers: [{ min: 20, max: 50, price: 3.49 }] },
      { id: 152, name: 'Assorted Color 2" African Cichlids', price: 6.89, pricingTiers: [{ min: 12, max: 40, price: 6.49 }] },
    ],

    Angels: [
      { id: 23, name: 'Angel (Assort) Medium', price: 6.99 },
      { id: 24, name: 'Angel (Assort Veil) Medium', price: 7.99 },
      { id: 25, name: 'Angel (Full Black) Medium', price: 5.99, pricingTiers: [{ min: 6, max: 15, price: 5.49 }] },
      { id: 26, name: 'Angel (Black Veil) Medium', price: 7.99 },
      { id: 27, name: 'Angel (Blue Pinoy) Large', price: 16.99 },
      { id: 28, name: 'Angel (Half Black Veil) Medium', price: 8.99, pricingTiers: [{ min: 5, max: 15, price: 8.49 }] },
      { id: 29, name: 'Angel (Gold Marble) Medium', price: 8.99, pricingTiers: [{ min: 6, max: 15, price: 8.49 }] },
      { id: 30, name: 'Angel (Gold) Medium', price: 8.99, pricingTiers: [{ min: 6, max: 15, price: 8.49 }] },
      { id: 31, name: 'Angel (Koi) Medium', price: 9.99, pricingTiers: [{ min: 6, max: 15, price: 9.49 }] },
      { id: 32, name: 'Angel (Leopard) Medium', price: 9.99, pricingTiers: [{ min: 6, max: 15, price: 9.49 }] },
      { id: 33, name: 'Angel (Marble) Medium', price: 7.99, pricingTiers: [{ min: 6, max: 15, price: 7.49 }] },
      { id: 34, name: 'Angel (Silver) Medium', price: 7.99, pricingTiers: [{ min: 6, max: 15, price: 7.49 }] },
      { id: 35, name: 'Angel (Platinum) Medium', price: 9.99 },
      { id: 41, name: 'Angel (Wild Peru Silver) Medium', price: 12.99, pricingTiers: [{ min: 6, max: 12, price: 12.49 }] },
      { id: 42, name: 'Angel (Manacapuru) Medium (TR)', price: 14.99 }
    ],

    'Asian Imports': [
      { id: 45, name: 'Archer Fish 2.5"', price: 19.99 },
      { id: 46, name: 'Archer Fish - Golden Burmese (S)', price: 19.99 },
      { id: 47, name: 'Badis - Scarlet Gem', price: 4.99, pricingTiers: [{ min: 10, max: 24, price: 4.49 }] },
      { id: 48, name: 'Catfish - Glass', price: 6.99 },
      { id: 49, name: 'Catfish - Goonch 12"', price: 189.99 },
      { id: 50, name: 'Eel - Fire 8"', price: 29.99 },
      { id: 51, name: 'Eel - Fire 12"', price: 59.99 },
      { id: 52, name: 'Eel - Zig Zag (M)', price: 9.99 },
      { id: 53, name: 'Glass Fish - Painted Red/Green (80s Classic)', price: 5.89, pricingTiers: [{ min: 4, max: 10, price: 5.39 }] },
      { id: 54, name: 'Glass Fish - Indian Dwarf', price: 3.99, pricingTiers: [{ min: 15, max: 50, price: 3.49 }] },
      { id: 55, name: 'Goby - Bumblebee', price: 3.99, pricingTiers: [{ min: 15, max: 50, price: 3.49 }] },
      { id: 56, name: 'Goby - Empire Gudgeon', price: 19.99, pricingTiers: [{ min: 15, max: 40, price: 19.49 }] },
      { id: 57, name: 'Goby - Fan Dance (Knight)', price: 7.99, pricingTiers: [{ min: 4, max: 12, price: 7.49 }] },
      { id: 58, name: 'Goby - Foot Doctor (M) (Algae Eater)', price: 5.99, pricingTiers: [{ min: 6, max: 12, price: 5.49 }] },
      { id: 59, name: 'Goby - Neon Blue Stiphodon', price: 8.99, pricingTiers: [{ min: 300, max: 3000, price: 8.49 }] },
      { id: 60, name: 'Goby - Neon Gold Spot Stiphodon', price: 8.99, pricingTiers: [{ min: 6, max: 20, price: 8.49 }] },
      { id: 61, name: 'Goby - Neon Red Stiphodon', price: 8.99, pricingTiers: [{ min: 6, max: 20, price: 8.49 }] },
      { id: 62, name: 'Goby - Neon Red Lipstick', price: 9.99, pricingTiers: [{ min: 6, max: 20, price: 9.49 }] },
      { id: 63, name: 'Goby - Micro Tiger', price: 7.87, pricingTiers: [{ min: 6, max: 15, price: 7.37 }] },
      { id: 64, name: 'Goby - Panda Garra (S)', price: 8.87, pricingTiers: [{ min: 6, max: 15, price: 8.37 }] },
      { id: 65, name: 'Goby - Peacock Gudgeon', price: 9.87, pricingTiers: [{ min: 6, max: 15, price: 9.37 }] },
      { id: 66, name: 'Halfbeak - Platinum (M)', price: 4.87, pricingTiers: [{ min: 6, max: 15, price: 4.37 }] },
      { id: 67, name: 'Knifefish - Clown (M)', price: 12.87, pricingTiers: [{ min: 10, max: 30, price: 12.37 }] },
      { id: 68, name: 'Loach - Clown (M)', price: 8.87, pricingTiers: [{ min: 5, max: 12, price: 8.37 }] },
      { id: 69, name: 'Loach - Clown (L)', price: 11.87, pricingTiers: [{ min: 6, max: 16, price: 11.37 }] },
      { id: 70, name: 'Loach - Dojo', price: 4.87 },
      { id: 71, name: 'Loach - Dojo Gold', price: 9.87 },
      { id: 72, name: 'Loach - Horseface (M)', price: 4.87 },
      { id: 73, name: 'Loach - Khuli Black', price: 3.87, pricingTiers: [{ min: 8, max: 30, price: 3.37 }] },
      { id: 74, name: 'Loach - Khuli Banded', price: 3.87, pricingTiers: [{ min: 20, max: 50, price: 3.37 }] },
      { id: 75, name: 'Loach - Khuli Giant Banded', price: 4.87, pricingTiers: [{ min: 20, max: 50, price: 4.37 }] },
      { id: 76, name: 'Loach - Reticulated Hillstream', price: 9.87, pricingTiers: [{ min: 12, max: 50, price: 9.37 }] },
      { id: 77, name: 'Loach - Polka Dot Hillstream', price: 8.87, pricingTiers: [{ min: 6, max: 15, price: 8.37 }] },
      { id: 78, name: 'Loach - Panda', price: 15.87, pricingTiers: [{ min: 6, max: 15, price: 15.37 }] },
      { id: 79, name: 'Loach - Rosy', price: 4.87 },
      { id: 80, name: 'Loach - Yo Yo', price: 4.87, pricingTiers: [{ min: 10, max: 20, price: 4.37 }] },
      { id: 81, name: 'Loach - Zebra (M/L)', price: 7.87 },
      { id: 82, name: 'Loach - Zipper Ataran', price: 9.87, pricingTiers: [{ min: 8, max: 30, price: 8.37 }] },
      { id: 83, name: 'Mono Argentus (M)', price: 15.87, pricingTiers: [{ min: 6, max: 15, price: 15.37 }] },
      { id: 84, name: 'Puffer - Figure 8', price: 6.87 },
      { id: 85, name: 'Puffer - Green Spotted', price: 6.87 },
      { id: 86, name: 'Puffer - Pea (Tank Raised)', price: 6.87, pricingTiers: [{ min: 6, max: 15, price: 6.37 }] },
      { id: 87, name: 'Scat - Green', price: 16.87, pricingTiers: [{ min: 15, max: 40, price: 16.37 }] },
      { id: 88, name: 'Shark - Roseline 2-3"', price: 12.87, pricingTiers: [{ min: 5, max: 15, price: 12.37 }] },
      { id: 89, name: 'Shark - Bala 3"', price: 7.87, pricingTiers: [{ min: 6, max: 20, price: 7.37 }] },
      { id: 90, name: 'Shark - Rainbow 2"', price: 5.87, pricingTiers: [{ min: 8, max: 20, price: 5.37 }] },
      { id: 91, name: 'Shark - Red Tail 2"', price: 5.87, pricingTiers: [{ min: 8, max: 30, price: 5.37 }] }
    ],

    'Australian': [
      { id: 94, name: 'Blue-Eye Gertrudae', price: 4.99, pricingTiers: [{ min: 15, max: 50, price: 4.49 }] },
    ],

    Barbs: [
      { id: 109, name: 'Barb - Cherry (L)', price: 2.39, pricingTiers: [{ min: 20, max: 50, price: 1.99 }] },
      { id: 110, name: 'Barb - Cherry Male Only (L)', price: 2.99 },
      { id: 111, name: 'Barb - Gold (M)', price: 2.49, pricingTiers: [{ min: 15, max: 50, price: 2.09 }] },
      { id: 112, name: 'Barb - Tiger (M)', price: 2.29, pricingTiers: [{ min: 20, max: 50, price: 1.89 }] },
      { id: 113, name: 'Barb - Green Tiger (M)', price: 2.89, pricingTiers: [{ min: 10, max: 30, price: 2.39 }] }
    ],

    Bettas: [
      { id: 136, name: 'Crowntail Male Betta (L)', price: 5.99, pricingTiers: [{ min: 10, max: 24, price: 5.49 }] },
      { id: 137, name: 'Halfmoon Fancy Betta Male (L)', price: 8.99, pricingTiers: [{ min: 6, max: 20, price: 8.49 }] },
      { id: 138, name: 'Butterfly Male Halfmoon Show (L)', price: 13.99, pricingTiers: [{ min: 4, max: 15, price: 13.49 }] },
      { id: 139, name: 'Dumbo Ear Betta - Male', price: 12.99 },
      { id: 140, name: 'Red Dragon Plakat Fighter', price: 16.89 },
      { id: 141, name: 'Rosepetal Male Halfmoon', price: 16.89 },
      { id: 142, name: 'Mustard Gas Male Halfmoon', price: 9.99 },
      { id: 143, name: 'Koi Galaxy Betta - Male', price: 15.99, pricingTiers: [{ min: 6, max: 15, price: 15.49 }] },
      { id: 144, name: 'Koi Betta - Male', price: 9.99, pricingTiers: [{ min: 10, max: 50, price: 9.49 }] },
      { id: 145, name: 'Female Koi Plakat Betta', price: 8.99, pricingTiers: [{ min: 6, max: 15, price: 8.49 }] },
      { id: 146, name: 'Female Halfmoon Betta', price: 4.99, pricingTiers: [{ min: 30, price: 4.39 }] },
      { id: 147, name: 'Female Show Betta', price: 3.99 },
      { id: 148, name: 'Show Male Betta (Regular Betta)', price: 5.29 }
    ],

    Catfishs: [
      { id: 235, name: 'Catfish - Glass', price: 5.99, pricingTiers: [{ min: 12, max: 40, price: 5.49 }] },
      { id: 236, name: 'Catfish - Redtail 3"', price: 15.99, pricingTiers: [{ min: 10, max: 30, price: 15.49 }] },
      { id: 237, name: 'Catfish - Tiger Shovelnose 2" - 3"', price: 14.99, pricingTiers: [{ min: 8, max: 20, price: 14.49 }] },
      { id: 238, name: 'Catfish - Upside Down (Syno. eupterus)', price: 6.99 },
      { id: 499, name: 'Catfish - Banjo', price: 3.98 },
      { id: 500, name: 'Catfish - Bumblebee', price: 3.98, pricingTiers: [{ min: 8, max: 15, price: 3.48 }] },
      { id: 501, name: 'Catfish - Farlowella', price: 8.98, pricingTiers: [{ min: 10, max: 30, price: 8.48 }] },
      { id: 502, name: 'Catfish - Royal Farlowella (Tank Raised 2")', price: 17.98 },
      { id: 503, name: 'Catfish - Red Tail 3"', price: 17.98 },
      { id: 504, name: 'Catfish - Striped Raphael (Peru)', price: 8.99 },
      { id: 505, name: 'Catfish - Tiger Shovelnose 3"', price: 15.99 },
      { id: 506, name: 'Catfish - Lima Shovelnose', price: 23.99 }
    ],

    Cichlids: [
      { id: 153, name: 'Assorted 2" Peacock Cichlids', price: 6.99 },
      { id: 154, name: 'Assorted 3" Peacock Cichlids', price: 15.99, pricingTiers: [{ min: 8, max: 20, price: 15.49 }] },
      { id: 155, name: 'Bumblebee Cichlid 2"', price: 7.99 },
      { id: 156, name: 'Brichardi Fairy Cichlid', price: 8.99, pricingTiers: [{ min: 6, max: 20, price: 8.49 }] },
      { id: 157, name: 'Calvus Cichlid - Ink Fin (S)', price: 14.99, pricingTiers: [{ min: 6, max: 20, price: 14.49 }] },
      { id: 158, name: 'Dolphin Cichlid (M)', price: 7.99, pricingTiers: [{ min: 6, max: 15, price: 7.49 }] },
      { id: 159, name: 'Electric Blue Cichlid (M)', price: 7.99 },
      { id: 160, name: 'Electric Yellow Lab (M)', price: 5.99 },
      { id: 161, name: 'Frontosa (M)', price: 19.99 },
      { id: 162, name: 'Frontosa Red (M)', price: 28.99, pricingTiers: [{ min: 8, max: 20, price: 28.49 }] },
      { id: 163, name: 'Frontosa Blue Zaire (S)', price: 39.99, pricingTiers: [{ min: 6, max: 15, price: 39.49 }] },
      { id: 164, name: 'Ice Blue Cichlid (L)', price: 14.99, pricingTiers: [{ min: 6, max: 30, price: 14.49 }] },
      { id: 165, name: 'Jewel Cichlid Turkana 1 1/2"', price: 7.99, pricingTiers: [{ min: 6, max: 30, price: 7.49 }] },
      { id: 166, name: 'Jewel Cichlid 2"', price: 5.99, pricingTiers: [{ min: 6, max: 30, price: 5.49 }] },
      { id: 167, name: 'Kribensis', price: 6.99, pricingTiers: [{ min: 4, max: 10, price: 6.99 }] },
      { id: 168, name: 'Leleupi - Super Orange (Med)', price: 14.99 },
      { id: 169, name: 'Altolamp. Compressiceps', price: 14.99 },
      { id: 170, name: 'Nyererei Cichlid 2"', price: 9.99, pricingTiers: [{ min: 6, max: 15, price: 9.49 }] },
      { id: 171, name: 'Peacock Cichlid - Albino (M)', price: 8.99, pricingTiers: [{ min: 4, max: 10, price: 8.49 }] },
      { id: 172, name: 'Peacock Cichlid - Blue (M)', price: 9.99 },
      { id: 173, name: 'Peacock Cichlid - Blue (L)', price: 16.99 },
      { id: 174, name: 'Peacock Cichlid - Blood Red Dragon (M)', price: 18.99 },
      { id: 175, name: 'Peacock Cichlid - Kaliedoscope (M)', price: 15.99, pricingTiers: [{ min: 8, max: 30, price: 15.49 }] },
      { id: 176, name: 'Peacock Cichlid - Kaleidoscope (L)', price: 19.99, pricingTiers: [{ min: 6, max: 15, price: 19.49 }] },
      { id: 177, name: 'Peacock Cichlid - Red (M)', price: 8.99, pricingTiers: [{ min: 6, max: 15, price: 8.49 }] },
      { id: 178, name: 'Peacock Cichlid - Red (L)', price: 16.99 },
      { id: 179, name: 'Peacock Cichlid - Sulphur Head (L)', price: 16.99 },
      { id: 180, name: 'Peacock Cichlid - Yellow (M)', price: 9.99 },
      { id: 181, name: 'Peacock Cichlid - Yellow (L)', price: 18.99, pricingTiers: [{ min: 6, max: 15, price: 18.49 }] },
      { id: 182, name: 'Rusty Purple Cichlid', price: 8.99, pricingTiers: [{ min: 6, max: 15, price: 8.49 }] },
      { id: 183, name: 'Shell Dweller - Multifasciatus', price: 17.99, pricingTiers: [{ min: 4, max: 15, price: 17.49 }] },
      { id: 184, name: 'Snow White Cichlid (M)', price: 6.99, pricingTiers: [{ min: 6, max: 15, price: 6.49 }] },
      { id: 185, name: 'Placidochromis Tanzania 3"', price: 15.99 },
      { id: 186, name: 'Taiwan Reef (M)', price: 8.99, pricingTiers: [{ min: 6, max: 15, price: 8.49 }] },
      { id: 187, name: 'Tropheus Duboise (S)', price: 15.99, pricingTiers: [{ min: 6, max: 15, price: 15.49 }] },
      { id: 188, name: 'Tropheus Moorii - Red Band (S)', price: 17.99, pricingTiers: [{ min: 6, max: 15, price: 17.49 }] },
      { id: 189, name: 'Tropheus Moorii - Red Band (M)', price: 19.99, pricingTiers: [{ min: 6, max: 15, price: 19.49 }] },
      { id: 190, name: 'Tropheus Moorii - Yellow Band (M)', price: 18.99, pricingTiers: [{ min: 6, max: 15, price: 18.49 }] },
      { id: 191, name: 'Violet Yellow Tail Cichlid (M)', price: 8.99, pricingTiers: [{ min: 6, max: 15, price: 8.49 }] },
      { id: 192, name: 'Venustus (M)', price: 6.99, pricingTiers: [{ min: 6, max: 15, price: 6.49 }] },
      { id: 193, name: 'Venustus 4" - 5"', price: 24.99, pricingTiers: [{ min: 5, max: 15, price: 24.49 }] },
      { id: 194, name: 'Zebra - Super Red (M)', price: 6.99, pricingTiers: [{ min: 4, max: 15, price: 6.49 }] },
      { id: 197, name: 'Apisto. Agassizi Double Red Male', price: 15.96 },
      { id: 198, name: 'Apisto. Agassizi', price: 9.99 },
      { id: 199, name: 'Apisto. Borellii', price: 8.99 },
      { id: 200, name: 'Apisto. Cacatuoides', price: 9.99, pricingTiers: [{ min: 8, max: 30, price: 9.49 }] },
      { id: 201, name: 'Acara - Electric Blue', price: 9.99 },
      { id: 202, name: 'Chocolate Cichlid (M)', price: 9.99, pricingTiers: [{ min: 6, max: 15, price: 9.49 }] },
      { id: 203, name: 'Convict Cichlid (M)', price: 5.99, pricingTiers: [{ min: 8, max: 20, price: 5.49 }] },
      { id: 204, name: 'Flowerhorn - Red Dragon 2"', price: 14.99 },
      { id: 205, name: 'Geo. Braziliansis 3"', price: 17.99 },
      { id: 206, name: 'Geo. Surinamensis', price: 8.99 },
      { id: 207, name: 'Green Terror (Med)', price: 8.99, pricingTiers: [{ min: 6, max: 12, price: 8.49 }] },
      { id: 208, name: 'Jack Dempsey (M)', price: 8.99 },
      { id: 209, name: 'Electric Blue Jack Dempsey (M)', price: 18.99, pricingTiers: [{ min: 8, max: 20, price: 18.49 }] },
      { id: 210, name: 'Oscar - Albino (M)', price: 9.99 },
      { id: 211, name: 'Oscar - Wild Zebra (M)', price: 10.99, pricingTiers: [{ min: 6, max: 15, price: 10.49 }] },
      { id: 212, name: 'Oscar - Lemon (M)', price: 15.99, pricingTiers: [{ min: 6, max: 15, price: 15.49 }] },
      { id: 213, name: 'Oscar - Oscar Zebra Wild (M)', price: 14.99, pricingTiers: [{ min: 6, max: 15, price: 14.49 }] },
      { id: 214, name: 'Oscar - Red (M)', price: 13.99 },
      { id: 215, name: 'Oscar - Tiger (M)', price: 13.99 },
      { id: 216, name: 'Oscar - Hot Red Chili', price: 24.99 },
      { id: 217, name: 'Parrot Cichlid - Blood Red', price: 15.99 },
      { id: 218, name: 'Parrot Cichlid - Polar Blue 2"', price: 8.99 },
      { id: 219, name: 'Peacock Bass 3"', price: 17.99, pricingTiers: [{ min: 6, max: 20, price: 17.49 }] },
      { id: 220, name: 'Ram - Angel Veil', price: 8.99, pricingTiers: [{ min: 8, max: 15, price: 8.49 }] },
      { id: 221, name: 'Ram - Blue', price: 7.99, pricingTiers: [{ min: 6, max: 20, price: 7.49 }] },
      { id: 222, name: 'Ram - Bolivian', price: 8.99, pricingTiers: [{ min: 6, max: 20, price: 8.49 }] },
      { id: 223, name: 'Ram - Electric Blue Balloon', price: 14.99, pricingTiers: [{ min: 6, max: 20, price: 14.49 }] },
      { id: 224, name: 'Ram - Electric Blue', price: 14.99, pricingTiers: [{ min: 6, max: 20, price: 14.49 }] },
      { id: 225, name: 'Ram - German Blue', price: 4.99, pricingTiers: [{ min: 6, max: 20, price: 4.49 }] },
      { id: 226, name: 'Ram - German Gold', price: 4.99, pricingTiers: [{ min: 6, max: 20, price: 4.49 }] },
      { id: 227, name: 'Ram - Midnight Black', price: 24.99 },
      { id: 228, name: 'Red Devil 2"', price: 9.99, pricingTiers: [{ min: 6, max: 20, price: 9.49 }] },
      { id: 229, name: 'Severum - Red Spotted Gold (M)', price: 19.99 },
      { id: 230, name: 'Texas Cichlid', price: 6.99, pricingTiers: [{ min: 6, max: 20, price: 6.49 }] }
    ],

    Corydoras: [
      { id: 233, name: 'Algae Eater - Chinese (M)', price: 2.69, pricingTiers: [{ min: 12, max: 50, price: 2.19 }] },
      { id: 234, name: 'Algae Eater - Siamese (M)', price: 2.99, pricingTiers: [{ min: 12, max: 40, price: 2.49 }] },
      { id: 239, name: 'Cory - Adolfoi (S)', price: 17.99 },
      { id: 240, name: 'Cory - Albino (M)', price: 2.99, pricingTiers: [{ min: 8, max: 20, price: 2.49 }] },
      { id: 241, name: 'Cory Agassizi (Brazil)', price: 5.99 },
      { id: 242, name: 'Cory - Skunk', price: 5.99, pricingTiers: [{ min: 12, max: 50, price: 5.49 }] },
      { id: 243, name: 'Cory - Bronze (M)', price: 2.99 },
      { id: 244, name: 'Cory - Julii', price: 6.49, pricingTiers: [{ min: 12, max: 50, price: 6.09 }] },
      { id: 245, name: 'Cory - Paleatus (Salt and Pepper) (M)', price: 2.99, pricingTiers: [{ min: 12, max: 30, price: 2.49 }] },
      { id: 246, name: 'Cory - Panda', price: 6.49, pricingTiers: [{ min: 12, max: 50, price: 6.09 }] },
      { id: 247, name: 'Cory - Melini (Peru) (L)', price: 5.89, pricingTiers: [{ min: 12, max: 30, price: 5.39 }] },
      { id: 248, name: 'Cory - Black Sail Punctatus', price: 5.89 },
      { id: 249, name: 'Cory - Pygmy (Tank Raised)', price: 3.89, pricingTiers: [{ min: 15, max: 50, price: 3.39 }] },
      { id: 250, name: 'Cory - Pygmy Albino', price: 5.89, pricingTiers: [{ min: 20, max: 50, price: 5.39 }] },
      { id: 251, name: 'Cory - Gold Laser (TR)', price: 14.99, pricingTiers: [{ min: 12, max: 50, price: 14.49 }] },
      { id: 252, name: 'Cory - Red Sailfin Venezuelan', price: 5.49, pricingTiers: [{ min: 10, max: 30, price: 5.09 }] },
      { id: 253, name: 'Cory - Smudge Pot', price: 9.99 },
      { id: 254, name: 'Cory - Sterbai', price: 6.99, pricingTiers: [{ min: 8, max: 30, price: 6.49 }] }
    ],

    Crabs: [
      { id: 264, name: 'Crab - Micro Thai', price: 3.99, pricingTiers: [{ min: 10, max: 30, price: 3.49 }] },
      { id: 265, name: 'Crab - Pom Pom', price: 14.99, },
      { id: 266, name: 'Crab - Vampire', price: 9.99, pricingTiers: [{ min: 6, max: 20, price: 9.49 }] },
    ],

    Danios: [
      { id: 114, name: 'Danio - Celestial Pearl (Galaxy)', price: 4.89, pricingTiers: [{ min: 15, max: 50, price: 4.39 }] },
      { id: 115, name: 'Danio - Glowlight (M)', price: 4.89, pricingTiers: [{ min: 30, max: 100, price: 4.39 }] },
      { id: 116, name: 'Danio - Burmese Gold Ring', price: 4.89, pricingTiers: [{ min: 30, max: 100, price: 4.39 }] },
      { id: 117, name: 'Danio - Giant (L)', price: 2.89, pricingTiers: [{ min: 25, max: 100, price: 2.39 }] },
      { id: 118, name: 'Danio - Turquoise (Pearl) (L)', price: 2.29, pricingTiers: [{ min: 25, max: 60, price: 1.89 }] },
      { id: 119, name: 'Danio - Zebra (L)', price: 1.99, pricingTiers: [{ min: 20, max: 50, price: 1.49 }] },
      { id: 120, name: 'Danio - Zebra Long Fin (L)', price: 2.09, pricingTiers: [{ min: 15, max: 40, price: 1.69 }] }
    ],

    Discus: [
      { id: 36, name: 'Discus - Pigeon Blood 3"', price: 49.99 },
      { id: 37, name: 'Discus - Blue Turquoise 3"', price: 59.99 },
      { id: 38, name: 'Discus - Red Turquoise 3"', price: 55.99 }
    ],

    Endlers: [
      { id: 344, name: 'Endler - Female', price: 2.69 },
      { id: 345, name: 'Endler - Rainbow Male', price: 2.89 },
      { id: 346, name: 'Endler - Blue Sky Male', price: 2.89, pricingTiers: [{ min: 12, max: 35, price: 2.39 }] },
      { id: 347, name: 'Endler - Bengal Tiger Male', price: 2.89, pricingTiers: [{ min: 12, max: 35, price: 2.39 }] },
      { id: 348, name: 'Endler - Scarlet Pink Male', price: 3.69, pricingTiers: [{ min: 12, max: 35, price: 3.19 }] }
    ],

    GloFish: [
      { id: 297, name: 'Glo Barb - Purple', price: 7.89 },
      { id: 298, name: 'Glo Barb - Green', price: 7.89 },
      { id: 299, name: 'Glo Barb - Red', price: 7.89 },
      { id: 300, name: 'Assorted Color Glo Danio', price: 6.49 },
      { id: 301, name: 'Glo Danio - Red', price: 6.49 },
      { id: 302, name: 'Glo Danio - Purple', price: 5.49 },
      { id: 303, name: 'Glo Danio - Orange', price: 5.49 },
      { id: 304, name: 'Glo Danio - Blue', price: 3.49 },
      { id: 305, name: 'Glo Danio - Green', price: 5.49 },
      { id: 306, name: 'Assorted Color Glo Tetra', price: 6.89 },
      { id: 307, name: 'Glo Tetra - Green', price: 6.99 },
      { id: 308, name: 'Glo Tetra - Blue', price: 6.99 },
      { id: 309, name: 'Glo Tetra - Red', price: 6.99 },
      { id: 310, name: 'Glo Tetra - Purple', price: 6.99 },
      { id: 311, name: 'Glo Tetra - Orange', price: 5.99 },
      { id: 312, name: 'Glo Pristella - Green', price: 5.99 },
      { id: 313, name: 'Glo Pristella - Purple', price: 5.69 },
      { id: 314, name: 'Glo Pristella - Red', price: 5.69 }
    ],

    Goldfish: [
      { id: 320, name: 'Assorted Fancy Fantail 2"', price: 3.89, pricingTiers: [{ min: 15, max: 50, price: 3.39 }] },
      { id: 321, name: 'Black Moor Goldfish 2"', price: 3.99 },
      { id: 322, name: 'Lionhead 2"', price: 4.99 },
      { id: 323, name: 'Pearlscale Golf Ball 2"', price: 4.99 },
      { id: 324, name: 'Oranda Assorted 2"', price: 4.99, pricingTiers: [{ min: 6, max: 12, price: 4.49 }] },
      { id: 325, name: 'Oranda Red and White 2"', price: 4.99, pricingTiers: [{ min: 6, max: 12, price: 4.49 }] },
      { id: 326, name: 'Shubunkin 3–4"', price: 2.99, pricingTiers: [{ min: 10, max: 30, price: 2.49 }] }
    ],

    Gouramis: [
      { id: 329, name: 'Blue Gourami (L)', price: 2.99, pricingTiers: [{ min: 8, max: 20, price: 2.49 }] },
      { id: 330, name: 'Chocolate Gourami', price: 3.99, pricingTiers: [{ min: 8, max: 20, price: 3.49 }] },
      { id: 331, name: 'Neon Blue Dwarf Gourami (Male)', price: 6.89, pricingTiers: [{ min: 15, max: 50, price: 6.39 }] },
      { id: 332, name: 'Powder Blue Dwarf Gourami (Male)', price: 6.89, pricingTiers: [{ min: 8, max: 30, price: 6.39 }] },
      { id: 333, name: 'Red Flame Dwarf Gourami (Male)', price: 6.89, pricingTiers: [{ min: 8, max: 30, price: 6.39 }] },
      { id: 334, name: 'Female Dwarf Gourami', price: 3.89, pricingTiers: [{ min: 12, max: 30, price: 3.39 }] },
      { id: 335, name: 'Honey Red Dwarf Gourami', price: 3.89, pricingTiers: [{ min: 12, max: 30, price: 3.39 }] },
      { id: 336, name: 'Licorice Gourami', price: 3.89, pricingTiers: [{ min: 12, max: 30, price: 3.39 }] },
      { id: 337, name: 'Pearl Gourami', price: 3.99, pricingTiers: [{ min: 8, max: 20, price: 3.49 }] },
      { id: 338, name: 'Gold Gourami (L)', price: 5.89, pricingTiers: [{ min: 8, max: 20, price: 5.39 }] },
      { id: 339, name: 'Opaline Gourami (L)', price: 4.89, pricingTiers: [{ min: 8, max: 20, price: 4.39 }] },
      { id: 340, name: 'Samurai Gourami', price: 9.99, pricingTiers: [{ min: 8, max: 20, price: 9.49 }] },
      { id: 341, name: 'Sparkling Gourami', price: 3.49, pricingTiers: [{ min: 6, max: 20, price: 3.09 }] }
    ],

    Guppies: [
      { id: 349, name: 'Guppy - Assort (Pairs) (L)', price: 3.89, pricingTiers: [{ min: 12, max: 35, price: 3.39 }] },
      { id: 350, name: 'Guppy - Female Assorted (L)', price: 2.89, pricingTiers: [{ min: 12, max: 35, price: 2.39 }] },
      { id: 351, name: 'Guppy - Male Assorted Fancy (L)', price: 2.89, pricingTiers: [{ min: 12, max: 35, price: 2.39 }] },
      { id: 352, name: 'Guppy - Black Leopard (Pairs) (XL)', price: 3.99, pricingTiers: [{ min: 20, max: 50, price: 3.49 }] },
      { id: 353, name: 'Guppy - Dragon (Pairs) (XL)', price: 3.49, pricingTiers: [{ min: 20, max: 50, price: 3.09 }] },
      { id: 354, name: 'Guppy - Blond Tuxedo (Pairs) (XL)', price: 3.99, pricingTiers: [{ min: 20, max: 50, price: 3.49 }] },
      { id: 355, name: 'Guppy - Cobra Blue (Pairs) (L)', price: 3.99, pricingTiers: [{ min: 12, max: 35, price: 3.49 }] },
      { id: 356, name: 'Guppy - Cobra Green (Pairs) (L)', price: 3.99, pricingTiers: [{ min: 12, max: 35, price: 3.49 }] },
      { id: 357, name: 'Guppy - Cobra Red (Pairs) (L)', price: 3.99, pricingTiers: [{ min: 12, max: 35, price: 3.49 }] },
      { id: 358, name: 'Guppy - Lyretail Green (Pairs) (XL)', price: 4.59, pricingTiers: [{ min: 12, max: 35, price: 4.09 }] },
      { id: 359, name: 'Guppy - Delta Blue (Pairs) (XL)', price: 3.99, pricingTiers: [{ min: 12, max: 35, price: 3.49 }] },
      { id: 360, name: 'Guppy - Delta Red (Pairs) (L)', price: 3.99, pricingTiers: [{ min: 12, max: 35, price: 3.49 }] },
      { id: 361, name: 'Guppy - Neon Blue Tux (Pairs) (XL)', price: 3.99, pricingTiers: [{ min: 12, max: 35, price: 3.49 }] },
      { id: 362, name: 'Guppy - Pink Flamingo (Pairs) (XL)', price: 3.99, pricingTiers: [{ min: 12, max: 35, price: 3.49 }] },
      { id: 363, name: 'Guppy - Purple Haze (Pairs) (L)', price: 4.89, pricingTiers: [{ min: 12, max: 35, price: 4.39 }] },
      { id: 364, name: 'Guppy - Tequila Sunrise (Pairs) (L)', price: 3.99, pricingTiers: [{ min: 12, max: 35, price: 3.49 }] },
      { id: 365, name: 'Guppy - Yellow Tux (Pairs) (XL)', price: 4.49, pricingTiers: [{ min: 12, max: 35, price: 4.09 }] }
    ],

    Killifish: [
      { id: 368, name: 'American Flagfish', price: 3.99, pricingTiers: [{ min: 12, max: 30, price: 3.49 }] },
      { id: 369, name: 'Clown Killi (For Nano Tanks)', price: 3.99, pricingTiers: [{ min: 10, max: 40, price: 3.49 }] },
      { id: 370, name: 'Gardneri Killi', price: 5.99, pricingTiers: [{ min: 8, max: 20, price: 5.49 }] },
      { id: 371, name: 'Gold Wonder Killi (M)', price: 3.99 },
      { id: 372, name: "Norman's Lampeye Killi", price: 2.99, pricingTiers: [{ min: 10, max: 40, price: 2.49 }] },
      { id: 373, name: 'Rice Fish - Blue Trim Platinum', price: 4.89, pricingTiers: [{ min: 20, max: 50, price: 4.39 }] },
      { id: 374, name: 'Rice Fish - Blue Eye Daisy', price: 3.89, pricingTiers: [{ min: 10, max: 30, price: 3.39 }] }
    ],

    Lobster: [
      { id: 267, name: 'Lobster - Cobalt Blue (M)', price: 15.99 },
      { id: 268, name: 'Lobster - Neon Red (M)', price: 15.99, pricingTiers: [{ min: 4, max: 10, price: 15.49 }] },
      { id: 269, name: 'Lobster - Tricolor Ghost', price: 18.99, pricingTiers: [{ min: 4, max: 10, price: 18.49 }] },
    ],

    Mollies: [
      { id: 390, name: 'Assorted Molly', price: 2.99, pricingTiers: [{ min: 12, max: 40, price: 2.49 }] },
      { id: 391, name: 'Assorted Lyre Molly', price: 2.99, pricingTiers: [{ min: 12, max: 40, price: 2.49 }] },
      { id: 392, name: 'Assorted Sailfin Molly', price: 3.89, pricingTiers: [{ min: 10, max: 40, price: 3.39 }] },
      { id: 393, name: 'Balloon Body Lyretail Black', price: 3.89, pricingTiers: [{ min: 12, max: 40, price: 3.39 }] },
      { id: 394, name: 'Balloon Body Gold Marble', price: 3.89, pricingTiers: [{ min: 8, max: 20, price: 3.39 }] },
      { id: 395, name: '24 KT Gold Lyre Molly', price: 3.89 },
      { id: 396, name: 'Black Lyretail Molly', price: 2.87, pricingTiers: [{ min: 12, max: 40, price: 2.37 }] },
      { id: 397, name: 'Dalmation Lyretail Molly (M)', price: 2.99, pricingTiers: [{ min: 8, max: 40, price: 2.49 }] },
      { id: 398, name: 'Dalmation Sailfin Molly (L)', price: 4.89, pricingTiers: [{ min: 12, max: 40, price: 4.39 }] },
      { id: 399, name: 'Gold Doubloon Lyretail Molly', price: 3.89, pricingTiers: [{ min: 8, max: 40, price: 3.39 }] },
      { id: 400, name: 'Gold Sailfin Molly (L)', price: 4.89, pricingTiers: [{ min: 8, max: 40, price: 4.39 }] },
      { id: 401, name: 'Green Sailfin Molly (L)', price: 4.89, pricingTiers: [{ min: 8, max: 40, price: 4.39 }] },
      { id: 402, name: 'Platinum Sailfin Molly (L)', price: 4.89, pricingTiers: [{ min: 8, max: 40, price: 4.39 }] },
      { id: 403, name: 'Platinum Lyre Molly', price: 2.89, pricingTiers: [{ min: 10, max: 40, price: 2.39 }] }
    ],

    Platies: [
      { id: 466, name: 'Assorted Mickey Mouse Platy', price: 2.89, pricingTiers: [{ min: 15, max: 50, price: 2.39 }] },
      { id: 467, name: 'Blue Wag Platy', price: 2.89, pricingTiers: [{ min: 15, max: 50, price: 2.39 }] },
      { id: 468, name: 'Coral Red Dwarf Platy', price: 2.89, pricingTiers: [{ min: 15, max: 50, price: 2.39 }] },
      { id: 469, name: 'Neon Sunburst Mickey Mouse Platy', price: 2.89, pricingTiers: [{ min: 15, max: 50, price: 2.39 }] },
      { id: 470, name: 'Peppermint Platy', price: 1.89, pricingTiers: [{ min: 15, max: 50, price: 1.39 }] },
      { id: 471, name: 'Red Wag Platy', price: 2.89, pricingTiers: [{ min: 16, max: 50, price: 2.39 }] },
      { id: 472, name: 'Sunburst Calico Platy', price: 2.89, pricingTiers: [{ min: 17, max: 50, price: 2.39 }] }
    ],

    Plecostomus: [
      { id: 475, name: 'L-001 Sailfin Spotted Pleco (M)', price: 7.89, pricingTiers: [{ min: 6, max: 15, price: 7.39 }] },
      { id: 476, name: 'L-083 Sailfin Albino (M)', price: 14.89 },
      { id: 477, name: 'L-103 Candy Stripe Pleco', price: 8.89 },
      { id: 478, name: 'L-10A Red Lizard Pleco', price: 14.99 },
      { id: 479, name: 'L-144 Bushynose (S)', price: 3.59, pricingTiers: [{ min: 6, max: 20, price: 3.19 }] },
      { id: 480, name: 'L-144 Bushynose Albino (M)', price: 12.89 },
      { id: 481, name: 'L-144 Lemon Blue Eye Pleco 3"', price: 16.89 },
      { id: 482, name: 'Gold Dust Bristlenose Pleco 3"', price: 24.99 },
      { id: 483, name: 'L-191 Royal Pleco 6"', price: 57.89 },
      { id: 484, name: 'L-191 Royal Pleco 3"', price: 35.98, pricingTiers: [{ min: 12, max: 40, price: 35.48 }] },
      { id: 485, name: 'L-146 Pitbull Pleco (M)', price: 7.98 },
      { id: 486, name: 'L-204 Emperor Pleco 4"', price: 34.99 },
      { id: 487, name: 'L-129 Zebra Pleco', price: 24.99 },
      { id: 488, name: 'L-201 Snowball Pleco', price: 36.99 },
      { id: 489, name: 'Trinidad Pleco (M)', price: 4.98, pricingTiers: [{ min: 6, max: 20, price: 4.48 }] }
    ],

    Koi: [
      { id: 492, name: 'Assorted 4" Sho Koi Grade A', price: 11.99, pricingTiers: [{ min: 6, max: 20, price: 11.49 }] },
      { id: 493, name: 'Assorted 6" Sho Koi Grade A', price: 22.99 },
      { id: 494, name: 'Assorted 4" Butterfly Koi', price: 18.99, pricingTiers: [{ min: 10, max: 20, price: 18.49 }] },
      { id: 495, name: 'Assorted 4" Butterfly Koi (Alt)', price: 14.99 },
      { id: 496, name: 'Mosquito Fish', price: 2.99, pricingTiers: [{ min: 100, max: 500, price: 2.49 }] }
    ],

    'New Guinea Rainbows': [
      { id: 95, name: 'Dwarf Neon Praecox Rainbow (M)', price: 4.99, pricingTiers: [{ min: 12, max: 30, price: 4.49 }] },
      { id: 96, name: 'Bleheri Rainbowfish', price: 14.99, pricingTiers: [{ min: 6, max: 20, price: 14.49 }] },
      { id: 97, name: 'Boesemani Rainbow (M)', price: 6.99, pricingTiers: [{ min: 12, max: 50, price: 6.49 }] },
      { id: 98, name: 'Boesemani Rainbow (L)', price: 9.99, pricingTiers: [{ min: 12, max: 50, price: 9.49 }] },
      { id: 99, name: 'Celebese Rainbow (M)', price: 6.99, pricingTiers: [{ min: 8, max: 20, price: 6.49 }] },
      { id: 100, name: 'Forktail Rainbow (M/S)', price: 6.99 },
      { id: 101, name: 'Paskai Rainbowfish (Neon Blue Eye)', price: 4.99, pricingTiers: [{ min: 12, max: 30, price: 4.49 }] },
      { id: 102, name: 'Threadfin Rainbow (M)', price: 4.99 },
      { id: 103, name: 'Turquoise Rainbow (M)', price: 8.99, pricingTiers: [{ min: 8, max: 16, price: 8.49 }] },
      { id: 104, name: 'Yellow Rainbow (L)', price: 12.99, pricingTiers: [{ min: 8, max: 16, price: 12.49 }] }
    ],

    Rasboras: [
      { id: 121, name: 'Rasbora - Blue Axelrodi', price: 2.99, pricingTiers: [{ min: 12, max: 50, price: 2.49 }] },
      { id: 122, name: 'Rasbora - Red Axelrodi', price: 1.99, pricingTiers: [{ min: 15, max: 40, price: 1.49 }] },
      { id: 123, name: 'Rasbora - Brilliant Red Line', price: 2.49 },
      { id: 124, name: 'Rasbora - Dwarf Clown Spot', price: 2.29, pricingTiers: [{ min: 12, max: 50, price: 1.89 }] },
      { id: 125, name: 'Rasbora - Green Kubotai', price: 3.99, pricingTiers: [{ min: 12, max: 50, price: 3.49 }] },
      { id: 126, name: 'Rasbora - Emerald Eye', price: 2.49, pricingTiers: [{ min: 25, max: 50, price: 2.09 }] },
      { id: 127, name: 'Rasbora - Espei (Pork Chop)', price: 2.49, pricingTiers: [{ min: 25, max: 50, price: 2.09 }] },
      { id: 128, name: 'Rasbora - Harlequin (L)', price: 2.69, pricingTiers: [{ min: 15, max: 40, price: 2.19 }] },
      { id: 129, name: 'Rasbora - Micro Tiger', price: 3.99, pricingTiers: [{ min: 12, max: 50, price: 3.49 }] },
      { id: 130, name: 'Rasbora - Rummynose', price: 3.99, pricingTiers: [{ min: 12, max: 50, price: 3.49 }] }
    ],

    Sharks: [
      { id: 255, name: 'Shark - Bala 3"', price: 6.99, pricingTiers: [{ min: 8, max: 30, price: 6.49 }] },
      { id: 256, name: 'Shark - Rainbow 2"', price: 3.69, pricingTiers: [{ min: 8, max: 30, price: 3.19 }] },
      { id: 257, name: 'Shark - Red Tail 2"', price: 3.69, pricingTiers: [{ min: 6, max: 20, price: 3.19 }] },
      { id: 258, name: 'Shark - Roseline 2"-3"', price: 14.99, pricingTiers: [{ min: 7, max: 20, price: 14.49 }] },
    ],

    Shrimps: [
      { id: 270, name: 'Shrimp - Amano', price: 2.89, pricingTiers: [{ min: 4, max: 10, price: 2.39 }] },
      { id: 271, name: 'Shrimp - Flower (Bamboo)', price: 8.99, pricingTiers: [{ min: 15, max: 50, price: 8.49 }] },
      { id: 272, name: 'Shrimp - Black Knight', price: 3.99, pricingTiers: [{ min: 6, max: 15, price: 3.49 }] },
      { id: 273, name: 'Shrimp - Blue Dream', price: 5.99, pricingTiers: [{ min: 10, max: 20, price: 5.49 }] },
      { id: 274, name: 'Shrimp - Bloody Mary', price: 5.99, pricingTiers: [{ min: 15, max: 40, price: 5.49 }] },
      { id: 275, name: 'Shrimp - Crystal Red Grade A (L)', price: 5.99, pricingTiers: [{ min: 6, max: 20, price: 5.49 }] },
      { id: 276, name: 'Shrimp - Cherry Red Grade A', price: 2.89, pricingTiers: [{ min: 20, max: 50, price: 2.39 }] },
      { id: 277, name: 'Shrimp - Green Jade', price: 3.99, pricingTiers: [{ min: 15, max: 40, price: 3.49 }] },
      { id: 278, name: 'Shrimp - Mandarine Orange', price: 3.99, pricingTiers: [{ min: 10, max: 20, price: 3.49 }] },
      { id: 279, name: 'Shrimp - Rili Red', price: 3.69, pricingTiers: [{ min: 10, max: 20, price: 3.19 }] },
      { id: 280, name: 'Shrimp - Orange Rili', price: 3.69, pricingTiers: [{ min: 10, max: 20, price: 3.19 }] },
      { id: 281, name: 'Shrimp - Super Blue', price: 3.99, pricingTiers: [{ min: 15, max: 40, price: 3.49 }] },
      { id: 282, name: 'Shrimp - Super Yellow', price: 3.99, pricingTiers: [{ min: 10, max: 20, price: 3.49 }] },
      { id: 283, name: 'Shrimp - Gold Back Yellow', price: 3.99, pricingTiers: [{ min: 10, max: 20, price: 3.49 }] }
    ],

    Snails: [
      { id: 284, name: 'Snail - Assassin', price: 2.49, pricingTiers: [{ min: 10, max: 20, price: 2.09 }] },
      { id: 285, name: 'Snail - Assorted Mystery', price: 2.99, pricingTiers: [{ min: 20, max: 50, price: 2.49 }] },
      { id: 286, name: 'Snail - Albino Mystery', price: 2.99, pricingTiers: [{ min: 15, max: 50, price: 2.49 }] },
      { id: 287, name: 'Snail - Black Mystery', price: 2.99, pricingTiers: [{ min: 15, max: 50, price: 2.49 }] },
      { id: 288, name: 'Snail - Gold Mystery', price: 2.99, pricingTiers: [{ min: 15, max: 50, price: 2.49 }] },
      { id: 289, name: 'Snail - Japanese Trapdoor', price: 2.89, pricingTiers: [{ min: 15, max: 50, price: 2.39 }] },
      { id: 290, name: 'Snail - Pagoda', price: 3.99 },
      { id: 291, name: 'Snail - Rabbit Yellow', price: 3.99, pricingTiers: [{ min: 20, max: 50, price: 3.49 }] },
      { id: 292, name: 'Snail - Thorny Tri-Color Zebra', price: 1.99, pricingTiers: [{ min: 20, max: 50, price: 1.49 }] },
      { id: 293, name: 'Snail - Tiger Nerite', price: 1.49, pricingTiers: [{ min: 20, max: 50, price: 1.09 }] },
      { id: 294, name: 'Snail - Zebra Nerite', price: 1.49, pricingTiers: [{ min: 20, max: 50, price: 1.09 }] }
    ],

    'South American': [
      { id: 507, name: 'Blue Saw Catfish (Peru)', price: 26.99 },
      { id: 508, name: 'Exodon Buck-Tooth', price: 8.99 },
      { id: 509, name: 'Gar - Black Spot (M)', price: 14.99 },
      { id: 510, name: 'Hatchetfish - Marble', price: 4.89 },
      { id: 511, name: 'Hatchetfish - Silver', price: 4.89, pricingTiers: [{ min: 15, max: 40, price: 4.39 }] },
      { id: 512, name: 'Knife - Black Ghost 3"', price: 14.99, pricingTiers: [{ min: 8, max: 15, price: 14.49 }] },
      { id: 513, name: 'Otocinclus (Colombia)', price: 5.49, pricingTiers: [{ min: 15, max: 50, price: 5.09 }] },
      { id: 514, name: 'Otocinclus Gigante', price: 15.99 },
      { id: 515, name: 'Pacu - Red Belly (Vegan Pirahna)', price: 3.99 },
      { id: 516, name: 'Pencil Fish - Red Beckfordi', price: 2.99, pricingTiers: [{ min: 15, max: 40, price: 2.49 }] },
      { id: 517, name: 'Pencil Fish - Purple', price: 15.99 },
      { id: 518, name: 'Prochilodus 5"', price: 69.99 },
      { id: 519, name: 'Saber Tooth Payara 7"', price: 89.99 },
      { id: 520, name: 'Silver Dollar (M)', price: 4.98, pricingTiers: [{ min: 8, max: 15, price: 4.38 }] }
    ],

    Swordtails: [
      { id: 523, name: 'Assorted Swordtail (L)', price: 3.89, pricingTiers: [{ min: 14, max: 30, price: 3.39 }] },
      { id: 524, name: 'Black Nubian Swordtail (L)', price: 3.99, pricingTiers: [{ min: 14, max: 30, price: 3.49 }] },
      { id: 525, name: 'Green Swordtail (L)', price: 3.99, pricingTiers: [{ min: 14, max: 30, price: 3.49 }] },
      { id: 526, name: 'Marigold Swordtail (L)', price: 3.99, pricingTiers: [{ min: 14, max: 30, price: 3.49 }] },
      { id: 527, name: 'Pineapple Swordtail (L)', price: 3.99, pricingTiers: [{ min: 14, max: 30, price: 3.49 }] },
      { id: 528, name: 'Pink Coral Swordtail (M)', price: 3.99, pricingTiers: [{ min: 14, max: 30, price: 3.49 }] },
      { id: 529, name: 'Red Fire Swordtail (L)', price: 3.99, pricingTiers: [{ min: 14, max: 30, price: 3.49 }] },
      { id: 530, name: 'Red Wag Swordtail (L)', price: 3.99, pricingTiers: [{ min: 14, max: 30, price: 3.49 }] },
      { id: 531, name: 'Red & White Kohaku Swordtail (M)', price: 3.99, pricingTiers: [{ min: 14, max: 30, price: 3.49 }] }
    ],

    Tetras: [
      { id: 534, name: 'Tetra - Amandae (Ember)', price: 2.29, pricingTiers: [{ min: 25, max: 50, price: 1.89 }] },
      { id: 535, name: 'Tetra - Black Neon', price: 2.19, pricingTiers: [{ min: 20, max: 40, price: 1.79 }] },
      { id: 536, name: 'Tetra - Black Phantom', price: 2.49, pricingTiers: [{ min: 20, max: 50, price: 2.09 }] },
      { id: 537, name: 'Tetra - Black Skirt', price: 2.49, pricingTiers: [{ min: 20, max: 50, price: 2.09 }] },
      { id: 538, name: 'Tetra - Bloodfin (L)', price: 2.49, pricingTiers: [{ min: 8, max: 40, price: 2.09 }] },
      { id: 539, name: 'Tetra - Blue King', price: 2.79, pricingTiers: [{ min: 8, max: 40, price: 2.29 }] },
      { id: 540, name: 'Tetra - Cardinal (M/L) (TR)', price: 2.89 },
      { id: 541, name: 'Tetra - Cardinal (XL) Brazil', price: 2.69, pricingTiers: [{ min: 20, max: 50, price: 2.19 }] },
      { id: 542, name: 'Tetra - Colombian Red & Blue', price: 2.89, pricingTiers: [{ min: 20, max: 50, price: 2.39 }] },
      { id: 543, name: 'Tetra - Congo (M)', price: 3.99, pricingTiers: [{ min: 20, max: 50, price: 3.49 }] },
      { id: 544, name: 'Tetra - Diamond (L)', price: 2.99, pricingTiers: [{ min: 20, max: 50, price: 2.49 }] },
      { id: 545, name: 'Tetra - Emperor', price: 2.59, pricingTiers: [{ min: 20, max: 50, price: 2.19 }] },
      { id: 546, name: 'Tetra - Emperor Black', price: 2.99, pricingTiers: [{ min: 20, max: 50, price: 2.49 }] },
      { id: 547, name: 'Tetra - Emperor Blue', price: 2.89, pricingTiers: [{ min: 20, max: 50, price: 2.39 }] },
      { id: 548, name: 'Tetra - Emperor Purple', price: 2.69 },
      { id: 549, name: 'Tetra - Glass Bloodfin', price: 2.89, pricingTiers: [{ min: 25, max: 100, price: 2.39 }] },
      { id: 550, name: 'Tetra - Glowlite', price: 1.99, pricingTiers: [{ min: 20, max: 100, price: 1.49 }] },
      { id: 551, name: 'Tetra - Green Fire', price: 2.29, pricingTiers: [{ min: 40, max: 100, price: 2.79 }] },
      { id: 552, name: 'Tetra - Green Neon (Tank Raised)', price: 2.99, pricingTiers: [{ min: 25, max: 50, price: 2.49 }] },
      { id: 553, name: 'Tetra - Lemon', price: 2.59, pricingTiers: [{ min: 20, max: 50, price: 2.19 }] },
      { id: 554, name: 'Tetra - Neon (M)', price: 2.29, pricingTiers: [{ min: 20, max: 50, price: 1.79 }] },
      { id: 555, name: 'Tetra - Neon (L)', price: 2.29, pricingTiers: [{ min: 20, max: 50, price: 1.79 }] },
      { id: 556, name: 'Tetra - Neon Diamond Head (M)', price: 2.89, pricingTiers: [{ min: 20, max: 50, price: 2.39 }] },
      { id: 557, name: 'Tetra - Penguin (L)', price: 2.49, pricingTiers: [{ min: 20, max: 50, price: 2.09 }] },
      { id: 558, name: 'Tetra - Red Phantom', price: 2.49, pricingTiers: [{ min: 20, max: 50, price: 2.09 }] },
      { id: 559, name: 'Tetra - Rummynose', price: 2.69, pricingTiers: [{ min: 20, max: 50, price: 2.19 }] },
      { id: 560, name: 'Tetra - Serpae (Red Minor)', price: 2.49, pricingTiers: [{ min: 20, max: 50, price: 2.09 }] },
      { id: 561, name: 'Tetra - Silvertip', price: 2.29, pricingTiers: [{ min: 20, max: 50, price: 1.79 }] },
      { id: 562, name: 'Tetra - White Skirt', price: 2.29, pricingTiers: [{ min: 20, max: 50, price: 1.79 }] }
    ],

    'White Clouds': [
      { id: 131, name: 'White Cloud Gold', price: 2.29, pricingTiers: [{ min: 25, max: 50, price: 1.89 }] },
      { id: 132, name: 'White Cloud', price: 1.99, pricingTiers: [{ min: 25, max: 50, price: 1.49 }] },
      { id: 133, name: 'White Cloud Long Fin', price: 2.99}
    ]
  },

  plants: {
    Anubias: [
      { id: 101, name: 'Anubias Asst (SM)', price: 7.19 },
      { id: 102, name: 'Anubias Asst (MD)', price: 9.09 },
      { id: 103, name: 'Anubias Barteri (SM)', price: 7.19 },
      { id: 104, name: 'Anubias Barteri (MD)', price: 8.95 },
      { id: 105, name: 'Anubias Coffeefolia (SM)', price: 7.19 },
      { id: 106, name: 'Anubias Coffeefolia (MD)', price: 9.08 },
      { id: 107, name: 'Anubias Coffeefolia (LG)', price: 12.39 },
      { id: 108, name: 'Anubias Congensis (SM)', price: 7.19 },
      { id: 109, name: 'Anubias Congensis (MD)', price: 8.99 },
      { id: 110, name: 'Anubias Frazeri (SM)', price: 7.15 },
      { id: 111, name: 'Anubias Frazeri (MD)', price: 8.95 },
      { id: 112, name: 'Anubias Hastifolia (SM)', price: 7.19 },
      { id: 113, name: 'Anubias Hastifolia (MD)', price: 8.99 },
      { id: 114, name: 'Anubias Lanceolata (SM)', price: 7.19 },
      { id: 115, name: 'Anubias Lanceolata (MD)', price: 9.08 },
      { id: 116, name: 'Anubias Minima (MD)', price: 8.99 },
      { id: 117, name: 'Anubias Nana (SM)', price: 6.99 },
      { id: 118, name: 'Anubias Nana (MD)', price: 8.99 },
      { id: 119, name: 'Anubias Nana (LG)', price: 12.39 },
      { id: 121, name: 'Anubias Nancon (SM)', price: 7.18 },
      { id: 122, name: 'Anubias Nancon (MD)', price: 9.08 },
      { id: 123, name: 'Anubias Nancon (LG)', price: 12.39 }
    ],

    Aponogeton: [
      { id: 173, name: 'Aponogeton Boivinianus Bulbs', price: 7.39 },
      { id: 174, name: 'Aponogeton Boivinianus (Small)', price: 7.99 },
      { id: 175, name: 'Aponogeton Boivinianus (Medium)', price: 9.15 },
      { id: 176, name: 'Aponogeton Boivinianus (Large)', price: 12.39 },
      { id: 177, name: 'Aponogeton Crispus (Small)', price: 6.99 },
      { id: 178, name: 'Aponogeton Longiplumulosus Bulbs', price: 6.39 },
      { id: 179, name: 'Aponogeton Longiplumulosus (Small)', price: 8.15 },
      { id: 180, name: 'Aponogeton Madagascar Lace Bulbs', price: 6.79 },
      { id: 181, name: 'Aponogeton Madagascar Lace (Small)', price: 7.99 },
      { id: 182, name: 'Aponogeton Madagascar Lace (Medium)', price: 9.19 },
      { id: 183, name: 'Aponogeton Natans (Small)', price: 5.99 },
      { id: 184, name: 'Aponogeton Ulvaceus Bulbs', price: 5.99 },
      { id: 185, name: 'Aponogeton Ulvaceus (Small)', price: 8.19 },
      { id: 186, name: 'Aponogeton Ulvaceus (Medium)', price: 9.48 }
    ],

    Carnivorous: [
      { id: 224, name: 'Nepenthes (Tropical Pitcher) 2"', price: 14.89 },
      { id: 225, name: 'Sarracenia (Trumpet Pitcher) 2"', price: 14.89 },
      { id: 226, name: 'Venus Fly Trap 3"', price: 11.95 }
    ],

    Cryptocoryne: [
      { id: 126, name: 'Crypto Asst (SM)', price: 5.09 },
      { id: 127, name: 'Crypto Asst (MD)', price: 6.09 },
      { id: 128, name: 'Crypto Asst (LG)', price: 7.08 },
      { id: 129, name: 'Crypto Balansae (MD)', price: 5.99 },
      { id: 130, name: 'Crypto Balansae (LG)', price: 5.99 },
      { id: 131, name: 'Crypto Beckettii (SM)', price: 5.09 },
      { id: 132, name: 'Crypto Beckettii (MD)', price: 5.99 },
      { id: 133, name: 'Crypto Beckettii (LG)', price: 7.08 },
      { id: 134, name: 'Crypto Costata (LG)', price: 6.89 },
      { id: 135, name: 'Crypto Costata (XL)', price: 6.89 },
      { id: 136, name: 'Crypto Lucens (SM)', price: 6.09 },
      { id: 137, name: 'Crypto Lucens (MD)', price: 6.09 },
      { id: 138, name: 'Crypto Lucens (LG)', price: 5.99 },
      { id: 139, name: 'Crypto Lutea (SM)', price: 5.09 },
      { id: 140, name: 'Crypto Lutea (MD)', price: 6.09 },
      { id: 141, name: 'Crypto Lutea (LG)', price: 7.09 },
      { id: 142, name: 'Crypto Parva (MD)', price: 5.99 },
      { id: 143, name: 'Crypto Pontederiifolia (SM)', price: 5.09 },
      { id: 144, name: 'Crypto Pontederiifolia (MD)', price: 5.99 },
      { id: 145, name: 'Crypto Retrospiralis (MD)', price: 5.99 },
      { id: 146, name: 'Crypto Retrospiralis (LG)', price: 6.99 },
      { id: 147, name: 'Crypto Spiralis (LG)', price: 6.99 },
      { id: 148, name: 'Crypto Undulata (SM)', price: 5.09 },
      { id: 149, name: 'Crypto Undulata (MD)', price: 5.99 },
      { id: 150, name: 'Crypto Undulata (LG)', price: 6.99 },
      { id: 151, name: 'Crypto Wendtii Brown (SM)', price: 4.99 },
      { id: 152, name: 'Crypto Wendtii Brown (MD)', price: 4.99 },
      { id: 153, name: 'Crypto Wendtii Brown (LG)', price: 5.99 },
      { id: 154, name: 'Crypto Wendtii Green (SM)', price: 4.99 },
      { id: 155, name: 'Crypto Wendtii Green (MD)', price: 4.99 },
      { id: 156, name: 'Crypto Wendtii Green (LG)', price: 5.99 },
      { id: 157, name: 'Crypto Wendtii Red (SM)', price: 4.99 },
      { id: 158, name: 'Crypto Wendtii Red (MD)', price: 4.99 },
      { id: 159, name: 'Crypto Wendtii Red (LG)', price: 5.99 },
      { id: 160, name: 'Crypto Wendtii Mi Oya (LG)', price: 6.39 },
      { id: 161, name: 'Crypto Wendtii Tropica (SM)', price: 5.09 },
      { id: 162, name: 'Crypto Wendtii Tropica (MD)', price: 6.09 }
    ],

    Potted: [
      { id: 256, name: 'Potted - Assorted Aquatic Regular', price: 6.39 },
      { id: 257, name: 'Potted - Assorted Aquatic Fancy', price: 7.37 },
      { id: 259, name: 'Potted - Baby Tears Dwarf', price: 6.48 },
      { id: 260, name: 'Potted - Baby Tears Giant', price: 6.49 },
      { id: 261, name: 'Potted - Four Leaf Clover', price: 6.49 },
      { id: 262, name: 'Potted - Four Leaf Clover Dwarf', price: 6.48 },
      { id: 263, name: 'Potted - Glossostigma', price: 6.48 },
      { id: 264, name: 'Potted - Hairgrass Dwarf', price: 6.48 },
      { id: 265, name: 'Potted - Hairgrass Giant', price: 6.48 },
      { id: 266, name: 'Potted - Hygrophila Blue', price: 6.48 },
      { id: 267, name: 'Potted - Hygrophila Willow', price: 6.48 },
      { id: 268, name: 'Potted - Ludwigia Cuban', price: 5.39 },
      { id: 269, name: 'Potted - Ludwigia Dark Red', price: 6.48 },
      { id: 270, name: 'Potted - Ludwigia Needle-Leaf', price: 6.48 },
      { id: 271, name: 'Potted - Ludwigia Ovalis', price: 6.48 },
      { id: 272, name: 'Potted - Ludwigia Red', price: 6.48 },
      { id: 273, name: 'Potted - Ludwigia Super Red Mini', price: 8.99 },
      { id: 274, name: 'Potted - Micro Sword', price: 6.48 },
      { id: 275, name: 'Potted - Mint Charlie', price: 6.48 },
      { id: 276, name: 'Potted - Moneywort', price: 6.48 },
      { id: 277, name: 'Potted - Monte Carlo', price: 7.09 },
      { id: 278, name: 'Potted - Pearlweed', price: 6.48 },
      { id: 279, name: 'Potted - Pennywort', price: 6.48 },
      { id: 280, name: 'Potted - Rotala Red', price: 6.48 },
      { id: 281, name: 'Potted - Rotala Vietnam', price: 6.48 },
      { id: 282, name: 'Potted - Sagittaria Dwarf', price: 6.48 },
      { id: 283, name: 'Potted - Scarlet Temple', price: 6.48 },
      { id: 284, name: 'Potted - Temple', price: 6.48 },
      { id: 285, name: 'Potted - Wisteria', price: 6.48 },
      { id: 288, name: 'Potted - Assorted Potted Swords', price: 6.48 },
      { id: 289, name: 'Potted - Amazon Sword', price: 6.48 },
      { id: 290, name: 'Potted - Atlandsberg Sword', price: 7.48 },
      { id: 291, name: 'Potted - Chain Sword Narrow', price: 6.48 },
      { id: 292, name: 'Potted - Harbich Sword', price: 6.48 },
      { id: 293, name: 'Potted - Kleiner Bar Sword', price: 6.48 },
      { id: 294, name: 'Potted - Marble Queen Sword', price: 6.48 },
      { id: 295, name: 'Potted - Melon Sword', price: 6.48 },
      { id: 296, name: 'Potted - Oriental Sword', price: 6.48 },
      { id: 297, name: 'Potted - Ozelot Red Sword', price: 6.48 },
      { id: 298, name: 'Potted - Ozelot Green Sword', price: 6.48 },
      { id: 299, name: 'Potted - Radican Sword', price: 6.48 },
      { id: 300, name: 'Potted - Rangeri (Grandifolius) Sword', price: 6.48 },
      { id: 301, name: 'Potted - Red Flame Sword', price: 6.48 },
      { id: 302, name: 'Potted - Red Melon Sword', price: 6.48 },
      { id: 303, name: 'Potted - Red Rubin Sword', price: 6.48 },
      { id: 304, name: 'Potted - Rose Sword', price: 6.48 },
      { id: 305, name: 'Potted - Ruffle Sword', price: 6.48 },
      { id: 306, name: 'Potted - Sparkle Sword', price: 5.39 },
      { id: 309, name: 'Potted - Assorted Potted Anubias', price: 10.39 },
      { id: 310, name: 'Potted - Anubias Barteri', price: 10.39 },
      { id: 311, name: 'Potted - Anubias Coffeefolia', price: 10.39 },
      { id: 312, name: 'Potted - Anubias Congensis', price: 10.39 },
      { id: 313, name: 'Potted - Anubias Frazeri', price: 10.39 },
      { id: 314, name: 'Potted - Anubias Hastifolia', price: 10.39 },
      { id: 315, name: 'Potted - Anubias Lanceolata', price: 10.39 },
      { id: 316, name: 'Potted - Anubias Nana', price: 10.39 },
      { id: 317, name: 'Potted - Anubias Nana Golden', price: 10.39 },
      { id: 318, name: 'Potted - Anubias Nana Petite', price: 10.39 },
      { id: 319, name: 'Potted - Anubias Nancon', price: 10.39 },
      { id: 322, name: 'Potted - Assorted Potted Crypts', price: 6.39 },
      { id: 323, name: 'Potted - Crypto Flamingo', price: 7.39 },
      { id: 324, name: 'Potted - Crypto Lucens', price: 6.39 },
      { id: 325, name: 'Potted - Crypto Lutea', price: 6.39 },
      { id: 326, name: 'Potted - Crypto Tropica', price: 6.39 },
      { id: 327, name: 'Potted - Crypto Undulata', price: 6.39 },
      { id: 328, name: 'Potted - Crypto Wendtii Red', price: 6.39 },
      { id: 329, name: 'Potted - Crypto Wendtii Bronze', price: 6.39 },
      { id: 330, name: 'Potted - Crypto Wendtii Green', price: 6.39 },
      { id: 332, name: 'Potted - Creeping Rush', price: 6.49 },
      { id: 333, name: 'Potted - Crinum Calamistratum', price: 18.98 },
      { id: 334, name: 'Potted - Dwarf Aquarium Lily', price: 7.39 },
      { id: 335, name: 'Potted - Dwarf Water Onion', price: 6.49 },
      { id: 336, name: 'Potted - Java Fern', price: 6.49 },
      { id: 337, name: 'Potted - Java Fern Lacy (Windelov)', price: 5.69 },
      { id: 338, name: 'Potted - Sagittaria Dwarf', price: 5.49 },
      { id: 339, name: 'Potted - Sagittaria Narrow (Subulata)', price: 6.49 },
      { id: 340, name: 'Potted - Staurogyne Repens', price: 6.49 },
      { id: 341, name: 'Potted - Tiger Lotus', price: 7.39 },
      { id: 342, name: 'Potted - Val. Italian', price: 6.49 },
      { id: 343, name: 'Potted - Val. Jungle', price: 6.49 },
      { id: 346, name: 'Potted - Bella Palm', price: 6.49 },
      { id: 347, name: 'Potted - Brazilian Sword', price: 7.09 },
      { id: 348, name: 'Potted - Green Hedge (Ruffle)', price: 6.49 },
      { id: 349, name: 'Potted - Josephs Coat (Hedge)', price: 6.49 },
      { id: 350, name: 'Potted - Mondo Grass', price: 6.49 },
      { id: 351, name: 'Potted - Purple Waffle (Red Krinkle)', price: 6.49 }
    ],

    Swords: [
      { id: 52, name: 'Amazon - SM', price: 5.49 },
      { id: 53, name: 'Amazon - MD', price: 5.49 },
      { id: 54, name: 'Amazon - LG', price: 7.39 },
      { id: 55, name: 'Amazon - XL', price: 9.99 },
      { id: 56, name: 'Chain Sword - Narrow Leaf', price: 5.39 },
      { id: 57, name: 'Chain Sword - Broad Leaf', price: 5.39 },
      { id: 58, name: 'Grandifolius - MD', price: 6.49 },
      { id: 59, name: 'Grandifolius - LG', price: 7.49 },
      { id: 60, name: 'Grandifolius - XL', price: 10.49 },
      { id: 61, name: 'Kleiner Bar - MD (Check Potted)', price: 7.37 },
      { id: 62, name: 'Melon - SM', price: 7.08 },
      { id: 63, name: 'Melon - MD', price: 7.49 },
      { id: 64, name: 'Melon - LG', price: 9.49 },
      { id: 65, name: 'Oriental - MD', price: 7.39 },
      { id: 66, name: 'Oriental - LG', price: 8.49 },
      { id: 67, name: 'Oriental - XL', price: 11.45 },
      { id: 68, name: 'Ozelot Red - MD', price: 7.49 },
      { id: 69, name: 'Ozelot Red - LG', price: 8.49 },
      { id: 70, name: 'Ozelot Red - XL', price: 11.49 },
      { id: 71, name: 'Ozelot Green - MD', price: 8.49 },
      { id: 72, name: 'Ozelot Green - LG', price: 8.49 },
      { id: 73, name: 'Ozelot Green - XL', price: 11.49 },
      { id: 74, name: 'Radican - SM', price: 6.49 },
      { id: 75, name: 'Radican - MD', price: 7.48 },
      { id: 76, name: 'Radican - LG', price: 7.49 },
      { id: 77, name: 'Radican, Marble Q - MD', price: 7.49 },
      { id: 78, name: 'Radican, Marble Q - LG', price: 9.49 },
      { id: 79, name: 'Red Flame - MD', price: 7.49 },
      { id: 80, name: 'Red Flame - LG', price: 9.49 },
      { id: 81, name: 'Red Melon - SM', price: 6.46 },
      { id: 82, name: 'Red Melon - MD', price: 7.25 },
      { id: 83, name: 'Red Melon - LG', price: 11.49 },
      { id: 84, name: 'Red Rubin - SM', price: 7.08 },
      { id: 85, name: 'Red Rubin - MD', price: 7.49 },
      { id: 86, name: 'Rose - MD', price: 7.49 },
      { id: 87, name: 'Rose - LG', price: 7.49 },
      { id: 88, name: 'Rose - XL', price: 12.39 },
      { id: 89, name: 'Rosette - SM', price: 7.37 },
      { id: 90, name: 'Rosette - MD', price: 8.37 },
      { id: 91, name: 'Rosette - LG', price: 10.35 },
      { id: 92, name: 'Ruffle - MD', price: 6.49 },
      { id: 93, name: 'Ruffle - LG', price: 8.49 },
      { id: 94, name: 'Sparkle - MD', price: 8.49 },
      { id: 95, name: 'Sparkle - LG', price: 11.49 },
      { id: 96, name: 'Sparkle - XL', price: 18.98 },
      { id: 97, name: 'Uruguayensis - MD', price: 9.39 },
      { id: 98, name: 'Vesuvius - MD', price: 7.08 }
    ],

    Terrarium: [
      { id: 217, name: 'Terrarium Aluminum Plant', price: 4.99 },
      { id: 218, name: 'Terrarium Flame (Dragon’s Tongue)', price: 4.99 },
      { id: 219, name: 'Terrarium Green Hedge (Ruffle)', price: 4.99 },
      { id: 220, name: 'Terrarium Hedge (Joseph’s Coat)', price: 4.99 },
      { id: 221, name: 'Terrarium Purple Waffle', price: 5.19 }
    ],

    Vallisneria: [
      { id: 165, name: 'Val - Contortion (Bunch)', price: 5.79 },
      { id: 166, name: 'Val - Corkscrew (Bunch)', price: 5.79 },
      { id: 167, name: 'Val - Italian (Bunch)', price: 5.79 },
      { id: 168, name: 'Val - Jungle (Bunch)', price: 5.79 },
      { id: 169, name: 'Val - Dwarf Sagittaria (Bunch)', price: 5.29 },
      { id: 170, name: 'Val - Narrowleaf Sag (Bunch)', price: 6.39 }
    ]
  },

  misc: {
    'Aquarium Supplies': [
      { id: 626, name: 'HG088-30W Dimmable Full Spectrum Marine Tank Light', price: 31.99 },
      { id: 627, name: 'HG100-32W Reef Tank Light for LPS Corals', price: 59.99 },
      { id: 628, name: 'HG033-9W Small Tank Clip On Light w Controller', price: 22.99 },
      { id: 629, name: 'HG990 Apex Aquarium Clip-on Light (Saltwater)', price: 27.99 },
      { id: 630, name: 'HG107 Reef LED Aquarium Light 50W', price: 55.99 },
      { id: 631, name: 'HG005-12W Submersible 20 Inch LED Multi-Color Light', price: 24.99 },
      { id: 632, name: 'HG978-14W 12-18 Inch Overhead Light (Full Spectrum w Timer)', price: 24.99 },
      { id: 633, name: 'HG978-18W 18-24 Inch Overhead Light (Full Spectrum w Timer)', price: 29.99 },
      { id: 634, name: 'HG978-26W 30-36 Inch Overhead Light (Full Spectrum Programmable)', price: 44.99 },
      { id: 635, name: 'HG978-42W 48-54 Inch Overhead Light (Full Spectrum w Timer)', price: 54.99 },
      { id: 636, name: 'HG102-100W Heater w LED Controller and Display', price: 31.99 },
      { id: 637, name: 'HG102-300W Heater w LED Controller and Display', price: 34.99 },
      { id: 638, name: 'HG097-100W Submersible Turtle Tank Heater', price: 22.99 },
      { id: 639, name: 'HG908 Sponge Filter System', price: 16.99 },
      { id: 640, name: 'HG908S Little Sponge Filter for Betta Bowls and Shrimp Tanks', price: 15.79 },
      { id: 641, name: 'HG985 Complete Power Filter 60GPH', price: 24.99 },
      { id: 642, name: 'HG009-S Small Aquarium Corner Filter', price: 22.99 },
      { id: 643, name: 'HG966-25 25FT Bucket-Free Aquarium Water Change w Metal Faucet Connector', price: 38.89 },
      { id: 644, name: 'HG966-49 49FT Bucket-Free Aquarium Water Change w Metal Faucet Connector', price: 48.89 },
      { id: 645, name: 'HG051 Auto Timer Chiller Fan', price: 21.99 },
      { id: 646, name: 'HG956 Easiest Ever Trigger Control Water Changer', price: 24.99 },
      { id: 647, name: 'HG080 Gravel Cleaner and Kit for Small Tanks', price: 21.99 },
      { id: 648, name: 'HG815-M Ultra Strong Magnet Cleaner w Detachable Scraper', price: 29.99 },
      { id: 649, name: 'HG127S Magnetic Magnet for Small Aquariums', price: 21.99 },
      { id: 650, name: 'HG082 Foodie Cam Fish Feeder Complete Auto Feed and Live Camera', price: 68.99 },
      { id: 651, name: 'HG811 Mini Air Pump (Tiny, Silent, and Strong)', price: 18.99 },
      { id: 652, name: 'HG037-2W Small Air Pump', price: 19.99 },
      { id: 653, name: 'HG037-6W Medium Air Pump', price: 22.99 },
      { id: 654, name: 'HG958 Large Air Pump for All Large Aquariums', price: 29.99 },
      { id: 655, name: 'HG070 Cross Flow Wave Pump 18W', price: 64.99 },
      { id: 656, name: 'HG021-6W Mini Wavemaker (Magnetic Suction Base)', price: 25.99 },
      { id: 657, name: 'HG010-M Mid-Size Wavemaker (Magnetic Suction Base)', price: 23.80 },
      { id: 658, name: 'HG042-18W Programmable Inverter Wavemaker', price: 54.99 },
      { id: 659, name: 'HG915-4000 Pond and Fountain Pump', price: 79.99 },
      { id: 660, name: 'HG977 Fish Aquarium Starter Kits 5 Gal', price: 99.99 },
      { id: 661, name: 'HG948 4 Gallon Aquarium Starter Kit', price: 69.99 },
      { id: 662, name: 'HG092 Hang On Protein Skimmer', price: 75.99 },
      { id: 663, name: 'HG816 6-in-1 Aquarium Cleaning Tools', price: 24.99 },
      { id: 664, name: 'HG038-S Mini Aquarium Cleaning Kit: 4 in 1', price: 16.99 },
      { id: 665, name: 'HG965 Stainless Steel Aquarium Tools Complete Set', price: 26.99 },
      { id: 666, name: 'HG073-S Digital Thermometer (Small)', price: 15.89 },
      { id: 667, name: 'HG073-L Digital Thermometer (Large)', price: 16.49 },
      { id: 668, name: 'HG910 Lifelike Hollow Tree Trunk', price: 14.99 }
    ],

    Carbon: [
      { id: 1000, name: 'iAqua Carbon (8 oz)', price: 8.99 }, 
      { id: 1001, name: 'iAqua Carbon (12 oz)', price: 10.99 }, 
      { id: 1002, name: 'iAqua Carbon (16 oz)', price: 12.99 }, 
      { id: 1003, name: 'iAqua Carbon (24 oz)', price: 18.99 }
    ],

    Driftwood: [
      { id: 674, name: '22" Driftwood Malaysian', price: 27.99 }, 
      { id: 675, name: '12" Driftwood Malaysian', price: 25.99 }, 
      { id: 676, name: '8" Driftwood Malaysian', price: 16.99 },
      { id: 677, name: '14" Spiderwood', price: 16.99 },
    ],

    'Fish Food': [
      { id: 570, name: 'Premium Community Flake Food 0.8 oz', price: 4.99 },
      { id: 571, name: 'Premium Community Flake Food 2.1 oz', price: 9.99 },
      { id: 572, name: 'Premium Community Flake Food 7.4 oz', price: 21.99 },
      { id: 573, name: 'Color Enhancing Community Flake Food 0.8 oz', price: 7.99 },
      { id: 574, name: 'Color Enhancing Community Flake Food 2.1 oz', price: 12.89 },
      { id: 575, name: 'Color Enhancing Community Flake Food 7.4 oz', price: 39.99 },
      { id: 576, name: 'Insect Meal Granules 1.3 oz', price: 6.99 },
      { id: 577, name: 'Betta Food Small Granules 0.3 oz', price: 3.99 },
      { id: 578, name: 'Veggie Flake Food for Vegans 2.1 oz', price: 12.99 },
      { id: 579, name: 'Veggie Based with a Little Protein 1.5 oz', price: 8.89 },
      { id: 580, name: 'Sinking Chips for Plecos and Similar 1.3 oz', price: 7.99 },
      { id: 581, name: 'Sinking Chips for Plecos and Similar 3.3 oz', price: 15.99 },
      { id: 582, name: 'Cichlid Granules w Color Enhancement 4.7 oz', price: 13.99 },
      { id: 583, name: "Krill Based 'Stick on Glass' Treats 0.5 oz", price: 4.99 },
      { id: 584, name: 'Powder Food for Fry w Krill and Spirulina 0.8 oz', price: 6.99 },
      { id: 585, name: 'Fancy Shrimp Sinking Granules 1.9 oz', price: 8.99 },
      { id: 586, name: 'Crab and Lobster w Loop Shape Pellets 1.0 oz', price: 8.99 },
      { id: 587, name: 'Goldfish Flake Food w Insect Meal 2.1 oz', price: 7.99 },
      { id: 588, name: 'Slow Sinking Pellets for Saltwater Fish 1.5 oz', price: 9.99 },
      { id: 589, name: "Marine Fish Treat Tabs 'Stick on Glass' 2.1 oz", price: 16.99 },
      { id: 590, name: 'Discus Granules with Probiotics 3.9 oz', price: 16.99 }
    ],

    'Fish Items': [
      { id: 599, name: '3" Coarse Net', price: 2.99 },
      { id: 600, name: '5" Coarse Net', price: 3.99 },
      { id: 601, name: '8" Coarse Net', price: 6.99 },
      { id: 605, name: 'XS Auto Feeder', price: 65.99 },
      { id: 606, name: 'X Auto Feeder', price: 88.99 },
      { id: 607, name: 'Breeding Container', price: 14.99 },
      { id: 608, name: 'Snail Collect', price: 22.99 },
      { id: 609, name: 'Brine Shrimp Breeding Kit', price: 21.99 },
      { id: 610, name: 'Brine Shrimp with Salt Mix', price: 2.99 },
      { id: 594, name: '5.1 oz Filter Media', price: 16.99 },
      { id: 595, name: '10.2 oz Filter Media', price: 29.99 },
    ],

    'Live Food': [
      { id: 377, name: 'Goldfish Feeders (S)', price: 0.21 },
      { id: 378, name: 'Goldfish Feeders (L)', price: 0.38 },
      { id: 379, name: 'Ghost Shrimp (800) Full Box', price: 125.00 },
      { id: 380, name: 'Ghost Shrimp Half Box', price: 90.00 },
      { id: 381, name: 'Ghost Shrimp Quarter Box', price: 59.00 },
      { id: 382, name: 'Ghost Shrimp Each', price: 0.25 },
      { id: 383, name: 'Feeder Guppy (1000) Full Box', price: 125.00 },
      { id: 384, name: 'Feeder Guppy Half Box', price: 89.00 },
      { id: 385, name: 'Feeder Guppy Quarter Box', price: 49.00 },
      { id: 386, name: 'Feeder Guppy Each', price: 0.32 }
    ],

    'Packing Supplies': [
      { id: 613, name: '6x12 Clear Poly Bag 100 ct', price: 12.96 },
      { id: 614, name: '9x18 Clear Poly Bag 100 ct', price: 13.99 },
      { id: 615, name: '12x20 Clear Poly Bag 100 ct', price: 16.99 },
      { id: 616, name: '16x24 Clear Poly Bag 50 ct', price: 15.89 },
      { id: 617, name: '20x30 Clear Poly Bag 40 ct', price: 16.89 },
      { id: 618, name: 'Rubber Bands - Small 2500/lb', price: 16.99 },
      { id: 619, name: 'Rubber Bands - Large 700/lb', price: 16.99 },
      { id: 620, name: 'Betta Cup and Lid Traditional 8 oz', price: 69.00 }
    ],

    'Plant Items': [
      { id: 355, name: 'Black Pots 2"', price: 2.29 },
      { id: 356, name: 'Rockwool Inserts 2"', price: 1.89 },
      { id: 357, name: 'Lead Weights', price: 1.39 }
    ],
  },
};

const ItemCard = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState("1"); 

  const handleInputChange = (e) => {
    const val = e.target.value;
    if (val === "" || (/^\d+$/.test(val) && Number(val) > 0)) {
      setQuantity(val);
    }
  };

  const handleAddToCart = () => {
    const qty = parseInt(quantity) || 1;
    const finalPrice = getTieredPrice(item, qty);
    addToCart({ ...item, price: finalPrice }, qty);
  };

  const getTieredPrice = (item, quantity) => {
    if (!item.pricingTiers) return item.price;

    const tier = item.pricingTiers.find(
      t => quantity >= t.min && quantity <= (t.max ?? Infinity)
    );

    return tier ? tier.price : item.price;
  };


  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-100 hover:shadow-xl transition w-full max-w-sm">
      <h4 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h4>
      <p className="text-lg text-gray-600 mb-2">Stock #{item.id}</p>
      <p className="text-gray-600 font-medium mb-4 text-lg">
        ${getTieredPrice(item, parseInt(quantity) || 1).toFixed(2)}
      </p>

      {item.pricingTiers && (
        <div className="text-sm text-gray-500">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            Bulk Pricing Available
          </span>

          <div className="space-y-1">
            {item.pricingTiers.map((tier, idx) => (
              <p key={idx}>
                {tier.min}–{tier.max || '∞'}: ${tier.price.toFixed(2)}
              </p>
            ))}
            <p>Other: ${item.price.toFixed(2)}</p>
          </div>

          <br />
        </div>
      )}

      <div className="flex items-center justify-center space-x-4">
        <div className="flex items-center space-x-2">
          <label htmlFor={`quantity-${item.id}`} className="text-sm font-medium text-gray-700">
            Qty:
          </label>
          <input
            id={`quantity-${item.id}`}
            type="text"
            inputMode="numeric"
            value={quantity}
            onChange={handleInputChange}
            className="w-16 px-2 py-1 border rounded text-center"
          />
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 transition whitespace-nowrap"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { dispatch } = useCart();

  const [selectedFish, setSelectedFish] = useState([]);
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [selectedMisc, setSelectedMisc] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSelection = (current, setCurrent, name) => {
    setCurrent(prev =>
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  const addToCart = (item, quantity) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...item, quantity } });
  };

  const renderItems = (categoryData, selectedCategories) => {
    return (
      <div className="space-y-12">
        {selectedCategories.map((categoryName) => {
          const items = categoryData[categoryName].filter(item => {
            const query = searchQuery.toLowerCase();
            return (
              item.name.toLowerCase().includes(query) ||
              item.id.toString().includes(query)
            );
          });

          if (items.length === 0) return null;

          return (
            <div key={categoryName}>
              <h4 className="text-xl font-bold text-primary mb-4 text-center uppercase tracking-wide">
                {categoryName}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                {items.map(item => (
                  <ItemCard key={item.id} item={item} addToCart={addToCart} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderFilterButtons = (category, selected, setSelected) => (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {Object.keys(category).map((key) => (
        <button
          key={key}
          onClick={() => toggleSelection(selected, setSelected, key)}
          className={`px-5 py-2 rounded-full font-semibold shadow transition ${
            selected.includes(key)
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-primary hover:bg-purple-100'
          }`}
        >
          {key}
        </button>
      ))}
    </div>
  );

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-primary mb-6 tracking-tight">
          Discover Premium Aquatic Essentials
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          From vibrant freshwater fish to hardy aquatic plants and specialized supplies, find everything you need to elevate your aquarium.
        </p>

        <br />

        <div className="mb-10 text-center">
          <input
            type="text"
            placeholder="Start by selecting a category, then search for items"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <br />

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-4 text-center uppercase tracking-wide">Fishs</h3>
          <br />
          {renderFilterButtons(inventory.fish, selectedFish, setSelectedFish)}
          {selectedFish.length > 0
            ? renderItems(inventory.fish, selectedFish)
            : <p className="text-center text-gray-500">Select a fish category to view products.</p>
          }

        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-4 text-center uppercase tracking-wide">Plants</h3>
          <br />
          {renderFilterButtons(inventory.plants, selectedPlants, setSelectedPlants)}
          {selectedPlants.length > 0
            ? renderItems(inventory.plants, selectedPlants)
            : <p className="text-center text-gray-500">Select a plant category to view products.</p>
          }

        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-4 text-center uppercase tracking-wide">Miscellaneous</h3>
          <br />
          {renderFilterButtons(inventory.misc, selectedMisc, setSelectedMisc)}
          {selectedMisc.length > 0
            ? renderItems(inventory.misc, selectedMisc)
            : <p className="text-center text-gray-500">Select a miscellaneous category to view products.</p>
          }

        </div>

        <br /> <br />

        <div className="flex flex-col items-center gap-8 mb-12 px-4">
          <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/iAqua Carbon.jpg"
              alt="iAqua Carbon Product"
              className="w-full h-auto object-cover"
            />
          </div>

          <br /> <br />

          <div className="w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              controls
              muted
              playsInline
            >
              <source src="/videos/iAquaMovie2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
 
        <br /> <br /> <br />
        
        <h3 className="text-2xl font-semibold text-black mb-4 text-center">
          Please view our{' '}
          <Link to="/shipping-policy" className="text-purple-600 hover:text-purple-700 font-medium">
            Shipping Policy
          </Link>{' '}
          and{' '}
          <Link to="/disclaimer" className="text-purple-600 hover:text-purple-700 font-medium">
            Disclaimers
          </Link>{' '}
          before Purchases
        </h3>
      </div>
    </section>
  );
};

export default Shop;