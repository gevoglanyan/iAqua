import React, { useState } from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const inventory = {
  fish: {
    African: [
      { id: 1, name: 'African Butterfly Fish', price: 16.99 },
      { id: 5202, name: 'African Dwarf Frog (Male)', price: 6.89, pricingTiers: [{ min: 12, max: 50, price: 6.69 }] },
      { id: 2, name: 'Bichir (Armored) 3"', price: 16.99 },
      { id: 3, name: 'Bichir (Semegalus) 4"', price: 12.99 },
      { id: 4, name: 'Bichir (Ornate)', price: 34.99 },
      { id: 5201, name: 'Blond Dwarf Frog (Male)', price: 6.99, pricingTiers: [{ min: 15, max: 50, price: 6.79 }] },
      { id: 5, name: 'Elephant Nose', price: 24.99 },
      { id: 5203, name: 'Leaf Fish (Leopard)', price: 10.99, pricingTiers: [{ min: 4, max: 10, price: 10.49 }] },
      { id: 5204, name: 'Puffer (Fahaka)', price: 16.99, pricingTiers: [{ min: 4, max: 10, price: 15.99 }] },
      { id: 6, name: 'Rope Fish', price: 19.99 },
      { id: 7, name: 'Shrimp (Vampire)', price: 16.99 },
      { id: 5205, name: 'Syn Catfish - Syndontis Petricola', price: 13.99 },
      { id: 5207, name: 'Syn Catfish - Eupterus', price: 8.49 },
      { id: 5208, name: 'Syn Catfish - Valentines', price: 9.99 },
      { id: 5206, name: 'Syn Catfish - Upside Down', price: 9.89, pricingTiers: [{ min: 10, max: 30, price: 9.49 }] },
      { id: 5200, name: 'Tetra (Congo) Medium', price: 7.99, pricingTiers: [{ min: 10, max: 30, price: 7.79 }] },
      { id: 8, name: 'Tetra (Congo) XL', price: 11.99 }
    ],

    Angels: [
      { id: 17, name: 'Angel (Black Veil)', price: 12.99 },
      { id: 16, name: 'Angel (Assort Veil) XL', price: 13.99 },
      { id: 15, name: 'Angel (Assort) Medium', price: 7.99 },
      { id: 18, name: 'Angel (Blue Pinoy) Large', price: 17.99 },
      { id: 5300, name: 'Angel (Full Black) Medium', price: 10.99, pricingTiers: [{ min: 6, max: 15, price: 10.49 }] },
      { id: 19, name: 'Angel (Manacapuru)', price: 19.99 },
      { id: 5305, name: 'Angel (Half Black Veil) Medium', price: 10.99, pricingTiers: [{ min: 6, max: 15, price: 10.49 }] },
      { id: 5306, name: 'Angel (Koi) Medium', price: 10.99, pricingTiers: [{ min: 6, max: 15, price: 10.49 }] },
      { id: 5307, name: 'Angel (Leopard) Large', price: 10.99, pricingTiers: [{ min: 6, max: 15, price: 10.49 }] },
      { id: 5303, name: 'Angel (Gold Marble) Medium', price: 10.99, pricingTiers: [{ min: 6, max: 15, price: 10.49 }] },
      { id: 5301, name: 'Angel (Blue Zebra) Medium', price: 13.99, pricingTiers: [{ min: 5, max: 15, price: 13.29 }] },
      { id: 5304, name: 'Angel (Marble) Medium', price: 9.99, pricingTiers: [{ min: 6, max: 15, price: 9.49 }] },
      { id: 5308, name: 'Angel (Platinum) Large', price: 10.99, pricingTiers: [{ min: 6, max: 15, price: 10.49 }] },
      { id: 5310, name: 'Angel (Wild Silver) Large', price: 12.99, pricingTiers: [{ min: 6, max: 12, price: 12.29 }] }
    ],

    'Asian Imports': [
      { id: 9000, name: 'Archer Fish 3"', price: 34.99 },
      { id: 9001, name: 'Badis - Scarlet Gem', price: 12.99, pricingTiers: [{ min: 10, max: 24, price: 12.79 }] },
      { id: 9002, name: 'Badis - Tiger Badis', price: 13.99, pricingTiers: [{ min: 10, max: 24, price: 13.69 }] },
      { id: 9025, name: 'Loach - Clown (L)', price: 17.99 },
      { id: 9024, name: 'Loach - Clown (M)', price: 15.99, pricingTiers: [{ min: 6, max: 16, price: 15.49 }] },
      { id: 9026, name: 'Loach - Dojo', price: 12.99 },
      { id: 9027, name: 'Loach - Dojo Gold', price: 15.99 },
      { id: 9032, name: 'Loach - Reticulated Hillstream', price: 15.99, pricingTiers: [{ min: 6, max: 15, price: 15.49 }] },
      { id: 9035, name: 'Loach - Rosy', price: 12.99, pricingTiers: [{ min: 10, max: 20, price: 12.79 }] },
      { id: 9036, name: 'Loach - Serpent', price: 15.89 },
      { id: 9033, name: 'Loach - Polka Dot Hillstream', price: 14.99, pricingTiers: [{ min: 6, max: 15, price: 14.49 }] },
      { id: 9028, name: 'Loach - Horseface (M)', price: 12.99, pricingTiers: [{ min: 8, max: 30, price: 12.69 }] },
      { id: 9031, name: 'Loach - Khuli Giant', price: 12.49, pricingTiers: [{ min: 12, max: 50, price: 12.19 }] },
      { id: 9029, name: 'Loach - Khuli Black', price: 11.49, pricingTiers: [{ min: 20, max: 50, price: 11.29 }] },
      { id: 9030, name: 'Loach - Khuli Banded', price: 11.49, pricingTiers: [{ min: 20, max: 50, price: 11.29 }] },
      { id: 9003, name: 'Catfish - Glass', price: 13.99 },
      { id: 9004, name: 'Catfish - Stone', price: 12.99, pricingTiers: [{ min: 8, max: 30, price: 12.79 }] },
      { id: 9023, name: 'Knifefish - Clown (M)', price: 17.99, pricingTiers: [{ min: 5, max: 12, price: 16.99 }] },
      { id: 9005, name: 'Datnoid - Gold Tiger', price: 48.99 },
      { id: 9006, name: 'Eel - Fire 4"', price: 21.99 },
      { id: 9007, name: 'Eel - Fire 11"', price: 59.99 },
      { id: 9008, name: 'Eel - Spiny (M)', price: 16.99, pricingTiers: [{ min: 4, max: 10, price: 16.49 }] },
      { id: 9009, name: 'Glass Fish - Painted (red/green)', price: 12.89, pricingTiers: [{ min: 15, max: 50, price: 12.69 }] },
      { id: 9010, name: 'Glass Fish - Indian Dwarf', price: 11.49, pricingTiers: [{ min: 15, max: 50, price: 11.29 }] },
      { id: 9011, name: 'Goby - Bumblebee', price: 11.49, pricingTiers: [{ min: 15, max: 40, price: 11.29 }] },
      { id: 9012, name: 'Goby - Empire Gudgeon', price: 24.99, pricingTiers: [{ min: 4, max: 12, price: 23.99 }] },
      { id: 9013, name: 'Goby - Fan Dance (Knight)', price: 14.99, pricingTiers: [{ min: 6, max: 12, price: 14.49 }] },
      { id: 9014, name: 'Goby - Foot Doctor (Garra rufa) (M)', price: 12.89, pricingTiers: [{ min: 300, max: 3000, price: 12.49 }] },
      { id: 9018, name: 'Goby - Micro Tiger', price: 14.99, pricingTiers: [{ min: 6, max: 15, price: 14.49 }] },
      { id: 9019, name: 'Goby - Panda Garra (S)', price: 14.99, pricingTiers: [{ min: 6, max: 15, price: 14.49 }] },
      { id: 9020, name: 'Goby - Peacock Gudgeon', price: 16.99, pricingTiers: [{ min: 6, max: 15, price: 16.49 }] },
      { id: 9021, name: 'Goby - Purple Spot', price: 14.99, pricingTiers: [{ min: 6, max: 15, price: 14.49 }] },
      { id: 9015, name: 'Goby - Neon Blue Stiphodon', price: 15.99, pricingTiers: [{ min: 6, max: 20, price: 15.49 }] },
      { id: 9017, name: 'Goby - Neon Red Stiphodon', price: 15.99, pricingTiers: [{ min: 6, max: 20, price: 15.49 }] },
      { id: 9016, name: 'Goby - Neon Red Lipstick', price: 17.99, pricingTiers: [{ min: 6, max: 20, price: 17.49 }] },
      { id: 9022, name: 'Halfbeak - Platinum', price: 11.89, pricingTiers: [{ min: 10, max: 30, price: 11.69 }] },
      { id: 9039, name: 'Mono Sebae (M)', price: 21.99 },
      { id: 9045, name: 'Shark - Bala 3"', price: 13.99, pricingTiers: [{ min: 8, max: 20, price: 13.69 }] },
      { id: 9046, name: 'Shark - Rainbow Albino 2"', price: 12.69, pricingTiers: [{ min: 8, max: 30, price: 12.49 }] },
      { id: 9047, name: 'Shark - Rainbow 2"', price: 12.69, pricingTiers: [{ min: 8, max: 30, price: 12.49 }] },
      { id: 9048, name: 'Shark - Red Tail 2"', price: 12.69, pricingTiers: [{ min: 8, max: 30, price: 12.49 }] },
      { id: 9044, name: 'Shark - Roseline 3"', price: 18.99, pricingTiers: [{ min: 6, max: 20, price: 18.49 }] },
      { id: 9040, name: 'Puffer - Green Spotted', price: 13.99 },
      { id: 9041, name: 'Puffer - Figure 8', price: 14.89, pricingTiers: [{ min: 6, max: 15, price: 14.49 }] },
      { id: 9042, name: 'Puffer - Pea', price: 12.49, pricingTiers: [{ min: 15, max: 40, price: 11.99 }] },
      { id: 9043, name: 'Scat - Silver (S)', price: 16.99, pricingTiers: [{ min: 5, max: 15, price: 16.49 }] }
    ],

    Barbs: [
      { id: 6001, name: 'Barb - Cherry Male Only', price: 6.89 },
      { id: 6000, name: 'Barb - Cherry', price: 1.29, pricingTiers: [{ min: 20, max: 50, price: 6.29 }] },
      { id: 6002, name: 'Barb - Tiger', price: 1.49, pricingTiers: [{ min: 15, max: 50, price: 6.49 }] }
    ],

    Betta: [
      { id: 10, name: 'Mustard Gas Halfmoon Male (Large)', price: 6.99 },
      { id: 9, name: 'Butterfly Male Halfmoon Show (Large)', price: 11.99 },
      { id: 5400, name: 'Crowntail Betta (Male)', price: 3.49, pricingTiers: [{ min: 10, max: 24, price: 2.99 }] },
      { id: 5407, name: 'Dumbo Ear Halfmoon Betta (Male)', price: 8.99, pricingTiers: [{ min: 4, max: 15, price: 8.29 }] },
      { id: 5406, name: 'Halfmoon Betta (Female) Large', price: 3.99, pricingTiers: [{ min: 6, max: 15, price: 3.49 }] },
      { id: 5401, name: 'Halfmoon Fancy Betta (Male)', price: 5.99, pricingTiers: [{ min: 6, max: 20, price: 5.49 }] },
      { id: 12, name: 'Koi Betta (Male)', price: 11.99 },
      { id: 5408, name: 'Koi Plakat Betta (Female)', price: 4.99, pricingTiers: [{ min: 6, max: 15, price: 4.49 }] },
      { id: 11, name: 'Rosepetal Male Halfmoon', price: 11.99 },
      { id: 5409, name: 'Show Betta (Female)', price: 1.99, pricingTiers: [{ min: 10, max: 50, price: 1.79 }] },
      { id: 5410, name: 'Show Betta (Male)', price: 2.29, pricingTiers: [{ min: 30, price: 1.99 }] }
    ],

    Catfish: [
      { id: 9503, name: 'Catfish - Glass', price: 8.99, pricingTiers: [{ min: 10, max: 30, price: 8.79 }] },
      { id: 9504, name: 'Catfish - Raphael Striped (S)', price: 8.99, pricingTiers: [{ min: 8, max: 20, price: 8.49 }] },
      { id: 9505, name: 'Catfish - Redtail 3"', price: 16.99 },
      { id: 9506, name: 'Catfish - Tiger Shovelnose 4–5"', price: 19.99 },
      { id: 9507, name: 'Catfish - Upside Down (Syno. eupterus)', price: 8.89, pricingTiers: [{ min: 8, max: 20, price: 8.49 }] },
    ],

    Cichlids: [
      { id: 8103, name: 'Acara - Electric Blue', price: 5.99, pricingTiers: [{ min: 6, max: 15, price: 5.49 }] },
      { id: 8005, name: 'Acei Violet Cichlid (M)', price: 4.99, pricingTiers: [{ min: 6, max: 20, price: 4.49 }] },
      { id: 8000, name: 'Assorted Color 1¼" African Cichlids', price: 1.69, pricingTiers: [{ min: 20, max: 50, price: 1.49 }] },
      { id: 8001, name: 'Assorted Color 2" African Cichlids', price: 3.69, pricingTiers: [{ min: 12, max: 40, price: 3.29 }] },
      { id: 8002, name: 'Assorted Color 4–5" African Cichlid Male', price: 14.99 },
      { id: 8003, name: 'Assorted 2" Peacock Cichlids', price: 4.99, pricingTiers: [{ min: 8, max: 20, price: 4.49 }] },
      { id: 8004, name: 'Assorted 3" Peacock Cichlids', price: 9.99 },
      { id: 8102, name: 'Apisto. Cacatuoides', price: 5.99, pricingTiers: [{ min: 8, max: 30, price: 5.49 }] },
      { id: 8101, name: 'Apisto. Borellii', price: 4.99 },
      { id: 8100, name: 'Apisto. Agassizi Double Red Male', price: 9.99 },
      { id: 8006, name: 'Bumblebee Cichlid 2"', price: 4.99, pricingTiers: [{ min: 6, max: 20, price: 4.49 }] },
      { id: 8007, name: 'Brichardi Fairy Cichlid', price: 6.99, pricingTiers: [{ min: 6, max: 15, price: 6.49 }] },
      { id: 8104, name: 'Convict Cichlid (M)', price: 2.89, pricingTiers: [{ min: 8, max: 20, price: 2.69 }] },
      { id: 8008, name: 'Demasoni 2"', price: 7.99, pricingTiers: [{ min: 6, max: 15, price: 7.49 }] },
      { id: 8106, name: 'Electric Blue Jack Dempsey (M)', price: 12.99 },
      { id: 8012, name: 'Red Empress Cichlid (L) 3"', price: 9.99, pricingTiers: [{ min: 5, max: 15, price: 8.99 }] },
      { id: 8009, name: 'Frontosa (M)', price: 14.99, pricingTiers: [{ min: 4, max: 10, price: 13.99 }] },
      { id: 8010, name: 'Frontosa Blue Zaire 2"', price: 24.99 },
      { id: 8107, name: 'Jack Dempsey (M)', price: 3.99, pricingTiers: [{ min: 8, max: 20, price: 3.69 }] },
      { id: 8108, name: 'Oscar - Red (M)', price: 6.99, pricingTiers: [{ min: 6, max: 15, price: 6.49 }] },
      { id: 8109, name: 'Parrot Cichlid - Blood Red 3"', price: 12.99 },
      { id: 8110, name: 'Texas Cichlid', price: 2.89 },
      { id: 8011, name: 'Peacock Cichlid - Red Dragon (M)', price: 5.99, pricingTiers: [{ min: 6, max: 15, price: 5.49 }] },
      { id: 8013, name: 'Star Sapphire Cichlid (M)', price: 16.99, pricingTiers: [{ min: 4, max: 15, price: 15.99 }] }
    ],

    Corydoras: [
      { id: 9500, name: 'Algae Eater - Chinese (M)', price: 6.69, pricingTiers: [{ min: 12, max: 50, price: 6.49 }] },
      { id: 9501, name: 'Algae Eater - Gold (M)', price: 6.99, pricingTiers: [{ min: 12, max: 40, price: 6.79 }] },
      { id: 9502, name: 'Algae Eater - Siamese (M)', price: 6.99, pricingTiers: [{ min: 12, max: 40, price: 6.79 }] },
      { id: 9510, name: 'Cory - Black Venezuelan', price: 17.99 },
      { id: 9509, name: 'Cory - Albino (M)', price: 6.99, pricingTiers: [{ min: 12, max: 50, price: 6.79 }] },
      { id: 9511, name: 'Cory - Bronze (M)', price: 6.99, pricingTiers: [{ min: 12, max: 50, price: 6.79 }] },
      { id: 9508, name: 'Cory - Adolfoi (M)', price: 14.99 },
      { id: 9512, name: 'Cory - Julii', price: 8.49, pricingTiers: [{ min: 12, max: 30, price: 7.99 }] },
      { id: 9513, name: 'Cory - Paleatus (M)', price: 6.99, pricingTiers: [{ min: 12, max: 50, price: 6.79 }] },
      { id: 9514, name: 'Cory - Panda', price: 8.49, pricingTiers: [{ min: 12, max: 30, price: 7.99 }] },
      { id: 9515, name: 'Cory - Punctatus', price: 8.49 },
      { id: 9518, name: 'Cory - Red Sailfin Venezuelan (M)', price: 7.99, pricingTiers: [{ min: 12, max: 50, price: 7.79 }] },
      { id: 9519, name: 'Cory - Sterbai', price: 8.19, pricingTiers: [{ min: 10, max: 30, price: 7.99 }] },
    ],

    Danios: [
      { id: 6004, name: 'Danio - Giant (L)', price: 1.89, pricingTiers: [{ min: 10, max: 30, price: 1.69 }] },
      { id: 6005, name: 'Danio - Glowlight (M)', price: 2.89, pricingTiers: [{ min: 15, max: 50, price: 2.69 }] },
      { id: 6003, name: 'Danio - Celestial Pearl (Galaxy)', price: 3.19, pricingTiers: [{ min: 20, max: 50, price: 2.99 }] },
      { id: 6006, name: 'Danio - Zebra (M)', price: 0.99, pricingTiers: [{ min: 30, max: 100, price: 0.89 }] },
      { id: 6007, name: 'Danio - Zebra Long Fin (M)', price: 1.09, pricingTiers: [{ min: 30, max: 100, price: 0.99 }] }
    ],

    Discus: [
      { id: 20, name: 'Discus (Blue Turquoise) 3"', price: 44.99 },
      { id: 21, name: 'Discus (Red Turquoise) 3"', price: 44.99 }
    ],

    Endlers: [
      { id: 9301, name: 'Endler - Assorted Male', price: 6.49 },
      { id: 9300, name: 'Endler - Female', price: 6.69 },
      { id: 9304, name: 'Endler - Bengal Tiger Male', price: 6.89, pricingTiers: [{ min: 12, max: 35, price: 6.69 }] },
      { id: 9302, name: 'Endler - Blue Star Male', price: 6.69, pricingTiers: [{ min: 12, max: 35, price: 6.49 }] },
      { id: 9303, name: 'Endler - Blue Sky Male', price: 6.89, pricingTiers: [{ min: 12, max: 35, price: 6.69 }] },
      { id: 9305, name: 'Endler - Purple Dream', price: 6.89, pricingTiers: [{ min: 12, max: 35, price: 6.69 }] },
      { id: 9306, name: 'Endler - Scarlet Red', price: 7.89, pricingTiers: [{ min: 12, max: 35, price: 7.69 }] }
    ],

    GloFish: [
      { id: 9603, name: 'Assorted Color Glo Danio', price: 7.89 },
      { id: 9609, name: 'Assorted Color Glo Tetra', price: 9.39 },
      { id: 9618, name: 'Glo Cory - Lemon', price: 12.99 },
      { id: 9600, name: 'Glo Barb - Purple', price: 9.49 },
      { id: 9601, name: 'Glo Barb - Green', price: 9.49 },
      { id: 9602, name: 'Glo Barb - Red', price: 9.49 },
      { id: 9607, name: 'Glo Danio - Blue', price: 7.99 },
      { id: 9606, name: 'Glo Danio - Orange', price: 7.99 },
      { id: 9604, name: 'Glo Danio - Red', price: 7.99 },
      { id: 9605, name: 'Glo Danio - Purple', price: 7.99 },
      { id: 9608, name: 'Glo Danio - Green', price: 7.99 },
      { id: 9619, name: 'Glo Shark - Purple', price: 13.99 },
      { id: 9610, name: 'Glo Tetra - Green', price: 9.49 },
      { id: 9611, name: 'Glo Tetra - Blue', price: 9.49 },
      { id: 9612, name: 'Glo Tetra - Red', price: 9.49 },
      { id: 9613, name: 'Glo Tetra - Purple', price: 9.49 },
      { id: 9614, name: 'Glo Tetra - Orange', price: 9.49 },
      { id: 9615, name: 'Glo Pristella - Green', price: 9.49 },
      { id: 9616, name: 'Glo Pristella - Red', price: 9.49 },
      { id: 9617, name: 'Glo Pristella - Orange', price: 9.49 }
    ],

    Goldfish: [
      { id: 9700, name: 'Assorted Fancy Fantail 2"', price: 7.89, pricingTiers: [{ min: 15, max: 50, price: 7.49 }] },
      { id: 9703, name: 'Black Moor 2"', price: 7.99 },
      { id: 9701, name: 'Fantail Red 2"', price: 7.99 },
      { id: 9702, name: 'Fantail Calico 2"', price: 7.99 },
      { id: 9711, name: 'Panda Goldfish 2"', price: 13.99 },
      { id: 9712, name: 'Pearlscale (Golf Ball) 2"', price: 10.99, pricingTiers: [{ min: 6, max: 15, price: 10.49 }] },
      { id: 9704, name: 'Lionhead 2"', price: 10.99, pricingTiers: [{ min: 6, max: 12, price: 10.49 }] },
      { id: 9705, name: 'Oranda Red & Black 3"', price: 12.99, pricingTiers: [{ min: 6, max: 12, price: 12.49 }] },
      { id: 9708, name: 'Oranda Red 3"', price: 10.89, pricingTiers: [{ min: 10, max: 30, price: 10.49 }] },
      { id: 9706, name: 'Oranda Red Cap 2"', price: 10.89, pricingTiers: [{ min: 10, max: 30, price: 10.49 }] },
      { id: 9707, name: 'Oranda Red Cap 4" Grade A', price: 23.99 },
      { id: 9709, name: 'Ranchu Black 2"', price: 10.89, pricingTiers: [{ min: 10, max: 30, price: 10.49 }] },
      { id: 9710, name: 'Ranchu Red 2"', price: 10.89, pricingTiers: [{ min: 10, max: 30, price: 10.49 }] },
      { id: 9713, name: 'Shubunkin 3–4"', price: 7.99, pricingTiers: [{ min: 10, max: 50, price: 7.79 }] }
    ],

    Gouramis: [
      { id: 9201, name: 'Chocolate Gourami', price: 8.99, pricingTiers: [{ min: 8, max: 20, price: 8.49 }] },
      { id: 9205, name: 'Female Dwarf Gourami', price: 7.89, pricingTiers: [{ min: 12, max: 30, price: 7.69 }] },
      { id: 9210, name: 'Gold Gourami (L)', price: 8.99, pricingTiers: [{ min: 8, max: 20, price: 8.69 }] },
      { id: 9202, name: 'Neon Blue Dwarf Gourami (Male)', price: 9.69, pricingTiers: [{ min: 8, max: 30, price: 9.29 }] },
      { id: 9211, name: 'Opaline Gourami (L)', price: 7.99, pricingTiers: [{ min: 8, max: 20, price: 7.79 }] },
      { id: 9208, name: 'Pearl Gourami', price: 7.99, pricingTiers: [{ min: 8, max: 20, price: 7.79 }] },
      { id: 9209, name: 'Pink Kissing Gourami', price: 7.99, pricingTiers: [{ min: 8, max: 20, price: 7.79 }] },
      { id: 9204, name: 'Red Flame Dwarf Gourami (Male)', price: 9.69, pricingTiers: [{ min: 8, max: 30, price: 9.29 }] },
      { id: 9212, name: 'Samurai Gourami', price: 11.99, pricingTiers: [{ min: 6, max: 20, price: 11.49 }] },
      { id: 9213, name: 'Sparkling Gourami', price: 6.29, pricingTiers: [{ min: 15, max: 50, price: 6.19 }] },
      { id: 9206, name: 'Honey Red Dwarf Gourami', price: 7.89, pricingTiers: [{ min: 12, max: 30, price: 7.69 }] },
      { id: 9207, name: 'Licorice Gourami', price: 7.89, pricingTiers: [{ min: 12, max: 30, price: 7.69 }] },
      { id: 9200, name: 'Blue Gourami (L)', price: 7.99, pricingTiers: [{ min: 8, max: 20, price: 7.79 }] }
    ],

    Guppies: [
      { id: 9311, name: 'Guppy - Black Leopard (Pairs) (XL)', price: 7.99, pricingTiers: [{ min: 12, max: 35, price: 7.69 }] },
      { id: 9312, name: 'Guppy - Black Phantom (Pairs) (XL)', price: 7.99, pricingTiers: [{ min: 12, max: 35, price: 7.69 }] },
      { id: 9314, name: 'Guppy - Blond Tuxedo (Pairs) (XL)', price: 7.99, pricingTiers: [{ min: 12, max: 35, price: 7.79 }] },
      { id: 9315, name: 'Guppy - Cobra Blue (Pairs) (L)', price: 7.99, pricingTiers: [{ min: 12, max: 35, price: 7.79 }] },
      { id: 9316, name: 'Guppy - Cobra Green (Pairs) (L)', price: 7.99, pricingTiers: [{ min: 12, max: 35, price: 7.79 }] },
      { id: 9317, name: 'Guppy - Cobra Red (Pairs) (L)', price: 7.99, pricingTiers: [{ min: 12, max: 35, price: 7.79 }] },
      { id: 9319, name: 'Guppy - Delta Blue (Pairs) (XL)', price: 7.99, pricingTiers: [{ min: 12, max: 35, price: 7.79 }] },
      { id: 9320, name: 'Guppy - Delta Red (Pairs) (L)', price: 7.99, pricingTiers: [{ min: 12, max: 35, price: 7.79 }] },
      { id: 9307, name: 'Guppy - Assorted (Pairs) (L)', price: 7.89, pricingTiers: [{ min: 12, max: 35, price: 7.69 }] },
      { id: 9308, name: 'Guppy - Female Assorted (L)', price: 6.09, pricingTiers: [{ min: 20, max: 50, price: 5.99 }] },
      { id: 9309, name: 'Guppy - Male Assorted Fancy (L)', price: 6.69, pricingTiers: [{ min: 20, max: 50, price: 6.49 }] },
      { id: 9310, name: 'Guppy - Male Dumbo Ear (L)', price: 6.89, pricingTiers: [{ min: 20, max: 50, price: 6.69 }] },
      { id: 9321, name: 'Guppy - Neon Blue Tux (Pairs) (XL)', price: 7.99, pricingTiers: [{ min: 12, max: 35, price: 7.79 }] },
      { id: 9322, name: 'Guppy - Pink Flamingo (Pairs) (XL)', price: 7.99, pricingTiers: [{ min: 12, max: 35, price: 7.79 }] },
      { id: 9323, name: 'Guppy - Purple Haze (Pairs) (L)', price: 8.49, pricingTiers: [{ min: 8, max: 35, price: 8.19 }] },
      { id: 9324, name: 'Guppy - Tequila Sunrise (Pairs) (L)', price: 7.99, pricingTiers: [{ min: 12, max: 35, price: 7.79 }] },
      { id: 9325, name: 'Guppy - Yellow Tux (Pairs) (XL)', price: 8.49, pricingTiers: [{ min: 8, max: 35, price: 8.19 }] },
    ],

    Killifish: [
      { id: 9400, name: 'American Flagfish', price: 6.89, pricingTiers: [{ min: 12, max: 30, price: 6.69 }] },
      { id: 9401, name: 'Clown Killi (Nano)', price: 7.99, pricingTiers: [{ min: 10, max: 40, price: 7.79 }] },
      { id: 9404, name: 'Gold Wonder Killi (M)', price: 7.99, pricingTiers: [{ min: 10, max: 40, price: 7.79 }] },
      { id: 9402, name: 'Gardneri Killi', price: 8.99, pricingTiers: [{ min: 8, max: 20, price: 8.69 }] },
      { id: 9403, name: 'Guentheri Killi (Show Pair)', price: 23.99 },
      { id: 9405, name: "Norman's Lampeye Killi", price: 6.99, pricingTiers: [{ min: 20, max: 50, price: 6.79 }] },
      { id: 9407, name: 'Rice Fish - Blue Eye Daisy', price: 7.89, pricingTiers: [{ min: 15, max: 40, price: 7.69 }] },
      { id: 9406, name: 'Rice Fish - Luminescent White', price: 8.89, pricingTiers: [{ min: 10, max: 30, price: 8.49 }] }
    ],

    Mollies: [
      { id: 9911, name: 'Harlequin Sailfin Molly (L)', price: 8.49, pricingTiers: [{ min: 8, max: 40, price: 8.19 }] },
      { id: 9904, name: 'Black Lyretail Molly', price: 6.89, pricingTiers: [{ min: 8, max: 20, price: 6.69 }] },
      { id: 9905, name: 'Black Sailfin Molly (L)', price: 8.49 },
      { id: 9900, name: 'Assorted Molly', price: 6.99, pricingTiers: [{ min: 12, max: 40, price: 6.79 }] },
      { id: 9901, name: 'Assorted Lyre Molly', price: 6.99, pricingTiers: [{ min: 12, max: 40, price: 6.79 }] },
      { id: 9902, name: 'Assorted Sailfin Molly', price: 7.99, pricingTiers: [{ min: 10, max: 40, price: 7.69 }] },
      { id: 9906, name: 'Dalmation Lyretail Molly (M)', price: 6.99, pricingTiers: [{ min: 12, max: 40, price: 6.79 }] },
      { id: 9907, name: 'Dalmation Sailfin Molly (L)', price: 8.49, pricingTiers: [{ min: 8, max: 40, price: 8.19 }] },
      { id: 9908, name: 'Gold Doubloon Lyretail Molly', price: 7.69, pricingTiers: [{ min: 12, max: 40, price: 7.49 }] },
      { id: 9909, name: 'Gold Sailfin Molly (L)', price: 8.49, pricingTiers: [{ min: 8, max: 40, price: 8.19 }] },
      { id: 9910, name: 'Green Sailfin Molly (L)', price: 8.49, pricingTiers: [{ min: 8, max: 40, price: 8.19 }] },
      { id: 9912, name: 'Platinum Sailfin Molly (L)', price: 8.49, pricingTiers: [{ min: 8, max: 40, price: 8.19 }] },
      { id: 9913, name: 'Platinum Lyre Molly', price: 6.99, pricingTiers: [{ min: 10, max: 40, price: 6.79 }] },
      { id: 9903, name: '24 KT Gold Lyre Molly', price: 7.49, pricingTiers: [{ min: 12, max: 40, price: 7.29 }] }
    ],

    Platies: [
      { id: 10000, name: 'Assorted Platy', price: 6.89, pricingTiers: [{ min: 15, max: 50, price: 6.69 }] },
      { id: 10001, name: 'Blue Wag Platy', price: 6.89, pricingTiers: [{ min: 15, max: 50, price: 6.69 }] },
      { id: 10002, name: 'Peppermint Mickey Mouse Platy', price: 6.89, pricingTiers: [{ min: 15, max: 50, price: 6.69 }] },
      { id: 10003, name: 'Red Wag Platy', price: 6.89, pricingTiers: [{ min: 15, max: 50, price: 6.69 }] },
      { id: 10004, name: 'Sunburst Calico Platy', price: 6.89, pricingTiers: [{ min: 15, max: 50, price: 6.69 }] }
    ],

    Plecostomus: [
      { id: 9801, name: 'L-83 Sailfin Pleco Albino (M)', price: 14.99 },
      { id: 9800, name: 'L-001 Spotted Sailfin Pleco (M)', price: 9.99, pricingTiers: [{ min: 6, max: 15, price: 9.49 }] },
      { id: 9807, name: 'L-128 Blue Phantom Pleco (XL)', price: 59.99 },
      { id: 9802, name: 'L-18 Gold Nugget Pleco 2–3"', price: 44.99 },
      { id: 9810, name: 'L-144 Albino Bushynose (S)', price: 9.99 },
      { id: 9811, name: 'L-144 Albino Long-fin Bushynose (S)', price: 14.99 },
      { id: 9813, name: 'L-144 Lemon Blue Eye 3"', price: 17.99 },
      { id: 9809, name: 'L-144 Bushynose (S)', price: 7.49, pricingTiers: [{ min: 12, max: 40, price: 7.19 }] },
      { id: 9812, name: 'L-144 Super Red Bushynose (S)', price: 19.99 },
      { id: 9804, name: 'L-103 Clown Stripe Pleco', price: 10.49, pricingTiers: [{ min: 6, max: 20, price: 9.99 }] },
      { id: 9815, name: 'L-129 Zebra Pleco', price: 24.99 },
      { id: 9816, name: 'L-201 Snowball Pleco', price: 39.99 },
      { id: 9806, name: 'L-52 Butterfly Pleco', price: 24.99 },
      { id: 9803, name: 'L-190 Royal Pleco 2–3"', price: 36.99 },
      { id: 9805, name: 'L-10a Red Lizard Pleco', price: 12.99 },
      { id: 9808, name: 'Peruvian Tiger Pleco', price: 36.99 },
      { id: 9817, name: 'Trinidad Pleco (M)', price: 7.79, pricingTiers: [{ min: 10, max: 40, price: 7.49 }] }
    ],

    Koi: [
      { id: 10301, name: 'Assorted 4" Butterfly Koi', price: 12.99 },
      { id: 10302, name: 'Assorted 7" Butterfly Koi', price: 32.99 },
      { id: 10300, name: 'Assorted 3–4" Shortfin Koi', price: 9.99 },
      { id: 10303, name: 'Gold Ogon Koi Grade A 4"', price: 14.99 },
      { id: 10305, name: 'Loach - Hi Fin Banded (M)', price: 19.99, pricingTiers: [{ min: 4, max: 10, price: 18.99 }] },
      { id: 10304, name: 'Mayan Butterfly Koi 5"', price: 19.99 },
      { id: 10306, name: 'Mosquito Fish (Gambusia)', price: 5.49, pricingTiers: [{ min: 100, max: 500, price: 5.39 }] }
    ],

    Rainbows: [
      { id: 9102, name: 'Boesemani Rainbow (L)', price: 16.99, pricingTiers: [{ min: 6, max: 20, price: 16.49 }] },
      { id: 9100, name: 'Blue-eye Gertrudae Aura II', price: 13.89, pricingTiers: [{ min: 15, max: 50, price: 13.69 }] },
      { id: 9104, name: 'Blue-eye Luminatus (Paskai)', price: 12.99, pricingTiers: [{ min: 12, max: 50, price: 12.79 }] },
      { id: 9105, name: 'Deep Water Creek (L)', price: 18.99, pricingTiers: [{ min: 8, max: 20, price: 18.29 }] },
      { id: 9101, name: 'Dwarf Neon Praecox Rainbow (M)', price: 12.69, pricingTiers: [{ min: 12, max: 30, price: 12.49 }] },
      { id: 9103, name: 'Forktail Rainbow (S)', price: 12.99, pricingTiers: [{ min: 12, max: 50, price: 12.79 }] },
      { id: 9106, name: 'Red Millennium (L)', price: 16.99 },
      { id: 9107, name: 'Threadfin Rainbow (M)', price: 12.99, pricingTiers: [{ min: 12, max: 30, price: 12.79 }] },
      { id: 9108, name: 'Threadfin Rainbow (L)', price: 14.89 },
      { id: 9109, name: 'Trifasciatus Rainbow (L)', price: 16.99, pricingTiers: [{ min: 8, max: 16, price: 16.49 }] },
      { id: 9110, name: 'Turquoise Rainbow', price: 15.99, pricingTiers: [{ min: 8, max: 16, price: 15.49 }] },
      { id: 9111, name: 'Yellow Rainbow (L)', price: 16.99 }
    ],

    Rasboras: [
      { id: 7001, name: 'Rasbora - Chili', price: 1.89, pricingTiers: [{ min: 25, max: 60, price: 1.69 }] },
      { id: 7002, name: 'Rasbora - Dwarf Clown Spot', price: 0.99, pricingTiers: [{ min: 20, max: 50, price: 0.89 }] },
      { id: 7003, name: 'Rasbora - Espei', price: 1.49, pricingTiers: [{ min: 15, max: 40, price: 1.29 }] },
      { id: 7004, name: 'Rasbora - Green Kubotai', price: 2.99, pricingTiers: [{ min: 12, max: 50, price: 2.79 }] },
      { id: 7005, name: 'Rasbora - Harlequin (M)', price: 1.49, pricingTiers: [{ min: 15, max: 40, price: 1.29 }] },
      { id: 7006, name: 'Rasbora - Harlequin (L)', price: 1.69 },
      { id: 7007, name: 'Rasbora - Micro Tiger', price: 2.99, pricingTiers: [{ min: 12, max: 50, price: 2.79 }] },
      { id: 7008, name: 'Rasbora - Rummynose Male', price: 2.99, pricingTiers: [{ min: 12, max: 50, price: 2.79 }] },
      { id: 7000, name: 'Rasbora - Brilliant Red Tail', price: 1.49, pricingTiers: [{ min: 25, max: 100, price: 1.29 }] }
    ],

    Sharks: [
      { id: 9520, name: 'Shark - Bala 3"', price: 8.99 },
      { id: 9521, name: 'Shark - Rainbow Albino', price: 7.69, pricingTiers: [{ min: 8, max: 30, price: 7.49 }] },
      { id: 9522, name: 'Shark - Rainbow', price: 7.69, pricingTiers: [{ min: 8, max: 30, price: 7.49 }] },
      { id: 9523, name: 'Shark - Red Tail', price: 7.69, pricingTiers: [{ min: 8, max: 30, price: 7.49 }] },
      { id: 9524, name: 'Shark - Roseline 3"', price: 13.99, pricingTiers: [{ min: 6, max: 20, price: 13.49 }] }
    ],

    'South American': [
      { id: 10200, name: 'Arowana - Silver 3"', price: 21.99 },
      { id: 10201, name: 'Catfish - Banjo', price: 8.19, pricingTiers: [{ min: 8, max: 15, price: 7.99 }] },
      { id: 10202, name: 'Catfish - Bumblebee', price: 7.89, pricingTiers: [{ min: 10, max: 30, price: 7.69 }] },
      { id: 10203, name: 'Catfish - Farlowella', price: 10.99 },
      { id: 10204, name: 'Catfish - Pictus Spotted', price: 11.99 },
      { id: 10205, name: 'Catfish - Ornate Pim', price: 54.99 },
      { id: 10206, name: 'Catfish - Red Tail 3"', price: 14.99 },
      { id: 10207, name: 'Gar - Black Spot (M)', price: 14.99 },
      { id: 10208, name: 'Hatchetfish - Silver', price: 7.99 },
      { id: 10209, name: 'Knife - Black Ghost 3"', price: 13.99 },
      { id: 10210, name: 'Pacu - Red Belly', price: 7.99 },
      { id: 10211, name: 'Payara - Red Tail Vampire', price: 49.99 },
      { id: 10212, name: 'Pencil Fish - Red Beckfordi', price: 6.89, pricingTiers: [{ min: 15, max: 40, price: 6.69 }] },
      { id: 10213, name: 'Silver Dollar (M)', price: 8.69, pricingTiers: [{ min: 8, max: 15, price: 8.29 }] },
      { id: 10214, name: 'Silver Dollar - Blackberry (M)', price: 24.99 }
    ],

    Swordtails: [
      { id: 10100, name: 'Assorted Swordtail (L)', price: 7.89, pricingTiers: [{ min: 14, max: 30, price: 7.69 }] },
      { id: 10101, name: 'Black Nubian Swordtail (L)', price: 7.99, pricingTiers: [{ min: 14, max: 30, price: 7.79 }] },
      { id: 10102, name: 'Green Sword 50:50 (L)', price: 7.99, pricingTiers: [{ min: 14, max: 30, price: 7.79 }] },
      { id: 10103, name: 'Pineapple Sword 50:50 (L)', price: 7.99, pricingTiers: [{ min: 14, max: 30, price: 7.79 }] },
      { id: 10104, name: 'Pineapple Mickey Mouse Sword (M)', price: 6.99, pricingTiers: [{ min: 14, max: 30, price: 6.79 }] },
      { id: 10105, name: 'Red Fire Swordtail (L)', price: 7.49, pricingTiers: [{ min: 14, max: 30, price: 7.19 }] },
      { id: 10106, name: 'Red Wag Sword 50:50 (L)', price: 7.99, pricingTiers: [{ min: 14, max: 30, price: 7.79 }] },
      { id: 10107, name: 'Red & White Kohaku (M)', price: 7.99, pricingTiers: [{ min: 14, max: 30, price: 7.79 }] }
    ],

    Tetra: [
      { id: 5600, name: 'Tetra (Amandae) Ember', price: 1.19, pricingTiers: [{ min: 25, max: 50, price: 1.09 }] },
      { id: 5601, name: 'Tetra (Black Neon)', price: 1.19, pricingTiers: [{ min: 20, max: 40, price: 1.09 }] },
      { id: 5602, name: 'Tetra (Black Phantom)', price: 1.29, pricingTiers: [{ min: 20, max: 50, price: 1.19 }] },
      { id: 5603, name: 'Tetra (Cardinal) (M)', price: 1.89, pricingTiers: [{ min: 20, max: 50, price: 1.69 }] },
      { id: 5604, name: 'Tetra (Congo) Medium', price: 2.99, pricingTiers: [{ min: 8, max: 40, price: 2.79 }] },
      { id: 5605, name: 'Tetra (Congo) Large', price: 6.99, pricingTiers: [{ min: 8, max: 40, price: 6.49 }] },
      { id: 13, name: 'Tetra (Diamond) Large', price: 1.99 },
      { id: 5606, name: 'Tetra (Emperor)', price: 1.49, pricingTiers: [{ min: 20, max: 50, price: 1.29 }] },
      { id: 5607, name: 'Tetra (Emperor Blue)', price: 1.89, pricingTiers: [{ min: 20, max: 50, price: 1.69 }] },
      { id: 5608, name: 'Tetra (Emperor Purple)', price: 1.69, pricingTiers: [{ min: 20, max: 50, price: 1.49 }] },
      { id: 5609, name: 'Tetra (Glass Bloodfin)', price: 1.29, pricingTiers: [{ min: 20, max: 50, price: 1.19 }] },
      { id: 5610, name: 'Tetra (Glowlite)', price: 0.99, pricingTiers: [{ min: 20, max: 50, price: 0.89 }] },
      { id: 5611, name: 'Tetra (Gold)', price: 1.29, pricingTiers: [{ min: 20, max: 50, price: 1.19 }] },
      { id: 14, name: 'Tetra (Green Neon) Wild', price: 1.19 },
      { id: 5612, name: 'Tetra (Green Neon) Tank Raised', price: 1.99, pricingTiers: [{ min: 25, max: 100, price: 1.79 }] },
      { id: 5613, name: 'Tetra (Lemon) Medium', price: 1.19, pricingTiers: [{ min: 20, max: 100, price: 1.09 }] },
      { id: 5614, name: 'Tetra (Neon) Medium', price: 0.99, pricingTiers: [{ min: 40, max: 100, price: 0.89 }] },
      { id: 5615, name: 'Tetra (Neon) Large', price: 1.29, pricingTiers: [{ min: 25, max: 50, price: 1.19 }] },
      { id: 5616, name: 'Tetra (Red Phantom)', price: 1.49, pricingTiers: [{ min: 20, max: 50, price: 1.29 }] },
      { id: 5617, name: 'Tetra (Rummynose)', price: 1.69, pricingTiers: [{ min: 20, max: 50, price: 1.49 }] },
      { id: 5618, name: 'Tetra (Serpae) Red Minor', price: 1.09, pricingTiers: [{ min: 20, max: 50, price: 0.99 }] },
      { id: 5619, name: 'Tetra (Silvertip)', price: 1.09, pricingTiers: [{ min: 20, max: 50, price: 0.99 }] }
    ],

    WhiteClouds: [
      { id: 7009, name: 'White Cloud (L)', price: 0.99, pricingTiers: [{ min: 25, max: 50, price: 0.89 }] },
      { id: 7010, name: 'White Cloud Gold (M)', price: 0.99, pricingTiers: [{ min: 25, max: 50, price: 0.89 }] }
    ]
  },

  plants: {
    'Anubias': [
      { id: 1100, name: 'Anubias Barteri (M)', price: 7.89 },
      { id: 1101, name: 'Anubias Frazeri (M)', price: 7.89 },
      { id: 1102, name: 'Anubias Nana (M)', price: 7.89 }
    ],

    'Bunched Stems': [
      { id: 1400, name: 'Ammania Gracilis (Bunched & Leaded)', price: 2.99 },
      { id: 1401, name: 'Anacharis (Bunched & Leaded)', price: 2.99 },
      { id: 1410, name: 'Bacopa (Bunched & Leaded)', price: 2.49 },
      { id: 1411, name: 'Giant Baby Tears (Bunched & Leaded)', price: 3.99 },
      { id: 1412, name: 'Glossostigma (Bunched & Leaded)', price: 2.49 },
      { id: 1413, name: 'Hornwort (Bunched & Leaded)', price: 2.49 },
      { id: 1414, name: 'Hygro Pinna (Bunched & Leaded)', price: 3.59 },
      { id: 1415, name: 'Ludwigia Deep Red (Bunched & Leaded)', price: 3.98 },
      { id: 1416, name: 'Ludwigia Green (Bunched & Leaded)', price: 2.49 },
      { id: 1417, name: 'Mermaid (Bunched & Leaded)', price: 2.49 },
      { id: 1418, name: 'Mint Charlie (Bunched & Leaded)', price: 2.49 },
      { id: 1419, name: 'Misc. Bunched Plants (Assorted)', price: 6.99, pricingTiers: [{ min: 10, max: 40, price: 6.79 }] },
      { id: 1420, name: 'Parrots Feather (Bunched & Leaded)', price: 2.59 },
      { id: 1421, name: 'Pennywort (Bunched & Leaded)', price: 2.69 }
    ],

    'Bulbs': [
      { id: 1600, name: 'Cardinal Plant (Bare Root Each)', price: 2.59 }
    ],

    'Carpets & Grasses': [
      { id: 1800, name: '“Valish” Sagittaria – Dwarf (Bunched & Leaded)', price: 2.79 }
    ],

    'Cryptocoryne': [
      { id: 1900, name: 'Crypto Lutea (Bare Root, Large)', price: 7.49 },
      { id: 1901, name: 'Crypto Wendtii Green (Bare Root, Large)', price: 7.49 },
      { id: 1902, name: 'Crypto Wendtii Red (Bare Root, Large)', price: 7.49 }
    ],

    'Ferns': [
      { id: 1300, name: 'Java Fern (M)', price: 3.79 }
    ],

    'Floating': [
      { id: 1500, name: 'Salvinia (Full Betta Cup Portion)', price: 6.99 }
    ],

    'Mosses': [
      { id: 1301, name: 'Java Moss (Full Betta Cup Portion)', price: 3.98 },
      { id: 1302, name: 'Christmas Moss (Full Betta Cup Portion)', price: 4.87 }
    ],

    'Onions': [
      { id: 1601, name: 'Onion Plant (Bare Root Each)', price: 2.49 }
    ],

    'Potted': [
      { id: 1150, name: 'Potted - Anubias Barteri', price: 7.89 },
      { id: 1151, name: 'Potted - Anubias Nana', price: 7.89 },
      { id: 1152, name: 'Potted - Crypto Wendtii', price: 8.89 },
      { id: 1153, name: 'Potted - Dwarf Baby Tears', price: 8.89 },
      { id: 1154, name: 'Potted - Dwarf Hairgrass', price: 8.89 },
      { id: 1155, name: 'Potted - Giant Hairgrass', price: 8.89 },
      { id: 1156, name: 'Potted - Micro Sword', price: 8.89 },
      { id: 1157, name: 'Potted - Monte Carlo', price: 4.59 },
      { id: 1158, name: 'Potted - Pearl Weed', price: 8.89 },
      { id: 1159, name: 'Potted - Pogostemon Narrow Leaf', price: 2.89 },
      { id: 1160, name: 'Potted - Red Mini Ludwigia', price: 8.89 },
      { id: 1161, name: 'Potted - Red Rotala', price: 8.89 },
      { id: 1162, name: 'Potted - Scarlet Temple', price: 3.98 },
      { id: 1163, name: 'Potted - Sword Radican', price: 9.99 },
      { id: 1164, name: 'Potted - Temple', price: 3.98 },
      { id: 1165, name: 'Potted - Venus Fly Trap', price: 11.95 },
      { id: 1166, name: 'Potted - Wisteria', price: 3.98 },
      { id: 1167, name: 'Potted - Assorted Aquarium Plants', price: 8.79 }
    ],

    'Swords': [
      { id: 1200, name: 'Sword - Amazon (M)', price: 7.99 },
      { id: 1201, name: 'Sword - Red Melon (M)', price: 8.49 },
      { id: 1202, name: 'Sword - Sparkle (L)', price: 10.99 },
      { id: 1203, name: 'Sword - Sparkle (M)', price: 8.99 }
    ],

    'Terrarium': [
      { id: 1700, name: 'Bamboo - Straight 12"', price: 6.99 },
      { id: 1701, name: 'Terrarium Aluminum Plant (Bunched & Leaded)', price: 2.49 },
      { id: 1702, name: 'Terrarium Purple Waffle (Bunched & Leaded)', price: 3.99 }
    ],

    'Vallisneria': [
      { id: 1950, name: 'Val - Contortion (Bunched & Leaded)', price: 3.99 },
      { id: 1951, name: 'Val - Jungle (Bunched & Leaded)', price: 3.99 }
    ]
  },

  misc: {
    Carbon: [
      { id: 400, name: 'iAqua Carbon (8 oz)', price: 8.99 }, 
      { id: 401, name: 'iAqua Carbon (12 oz)', price: 10.99 }, 
      { id: 402, name: 'iAqua Carbon (16 oz)', price: 12.99 }, 
      { id: 403, name: 'iAqua Carbon (24 oz)', price: 18.99 }
    ],

    Driftwood: [
      { id: 500, name: 'Small Decorative Driftwood', price: 12.99 }, 
      { id: 501, name: 'Medium Decorative Driftwood', price: 16.99 }, 
      { id: 502, name: 'Large Decorative Driftwood', price: 20.99 },
    ],

    'Fish Food': [
      { id: 400, name: 'Premium Community Flake Food (0.8 oz)', price: 2.60 },
      { id: 401, name: 'Premium Community Flake Food (2.1 oz)', price: 4.89 },
      { id: 402, name: 'Premium Community Flake Food (7.4 oz)', price: 11.09 },
      { id: 403, name: 'Color Enhancing Community Flake Food (0.8 oz)', price: 3.89 },
      { id: 404, name: 'Color Enhancing Community Flake Food (2.1 oz)', price: 6.99 },
      { id: 405, name: 'Color Enhancing Community Flake Food (7.4 oz)', price: 19.99 },
      { id: 406, name: 'Insect Meal Granules (1.3 oz)', price: 3.32 },
      { id: 407, name: 'Betta Food Small Granules (0.3 oz)', price: 1.99 },
      { id: 408, name: 'Veggie Flake Food for Vegans (2.1 oz)', price: 6.29 },
      { id: 409, name: 'Veggie Based with a Little Protein (1.5 oz)', price: 4.89 },
      { id: 410, name: 'Sinking Chips for Plecos and Similar (1.3 oz)', price: 3.91 },
      { id: 411, name: 'Sinking Chips for Plecos and Similar (3.3 oz)', price: 7.92 },
      { id: 412, name: 'Cichlid Granules w/ Color Enhancement (4.7 oz)', price: 6.95 },
      { id: 413, name: "Krill-Based 'Stick on Glass' Treats (0.5 oz)", price: 2.63 },
      { id: 414, name: 'Powder Food for Fry w/ Krill and Spirulina (0.8 oz)', price: 3.51 },
      { id: 415, name: 'Fancy Shrimp Sinking Granules (1.9 oz)', price: 4.35 },
      { id: 416, name: 'Crab and Lobster w/ Loop Shape Pellets (1.0 oz)', price: 4.35 },
      { id: 417, name: 'Goldfish Flake Food w/ Insect Meal (2.1 oz)', price: 4.05 },
      { id: 418, name: 'Slow Sinking Pellets for Saltwater Fish (1.5 oz)', price: 4.89 },
      { id: 419, name: "Marine Fish Treat Tabs 'Stick on Glass' (2.1 oz)", price: 8.61 },
      { id: 420, name: 'Discus Granules with Probiotics (3.9 oz)', price: 8.68 }
    ],

    'Fish Items': [
      { id: 200, name: 'Breeder Net', price: 3.49 }
    ],

    'Plant Items': [
      { id: 300, name: 'Plant Fertilizer', price: 7.99 }
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
          const items = categoryData[categoryName].filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          );

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
