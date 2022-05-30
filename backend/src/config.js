require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "AK&DOKS Watch Faces";
const description = "AK & DOKS is a watch brand and the proprietor of the AK & DOKS NFTs which were inspired by the dial of the AK & DOKS N.A.T. 1 collection. The premier design was created in collaboration with a local Nigerian artist and gives a unique identity to our art inspired brand. 5000 of these unique watch dial NFTs were designed, developed and placed on the Blockchain with the ERC 721 contract in collaboration with a local NFT creator. AK & DOKS then challenged five creative arts students from the University of Lagos, Nigeria to use local fabrics (Ankara) on a canvas with the original dial design framework and to use their creativity to express what New African Time (N.A.T) means to them. This excersise generated a total of 100 unique NFTs based on the original physical works created by the students and were then also placed on the Blockchain with the ERC 721 contract. The NFTs were created to be used as unique watch dial backgrounds for both android and iOS smart watches. Collecting one or more of these NFTs will qualify you for a digital clock that will be launched soon by AK & DOKS.";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 500,
    layersOrder: [
      { name: "Abstract One Backgrounds" },
      { name: "Abstract One Lines & Edges" },
      { name: "Abstract One Flames" },
      { name: "Abstract One Blue Cells" },
      { name: "Abstract One Orange Cells" },
      { name: "Abstract One Purple Cells" },
      { name: "Abstract One Red Cells" },
      { name: "Abstract One Violet Cells" },

    ],
  },
  {
    growEditionSizeTo: 640,
    layersOrder: [
      { name: "African Heroes 1" },
      { name: "African Heroes Name" },
      { name: "African Heroes Anthony Joshuas" },
      { name: "African Heroes Black Athletes" },
      { name: "African Heroes Black Runners" },
      { name: "African Heroes Diddier Drogbas" },
      { name: "African Heroes Gebrselassies" },
      { name: "African Heroes George Weahs" },
      { name: "African Heroes Jackie Robinnsons" },
      { name: "African Heroes Makaha Ntinis" },
      { name: "African Heroes Old Man Athletes" },
      { name: "African Heroes Phil Coles" },
      { name: "African Heroes Ryoiehros" },
      { name: "African Heroes Samuel Etoos" },
    ],
  },
  {
    growEditionSizeTo: 780,
    layersOrder: [
      { name: "Basketball Backgrounds" },
      { name: "Basketball Outer Symbol" },
      { name: "Bball Name" },
      { name: "Basketball Chris Pauls" },
      { name: "Basketball Hakeems" },
      { name: "Basketball James Hardens" },
      { name: "Basketball Kareem Abduls" },
      { name: "Basketball Kevin Durants" },
      { name: "Basketball Kobes" },
      { name: "Basketball Lebron James" },
      { name: "Basketball Magic Johnson" },
      { name: "Basketball Michael Jordans" },
      { name: "Basketball Paul Georges" },
      { name: "Basketball Shaquille Oneals" },
      { name: "Basketball Stephen Currys" },
    ],
  },
  {
    growEditionSizeTo: 790,
    layersOrder: [
      { name: "Ankara Editions Background One" },
      { name: "Ankara Editions One" },
    ],
  },
  {
    growEditionSizeTo: 800,
    layersOrder: [
      { name: "Ankara Editions Background Two" },
      { name: "Ankara Editions Two" },
    ],
  },
  {
    growEditionSizeTo: 810,
    layersOrder: [
      { name: "Ankara Editions Background Three" },
      { name: "Ankara Editions Three" },
    ],
  },
  {
    growEditionSizeTo: 820,
    layersOrder: [
      { name: "Ankara Editions Background Four" },
      { name: "Ankara Editions Four" },
    ],
  },
  {
    growEditionSizeTo: 830,
    layersOrder: [
      { name: "Ankara Editions Background Five" },
      { name: "Ankara Editions Five" },
    ],
  },
  {
    growEditionSizeTo: 840,
    layersOrder: [
      { name: "Ankara Editions Background Six" },
      { name: "Ankara Editions Six" },
    ],
  },
  {
    growEditionSizeTo: 850,
    layersOrder: [
      { name: "Ankara Editions Background Seven" },
      { name: "Ankara Editions Seven" },
    ],
  },
  {
    growEditionSizeTo: 860,
    layersOrder: [
      { name: "Ankara Editions Background Eight" },
      { name: "Ankara Editions Eight" },
    ],
  },
  {
    growEditionSizeTo: 870,
    layersOrder: [
      { name: "Ankara Editions Background Nine" },
      { name: "Ankara Editions Nine" },
    ],
  },
  {
    growEditionSizeTo: 880,
    layersOrder: [
      { name: "Ankara Editions Background Ten" },
      { name: "Ankara Editions Ten" },
    ],
  },
  {
    growEditionSizeTo: 1380,
    layersOrder: [
      { name: "Big Planets Backgrounds" },
      { name: "Big Planets Big Planets" },
      { name: "Big Planets Cells" },
      { name: "Big Planets Small Earths" },
      { name: "Big Planets Small Jupiters" },
      { name: "Big Planets Small Mars" },
      { name: "Big Planets Small Mercurys" },
      { name: "Big Planets Small Neptunes" },
    ],
  },
  {
    growEditionSizeTo: 1880,
    layersOrder: [
      { name: "Bubble Backgrounds" },
      { name: "Bubble Texts" },
      { name: "Bubble Sphere One" },
      { name: "Bubble Sphere Two" },
      { name: "Bubble Sphere Three" },
      { name: "Bubble Sphere Four" },
      { name: "Bubble Sphere Five" },
      { name: "Bubble Sphere Six" },
    ],
  },
  {
    growEditionSizeTo: 1980,
    layersOrder: [
      { name: "Do More Background" },
      { name: "Do More Opening" },
      { name: "Do More Text" },
    ],
  },
  {
    growEditionSizeTo: 2080,
    layersOrder: [
      { name: "Look Original Background" },
      { name: "Look Original Opening" },
      { name: "Look Original Text" },
    ],
  },
  {
    growEditionSizeTo: 2180,
    layersOrder: [
      { name: "Reach Farther Background" },
      { name: "Reach Farther Opening" },
      { name: "Reach Farther Text" },
    ],
  },
  {
    growEditionSizeTo: 2280,
    layersOrder: [
      { name: "Soar Higher Background" },
      { name: "Soar Higher Opening" },
      { name: "Soar Higher Text" },
    ],
  },
  {
    growEditionSizeTo: 2380,
    layersOrder: [
      { name: "Stand Out Background" },
      { name: "Stand Out Opening" },
      { name: "Stand Out Text" },
    ],
  },
  {
    growEditionSizeTo: 2566,
    layersOrder: [
      { name: "Tullip Backgrounds" },
      { name: "Tullip Types" },
      { name: "Tullip Purpletas" },
      { name: "Tullip Tealas" },
      { name: "Tullip Winers" },
      { name: "Tullip Yallows" },
    ],
  },
  {
    growEditionSizeTo: 2752,
    layersOrder: [
      { name: "Sunflower Backgrounds" },
      { name: "Sunflower Types" },
      { name: "Sunflower Orangs" },
      { name: "Sunflower Purplas" },
      { name: "Sunflower Violas" },
      { name: "Sunflower Yellows" },
    ],
  },
  {
    growEditionSizeTo: 2939,
    layersOrder: [
      { name: "Rose Backgrounds" },
      { name: "Rose Types" },
      { name: "Rose Blews" },
      { name: "Rose Goldas" },
      { name: "Rose Purplews" },
      { name: "Rose Reeds" },
    ],
  },
  {
    growEditionSizeTo: 3126,
    layersOrder: [
      { name: "Frangipani Backgrounds" },
      { name: "Frangipani Types" },
      { name: "Frangipani Blaws" },
      { name: "Frangipani Greeny" },
      { name: "Frangipani Peenks" },
      { name: "Frangipani Turnts" },
    ],
  },
  {
    growEditionSizeTo: 3626,
    layersOrder: [
      { name: "Small Planets Backgrounds" },
      { name: "Small Planets Sun" },
      { name: "Small Planets Cells" },
      { name: "Small Planets Circles" },
      { name: "Small Planets Earth" },
      { name: "Small Planets Jupiter" },
      { name: "Small Planets Saturn" },
      { name: "Small Planets Mars" },
      { name: "Small Planets Neptune" },
      { name: "Small Planets Uranus" },
      { name: "Small Planets Venus" },
    ],
  },
  {
    growEditionSizeTo: 4126,
    layersOrder: [
      { name: "Texture Backgrounds" },
      { name: "Texture Cells" },
      { name: "Texture Boarders" },
      { name: "Texture Compasses" },
    ],
  },
  {
    growEditionSizeTo: 4626,
    layersOrder: [
      { name: "New African Time Backgrounds" },
      { name: "New African Time Polygon Background" },
      { name: "New African Time Africa" },
      { name: "New African Time Edge Shape One" },
      { name: "New African Time First Cells" },
      { name: "New African Time Texts" },
    ],
  },
  {
    growEditionSizeTo: 4680,
    layersOrder: [
      { name: "Limited Sub Dial Edition Backgrounds" },
      { name: "Limited Sub Dial Edition Glass" },
      { name: "Limited Sub Dial Edition Maps" },
    ],
  },
  {
    growEditionSizeTo: 4820,
    layersOrder: [
      { name: "Lawn Tennis Background" },
      { name: "Lawn Tennis Name" },
      { name: "Lawn Andy Rodicks" },
      { name: "Lawn Bjorn Borgs" },
      { name: "Lawn Changs" },
      { name: "Lawn Kasi Kafelnikovs" },
      { name: "Lawn Nadals" },
      { name: "Lawn Naomi Osakas" },
      { name: "Lawn Novaks" },
      { name: "Lawn Pat Rafters" },
      { name: "Lawn Roger Federers" },
      { name: "Lawn Serenas" },
      { name: "Lawn Venus" },
      { name: "Lawn Yahiya Doumbas" },
    ],
  },
  {
    growEditionSizeTo: 4960,
    layersOrder: [
      { name: "Formula 1 Backgrounds" },
      { name: "Formula 1 Name" },
      { name: "Formula Cognizants" },
      { name: "Formula Cosworths" },
      { name: "Formula Deustches" },
      { name: "Formula Jules Bianchis" },
      { name: "Formula Louis Hamiltons" },
      { name: "Formula Max Chiltons" },
      { name: "Formula Pietro Fittipaldis" },
      { name: "Formula Prosts" },
      { name: "Formula Rubens Barrichels" },
      { name: "Formula Sasols" },
      { name: "Formula Shadangs" },
      { name: "Formula Valtteri Bottas" },
    ],
  },
  {
    growEditionSizeTo: 5100,
    layersOrder: [
      { name: "Football Background" },
      { name: "Football Name" },
      { name: "Footballer Alex Iwobis" },
      { name: "Footballer Christiano Ronaldos" },
      { name: "Footballer Jayjays" },
      { name: "Footballer Kanu Nwankwos" },
      { name: "Footballer Kelechi Iheanachos" },
      { name: "Footballer Leon Ibrahims" },
      { name: "Footballer Lionel Messis" },
      { name: "Footballer Lukakus" },
      { name: "Footballer Mikel Obis" },
      { name: "Footballer Neymars" },
      { name: "Footballer Odion Ighalos" },
      { name: "Footballer Victor Moses" },
    ],
  }
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1080,
  height: 1080,
  smoothing: false,
};

const extraMetadata = {

  external_url: "https://ak_&_doks_watch_faces.xyz", // Replace with your website or remove this line if you do not have one.

};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'polygon'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER
const CONTRACT_NAME = 'AK&DOKS Watch Faces';
const CONTRACT_SYMBOL = 'ADWF';
const METADATA_UPDATABLE = false; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x5ebE876152df8b7EE91A1aD62BBe14cB19483384';
const TREASURY_ADDRESS = '0x5ebE876152df8b7EE91A1aD62BBe14cB19483384';
const MAX_SUPPLY = 5100; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.001; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-07-14T00:00:00+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-07-01T00:00:00+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x5ebE876152df8b7EE91A1aD62BBe14cB19483384"; // Address that will receive the royalty

const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = false; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = []; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "0xc9a0fDb7B92811a3AEF1B760960715E028f08270"; // If you want to manually include it


// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = false; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "REPLACE THIS"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/QmUf9tDbkqnfHkQaMdFWSGAeXwVXWA61pFED7ypx4hcsfh"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
