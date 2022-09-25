langs.en = { // Property here should match this language name
	"phrases": {
		dark:											"Dark",
		fullscreen:								"Fullscreen",
		steps:										"Steps",
		mute:											"Mute",
		compact:									"Compact",
		reset:										"Reset",
		alone:										"Alone",
		all:											"All",
		title:										"Phasmophobia Ghost Finder",
		line1:										"Select clues or type the numbers to toggle choices, to find the ghost type.",
		line2:										"Use [ and ] for maps: Space to select; Enter to open map. +/- to change difficulty",
		line3:										"Maps mercilessly stolen from",
		gameplay:									"Gameplay &amp; item info",
		github:										"Visit on GitHub",
		discord:									"Discord",
		hunt_timers:							"Hunt timers include the various grace periods",
		no_info:									"No information yet",
		open_map:									"Open Map",

		// Timers
		timer_start:							"Start",
		timer_hunt:								"Hunt",
		timer_cursed:							"Cursed Hunt",
		timer_post_hunt:					"Post-Hunt",
		timer_smudge:							"Smudge",
		timer_smudge_spirit:			"Spirit Smudge",
		timer_smudge_demon:				"Demon Smudge",

		// Maps
		map_asylum:								"Asylum",
		map_bleasdale:						"Bleasdale",
		map_brownstone:						"High School",
		map_edgefield:						"Edgefield",
		map_grafton:							"Grafton",
		map_maple:								"Maple Lodge",
		map_prison:								"Prison",
		map_ridgeview:						"Ridgeview",
		map_tanglewood:						"Tanglewood",
		map_willow:								"Willow",

		// Difficulties
		diff_ama:									"Amateur",
		diff_int:									"Intermediate",
		diff_pro:									"Professional",
		diff_har:									"Nightmare",

		// Photos tab
		photos:										"Photos",
		type:											"Type",
		stars:										"Stars (up/down)",
		photo_none:								"--------",
		photo_bone:								"Bone",
		photo_cursed_item:				"Cursed Item",
		photo_dead_body:					"Dead Body",
		photo_dirty_water:				"Dirty Water",
		photo_finger_prints:			"Fingerprints",
		photo_footsteps:					"Footsteps",
		photo_ghost:							"Ghost",
		photo_interaction:				"Interaction",
		roll:											"Roll",

		roll_cat_maps:						"Maps",
		roll_cat_items:						"Items",
		roll_cat_clear:						"Clear",
		roll_cat_all:							"All",
		roll_cat_small:						"Small",
		roll_cat_medium:					"Medium",
		roll_cat_large:						"Large",
		roll_cat_evidence:				"Evidence",
		roll_cat_secondary:				"Secondary",
		roll_cat_lights:					"Lights",
		roll_cat_electric:				"Electrical",

		// Rolls tab
		roll_asylum:							"Asylum",
		roll_bleasdale:						"Bleasdale Farmhouse",
		roll_brownstone:					"Brownstone High School",
		roll_edgefield:						"Edgefield Street",
		roll_grafton:							"Grafton Farmhouse",
		roll_maple:								"Maple Lodge Campsite",
		roll_prison:							"Prison",
		roll_ridgeview:						"Ridgeview Road",
		roll_tanglewood:					"Tanglewood Street",
		roll_willow:							"Willow Street",
		roll_can:									"Candle",
		roll_cru:									"Crucifix",
		roll_dot:									"DOTS Projector",
		roll_emf:									"EMF Reader",
		roll_fla:									"Flashlight",
		roll_gwb:									"Ghost Writing Book",
		roll_glo:									"Glowstick",
		roll_lig:									"Lighter",
		roll_mos:									"Motion Sensor",
		roll_par:									"Parabolic Microphone",
		roll_cam:									"Photo Camera",
		roll_sal:									"Salt",
		roll_san:									"Sanity Pills",
		roll_sms:									"Smudge Sticks",
		roll_snd:									"Sound Sensor",
		roll_spb:									"Spirit Box",
		roll_sfl:									"Strong Flashlight",
		roll_thm:									"Thermometer",
		roll_tri:									"Tripod",
		roll_uvl:									"UV Light",
		roll_vid:									"Video Camera",

		// Clues
		clue_dots:								"DOTS",
		clue_emf:									"EMF 5",
		clue_prints:							"Prints",
		clue_temps:								"Freezing",
		clue_orb:									"Orbs",
		clue_writing:							"Writing",
		clue_box:									"Spirit Box",

		// Ghost useful info
		ghost_banshee:						"Banshee",
		ghost_banshee_useful:			[
			"Hunts only its target and only checks target sanity before hunting, unless target is outside",
			"Will often wander to target",
			"Prefers singing during ghost events; these drain +5% sanity",
			"May shriek through paramic",
		],
		ghost_demon:							"Demon",
		ghost_demon_useful:				[
			"Crucifixes have +2m range",
			"Can teleport to target at start of hunt, if they had ghost LoS within 20s",
			"Can hunt at 70% sanity",
			"Low chance to hunt at any sanity level",
			"Delay between hunts is reduced to 20s",
			"Smudges last 2/3 as long: 60s",
		],
		ghost_deogen:							"Deogen",
		ghost_deogen_useful:			[
			"Can detect player locations during hunt; players cannot hide",
			"Chooses closest player at start of hunt; randomly changes to nearer players",
			"Moves at max speed (3M/s) beyond 6m path distance from a player, slowing to 0.4M/s within 2.5M",
			"Can hunt at 40% sanity",
			"Increased chance for DOTS and Ghost Writing",
			"33% for unique spirit box sound (breathing). Must be within 1m of ghost",
		],
		ghost_goryo:							"Goryo",
		ghost_goryo_useful:				[
			"Will never perform a long roam from the ghost room",
			"Won't show DOTS with people in the ghost room",
			"DOTS can only be observed through a camera",
			"Nightmare mode: DOTS are guaranteed",
		],
		ghost_hantu:							"Hantu",
		ghost_hantu_useful:				[
			"2x as likely to turn off breaker",
			"Speed never ramps during hunt; moves slower in warm rooms, faster in cold",
			"Moves just slower than player speed at 15&deg;C; speed increases every -3&deg;C (37.4&deg;F) up to 1.7x player speed at 0&deg;C",
			"Can breathe mist in rooms below 3&deg;C (37.4&deg;F) when hunting",
			"Nightmare mode: freezing is guaranteed",
		],
		ghost_jinn:								"Jinn",
		ghost_jinn_useful:				[
			"Will never turn off breaker",
			"With breaker on, chance to drop sanity by 25% within 3m",
			"During hunt with breaker on, will be 1.5x player speed (2.5m/s) when chasing, until within 2m of target",
		],
		ghost_mare:								"Mare",
		ghost_mare_useful:				[
			"Cannot turn light switches on",
			"Prefers to turn off lights as interactions",
			"Can instantly turn off switches as they are turned on",
			"Prefers to blow up lights during ghost events",
			"Will attempt long roams to escape lit rooms",
			"Room lights on reduces hunt threshold to 40%",
			"Room lights off increases hunt threshold to 60%",
		],
		ghost_mimic:							"Mimic",
		ghost_mimic_useful:				[
			"Can behave as any other ghost, including hunt behaviour and triggers",
			"Will change behaviour no more than once per-minute",
			"Shows false ghost orbs",
			"When mimicking Thaye, chooses random starting age; will change ghosts when ageing stage occurs",
		],
		ghost_moroi:							"Moroi",
		ghost_moroi_useful:				[
			"Curses spirit box user; sanity drops while indoors until pills taken",
			"Also curses paramic users upon hearing footsteps or whispers",
			"Cursed players' sanity drop rate doubled",
			"Moves faster at lower average sanity; 90% player speed at 50% sanity, 115% at 25% sanity, 135% at 0% sanity",
			"Smudge stick targeting grace period lasts 2x as long (12s)",
			"Nightmare mode: spirit box is guaranteed",
		],
		ghost_myling:							"Myling",
		ghost_myling_useful:			[
			"Speaks more often to the paramic",
			"Footsteps are very quiet during hunts; equipment may malfunction before footsteps are heard",
		],
		ghost_obake:							"Obake",
		ghost_obake_useful:				[
			"75% chance to leave fingerprints",
			"25% chance for fingerprints to have 6 fingers",
			"Fingerprints can disappear after 50% of normal time",
			"Nightmare mode: fingerprints are guaranteed",
		],
		ghost_oni:								"Oni",
		ghost_oni_useful:					[
			"One of the most active ghost types",
			"Can throw items at high speed",
			"Will not perform the mist ball (single gasp) ghost event",
			"Prefers physical form for ghost events",
		],
		ghost_onryo:							"Onryo",
		ghost_onryo_useful:				[
			"Will blow out candles more often than other ghosts",
			"50% chance to hunt when flame is extinguished below 80% sanity (except first three blowouts)",
			"+25% hunt chance per dead player",
			"Can hunt from 60% sanity without flame in room",
			"Candles act as crucifixes with 4m hunt blocking range. Has precedence over crucifix",
			"When candle prevents hunt, it is blown out",
		],
		ghost_phantom:						"Phantom",
		ghost_phantom_useful:			[
			"Disappears but remains when photo is taken while not hunting",
			"Sanity drops 2x when visible (stops if hidden due to photo)",
			"Can wander to indoor player",
			"Blinks very slowly during hunt",
		],
		ghost_poltergeist:				"Poltergeist",
		ghost_poltergeist_useful:	[
			"Can throw several items at once",
			"Reduces witness sanity by 2x thrown items",
		],
		ghost_raiju:							"Raiju",
		ghost_raiju_useful:				[
			"Can hunt at 65% when near electronics",
			"Greatly increased speed during hunt when near electronics",
			"Has an increased range of electrical disruption",
		],
		ghost_revenant:						"Revenant",
		ghost_revenant_useful:		[
			"Travels very fast when it can see a player",
			"Travels very slowly when not seeing players",
		],
		ghost_shade:							"Shade",
		ghost_shade_useful:				[
			"Very inactive",
			"Won't throw anything with anyone in the ghost room",
			"Ghost event chance linked to sanity loss; normal chances below 50%",
			"Prefers breath ghost events",
			"Prefers shadow form during ghost events",
			"Cannot hunt above 35% sanity",
			"Won't try to hunt with anyone in room",
		],
		ghost_spirit:							"Spirit",
		ghost_spirit_useful:			[
			"Smudges last twice as long: 180s",
		],
		ghost_thaye:							"Thaye",
		ghost_thaye_useful:				[
			"2x chance to interact and perform ghost events",
			"Increased chance for DOTS and Ghost Writing",
			"Attempts to age every 1-2 minutes; if no players are in the ghost room, retries every 30s until success",
			"While young, can hunt at 75% sanity; -6% sanity per ageing stage",
			"10 ageing stages; interaction and ghost event chance reduced by 15% per ageing stage, down to 50%",
			"Speed reduced by 10% player speed per ageing stage, from 166% player speed to 60%; does not speed up during hunts",
			"While old, can hunt at 15% sanity",
			"While old, won't try to hunt with anyone in room",
		],
		ghost_twins:							"Twins",
		ghost_twins_useful:				[
			"Both twins occupy the same location, however the decoy has a 16m interaction radius",
			"Both twins can interact one after the other",
			"Either twin may begin a hunt; main twin moves at -10%, decoy moves at +10%",
			"Decoy hunts will start immediately after a decoy interaction",
			"Each twin may have its own hunting sound (rumoured)",
		],
		ghost_wraith:							"Wraith",
		ghost_wraith_useful:			[
			"When loud-stepping after salt, no footprints show",
			"After stepping in salt, becomes permanently more active",
			"Can teleport near a random indoor player and leave EMF",
		],
		ghost_yokai:							"Yokai",
		ghost_yokai_useful:				[
			"Increased activity when speaking near the ghost",
			"Can hunt below 80% when players are talking nearby",
			"Can only hear players &lt;2m away during hunts",
		],
		ghost_yurei:							"Yurei",
		ghost_yurei_useful:				[
			"Chance to drop sanity by 13% within 3m (closes a nearby door)",
			"Cannot roam while smudged",
		],

		// Gameplay info
		gameplay_hotkeys:							"Hotkeys",
		gameplay_hotkeys_items:				[
			"0-9	Toggle each evidence item to either confirm or disregard, to help identify the ghost. When the Photos tab is pulled out, toggles the individual photo types",
			"[ / ]	Cycle through the available maps: press Space to select map; Enter to open. When the Photos tab is pulled out, allows the selection of photo quality",
			"+ / -	Increase or decrease difficulty",
			"Q-U		Select a timer, and use # to start or stop. Press the letter key again to reset",
			".	Start or stop default step timer, to check against ghost step speed",
			"#		Start or stop selected timer",
			"A	Toggle alone / all players ghost",
			"C	Toggle compact mode (ghost hints hidden)",
			"D	Toggle dark mode",
			"F	Toggle fullscreen",
			"S	Pulls out the Photos tab",
			"L	Pulls out the Roll tab",
			"M	Mute timer sounds",
			"X	Reset the ghost finder for the next ghost. Will not change the selected map, difficulty or timer",
		],
		gameplay_general:							"General",
		gameplay_general_items:				[
			"Crouching reduces your visible area to the ghost, and allows you to see the floor in dark areas",
			"Sprinting allows movement at ~1.8x for 3.5s with 5s cooldown - scales for partial use",
			"Bones can spawn in any unenclosed locations; will not spawn in cabinets, but can spawn inside raised door frames, towels, and carpets",
			"All ghosts have a favourite room, but the &quot;ghost room&quot; refers only to the room the ghost is currently in. Ghosts on Professional and Nightmare difficulties, when roaming, will sometimes choose their current location as a new favourite room",
			"Ghosts will slowly reduce the temperature of any room they\"re in, including during hunts",
			"Ghost events (ghost appearance, walking to a player, mist balls, and loud breaths) reduce the target\"s sanity by 10%. All ghost events target a single player, and the ghost can teleport near a player in order to perform an event",
			"While a ghost is manifested (ghost event or hunt), all players within the map lose 0.2% sanity per-second",
			"Mist ball ghost events will not teleport the ghost",
			"Ghosts can only hear player microphones (and held electronics) in an 8m radius on the same floor",
			"Speaking a ghost's name will increase their activity level for a short time",
			"A ghost will make the same ambient sound for every hunt; if the ghost makes a different sound, this is a ghost event",
			"Ghost events will turn off the light in the ghost room and close all adjacent doors (including exit doors)",
			"The breaker will always start on in Amateur difficulty, and off in all others",
			"Up to 9 light switches may be on on small maps, 8 on medium, and 7 on large maps",
			"If the breaker is popped by turning on too many lights, all lights will be switched off",
			"All ghosts will occasionally roam from their room: small roams are common, large roams are rare",
			"Ghost can blink lights when near a light switch",
			"Player sanity will not drop below 50% during setup phase",
			"Every party member loses 15% sanity per player death",
		],
		gameplay_evidence:						"Evidence Items",
		gameplay_evidence_items:			[
			"Thermometers update slowly; have patience",
			"Freezing temps counts as below 0&deg;C or 32&deg;F, or if you see breath mist",
			"EMF values: 2 for interaction; 3 for throw; 4 for ghost event. 25% chance to become 5 for EMF 5 ghosts",
			"Truck EMF board registers EMF as 1 less than real values, with optional extra +/-1 variation: EMF 3 can show as 1, 2 or 3",
			"Spirit boxes will work anywhere inside the map, but the ghost will only listen to someone in a room with no lights on, within 3m of the ghost",
			"Ghost orbs only appear in the ghost's favourite room, and as such can be used to track the ghost's likely location",
			"DOTS sensors are periodically activated by ghosts within 7m and show moving silhouettes. Usually activates every 30s or less",
			"Video and regular cameras can see ghost orbs. Ghost orbs move around the room and behave like bubbles",
			"Ghost writing books are considered by the ghost as standard interaction and throwable items, like random clutter. Removing clutter can increase the chances of the ghost interacting with a book",
			"When written in, ghost writing books will levitate and the pen will scribble - this can be observed via cameras",
			"A writing ghost will always write in the book if it throws it; if the book has moved and is empty, writing can be excluded",
		],
		gameplay_non_evidence:				"Non-Evidence Items",
		gameplay_non_evidence_items:	[
			"Cameras can be used to take photos of fingerprints, footsteps, ghosts, bones, dead bodies, dirty water, and general interactions",
			"Photo opportunities last 20s from inception. The closer, the better quality and the more money received",
			"For dirty water and ghost writing, two photos can be taken: once for the interaction event and another for the photo itself",
			"Sound sensors reveal room names in the truck, and indicate interactions within an area",
			"Paramic has 40m range (your ears hear further), but can detect inaudible interactions",
			"UV lights and glowsticks illuminate fingerprints and footsteps (fingerprints fade after 2m). Glowsticks dim after 1m",
			"Footsteps are made after the ghost steps in salt; place at chokepoints to increase chance",
			"Sanity pills raise individual sanity by 40% (amateur), 35% (intermed.), 30% (pro), 25% (nightmare)",
			"Candles prevent passive sanity loss within a 1m radius (held or placed)",
			"Crucifixes prevent ghosts from hunting within a 3m radius (held or placed)",
			"Once a crucifix prevents a hunt, the ghost may not attempt to hunt for 5s",
			"Smudge sticks prevent hunts within 6m range twice; at the start and 6s later. Smudges last for 90s and cannot be stacked",
			"Smudge sticks used during a hunt also initiate the standard smudge effect in preventing hunts until expiry",
		],
		gameplay_cursed_items:				"Cursed Items",
		gameplay_cursed_items_items:	[
			"All maps will contain one cursed item: ouija board, tarot cards, voodoo doll or mirror. Each item has only one spawn point per map",
			"Cursed items will start a hunt when they run out or break",
			"Cursed hunts cannot be prevented, have a 1s grace period, are 20s longer, and subsequent hunts follow suit",
			"Ouija board questions cost 5% for sanity, age, and length of death questions, 20% number of people in room questions, and 40% for location questions. Demons take 20% less sanity for successful questions",
			"Ouija board's ghost location will always refer to the ghost's current location rather than their favourite room",
			"Ouija board will break when interacted with at 0% sanity",
			"Always say goodbye to the ouija board before walking away - or be hunted!",
			"Ouija board &quot;what is my sanity&quot; responses: Healthy &gt;80% / Good &gt; 60 / Avg &gt; 40 / Bad &gt; 20% / Awful &lt;20%",
			"Ouija board &quot;How insane am I&quot; responses: Not very &gt; 50% / Very &gt; 25% / Insane: &lt;25%",
			"Ouija board &quot;Am I insane&quot; responses: No &gt; 90% / Maybe &gt; 20% / Yes &lt; 20%",
			"Mirrors will show the area of the ghost's favourite room, but drain sanity by 7.5% per second",
			"Music boxes will attract a nearby ghost and make it sing and try to find the box; sanity drops when music is audible",
			"If the music box is &lt;5m from the ghost while playing, the ghost will spawn, and upon reaching the music box or after 5s spawned, will attempt to hunt. It's possible to leave the area before this occurs to prevent the hunt",
			"Using a voodoo doll will make the ghost perform an interaction or give evidence, at the cost of 5% sanity. The heart pin will trigger a hunt for 10% sanity",
			"If using a voodoo doll would take more sanity than the user has, all pins are pushed and a hunt begins",
			"Using a summoning circle will cost 16% sanity per candle lit, and triggers a ghost event and subsequent cursed hunt",
			"Tarot cards: Tower forces interaction or evidence / Devil forces ghost event / Death forces hunt / Fortune gives +/- 25% sanity / Sun gives 100% sanity / Moon takes 100% sanity / Hermit returns ghost to their room / Hanged Man kills the player / Priestess revives dead teammate or banks an extra party life / Fool does nothing",
			"Lighting the summoning circle during a hunt will result in your immediate death",
		],
		gameplay_hunts:								"Hunts",
		gameplay_hunts_items:					[
			"Hunts can occur once the average sanity of the group falls below 50%. The frequency of hunt attempts depends on the individual ghost, however the lower the average sanity, the higher the hunt chance",
			"When a hunt starts, all outer doors become locked and light switches cannot be used",
			"When a hunt ends, the ghost teleports back to their favourite room",
			"A ghost\"s speed can be determined by listening for its footsteps; slower ghosts will step much less often",
			"Grace periods: All difficulties have 3s after hunt commencement before the ghost searches for players. Nightmare difficulty has 1s",
			"Once a hunt ends, there is a 25s cooldown after which another hunt may be attempted",
			"In Nightmare difficulty, if a player dies during a hunt, the hunt duration will be extended by 12s",
			"Ghosts move at base player speed, which rapidly increases whenever chasing a player, up to 150%. When LoS is lost, ghost maintains current speed until they reach last LoS point, after which they slowly reduce to base speed",
			"Ghosts can only hear player microphones - other sounds do not attract the ghost",
			"Ghosts can detect powered-on player-held electronics (incl. flashlights, but not headcams) within their hearing range; turn off or toggle away from these to avoid detection",
			"Doors block line of sight; closing these behind you can prevent the ghost from gaining speed",
			"Players can hide behind locker and closet doors while holding them - ghosts may move all unheld doors, exposing hidden players. Ghosts will, however, forcibly open ordinary held doors to expose players",
			"If a ghost sees a player enter a closet or locker, they will attempt to open them, even if the doors are held. Keep pulling them closed to survive",
			"Making sound or activating electronics inside a locker will cause the ghost to force open the doors; this is rarely survivable",
			"Smudge sticks may be used within 6m of a ghost to cause the ghost to wander randomly and forget all targets for 6s",
			"Smudge sticks may also be used by a non-chased player, even in the truck, if the ghost is chasing another player",
		],
		gameplay_nerd_info:						"Nerd Info",
		gameplay_nerd_info_items:			[
			"Basic player speed is around 1.65m/s; sprint at 3m/s",
			"Hantu exact hunting speed temperature intervals: 1.4m/s at 15&deg;C / 1.75m/s at 12&deg;C / 2.1m/s at 9&deg;C / 2.3m/s at 6&deg;C / 2.5m/s at 3&deg;C / 2.7m/s at 0&deg;C",
			"Sanity drains passively in unlit areas (even dark spots in lit rooms) at 0.12% per-second on small maps, 0.08% on medium maps, 0.05% on large maps",
			"During setup phase, passive sanity drain is reduced: 0.09% on small maps, 0.05% on medium maps, 0.03% on large maps",
			"Passive sanity drains multiply depending on the difficulty: Intermediate is 1.5x, Professional is 2x",
			"If playing solo, all passive sanity drains are halved",
		],
	},
};
