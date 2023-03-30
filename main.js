import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/league.css";

import Reveal from "reveal.js";
import config from "./.revealrc";

let deck = new Reveal();

deck.initialize(config);
