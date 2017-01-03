export default [
  {
    "id": 1,
    "name": "Abaddon",
    "description": "Abaddon the Lord of Avernus is a melee strength Hero known as one of the most versatile characters in Dota due to his rather low mana dependence, short spell cooldowns and a large number of viable item choices. His ability to help sustain his allies and himself plus his strong tower diving capacity give him solid lane presence. Many of his abilities offer a large sum of utility, which makes him a strong support Hero. Mist Coil serves as both a single target nuke and heal that helps shift the sustainability of both allied and enemy heroes in a lane at his will, though sacrificing a portion of his own health. Aphotic Shield holds as one of the most useful abilities in the game, able to shield a target from some damage while also able to reflect said damage to a huge area. The most important aspect is how it is able to dispel many status effects such as slows and stuns. His other abilities allow him to become a mix between a semi-carry and tank. Abaddon's passive, Curse of Avernus, allows his attacks to not only slow down his enemy, but also increase the attack and movement speed of any ally attacking the same target. With his ultimate, Borrowed Time, Abaddon is able to shift all non-HP removal damage he receives into health. When not on cooldown, Borrowed Time may activate passively when his health falls under a certain threshold, even under the most dire situations. Due to his powerful spells and versatility, Abaddon is an excellent addition to any team.",
    "gender": "Male",
    "attributes": {
      "strength": "23 + 2.7",
      "agility": "17 + 1.5",
      "intelligence": "21 + 2"
    },
    "skills": [
      {
        "name": "Mist Coi",
        "description": "Abaddon releases a coil of deathly mist that can damage an enemy unit or heal a friendly unit at the cost of some of Abaddon's health.",
        "improved": false,
        "ability": "Target Unit",
        "affects": "Enemies / Allies",
        "damage": "Magical / Pure",
        "mana": "50/60/70/80",
        "coldown": "4.5"
      },
      {
        "name": "Aphotic Shield",
        "description": "Summons dark energies around an ally unit, creating a shield that absorbs a set amount of damage before expiring. When the shield is destroyed it will burst and deal damage equal to the amount it could absorb to an area around it. Removes certain types of negative buffs and stuns on cast.",
        "improved": false,
        "ability": "Target Unit",
        "affects": "Allies / Enemies",
        "damage": "Magical",
        "mana": "100/105/110/115",
        "coldown": "12/10/8/6"
      },
      {
        "name": "Curse of Avernus",
        "description": "Abaddon strikes an enemy with chilling curse on each attack, causing all units who attack the slowed enemy to gain increased movement speed, along with faster attack speed, for a limited time.",
        "improved": false,
        "ability": "Passive",
        "affects": "Allies / Enemies",
        "damage": null,
        "mana": null,
        "coldown": null
      },
      {
        "name": "Borrowed Time",
        "description": "When activated, all damage dealt to you will heal instead of harm. Most negative buffs will also be removed. If the ability is not on cooldown, it will automatically activate if your health falls below 400.",
        "improved": "Increases duration. While Borrowed Time is active, 50% of all damage taken by allied heroes in a 900 radius is redirected to you.",
        "ability": "No target (Aura)",
        "affects": "Self (Allied Heroes)",
        "damage": null,
        "mana": null,
        "coldown": "60/50/40"
      }
    ],
    "roles": {
      "carry": true,
      "disabler": false,
      "initiator": false,
      "jungler": false,
      "support": true,
      "durable": true,
      "nuker": false,
      "pusher": false,
      "escape": false
    }
  },
  {
    "id": 2,
    "name": "Alchemist",
    "description": "Razzil Darkbrew the Alchemist is a melee strength hero whose alchemical prowess makes him a strange but versatile fighter. He is an unusual carry based upon transmuting fallen enemies into large amounts of bonus gold, with both an early game and late game presence due to his large health pool and the first strike nature of his spells. His low but balanced attributes and the sure promise of gold for items means he can be one of the most disparately built heroes in the game./nUnstable Concoction is his main contribution early on, dealing good damage and a lengthy stun. Acid Spray allows him to rapidly clear waves of creeps for his Greevil's Greed to contribute massive amounts of extra income. A well-equipped Alchemist can then use Chemical Rage to its fullest effect, as the incredible regeneration and base attack time reduction make it one of the best steroid abilities in the game.",
    "gender": "Male",
    "attributes": {
      "strength": "25 + 1.8",
      "agility": "11 + 1.2",
      "intelligence": "25 + 1.8"
    },
    "skills": [
      {
        "name": "Acid Spray",
        "description": "Sprays high-pressure acid across a target area. Enemy units who step across the contaminated terrain take damage per second and have their armor reduced.",
        "improved": false,
        "ability": "Target Area",
        "affects": "Enemies",
        "damage": "Physical",
        "mana": "130/140/150/160",
        "coldown": "22"
      },
      {
        "name": "Unstable Concoction",
        "description": "Alchemist brews up an unstable concoction that he can throw at an enemy hero, to stun and deal damage in an area around the explosion. The longer the concoction brews, the more damage it deals and the longer the stun. After 5 seconds, the brew reaches its maximum damage and stun time. However, after 5.5 seconds, the concoction will explode on Alchemist himself if not thrown.",
        "improved": false,
        "ability": "No Target",
        "affects": "Self",
        "damage": "Physical",
        "mana": "120",
        "coldown": "16"
      },
      {
        "name": "Unstable Concoction Throw",
        "description": "Throw it before it blows up!",
        "improved": false,
        "ability": "Target Unit",
        "affects": "Enemy Heroes",
        "damage": "Physical",
        "mana": "0",
        "coldown": "0"
      },
      {
        "name": "Greevil's Greed",
        "description": "Alchemist synthesizes additional gold from his enemies and bounty runes. With each kill, Alchemist earns base bonus gold and extra bonus gold. If Alchemist kills another unit which yields gold within the next 30 seconds, an additional instance of Extra Bonus Gold is added to the total. Additionally, causes bounty runes to yield 3/4/5/6 times their normal gold.",
        "improved": false,
        "ability": "Passive",
        "affects": "Self",
        "damage": "---",
        "mana": "0",
        "coldown": "0"
      },
      {
        "name": "Chemical Rage",
        "description": "Alchemist causes his Ogre to enter a chemically induced rage, reducing base attack cooldown and increasing movement speed and regeneration.",
        "improved": true,
        "ability": "No Target",
        "affects": "Self",
        "damage": "---",
        "mana": "50/100/150",
        "coldown": "45"
      }
    ],
    "roles": {
      "carry": true,
      "disabler": true,
      "initiator": true,
      "jungler": false,
      "support": true,
      "durable": true,
      "nuker": true,
      "pusher": false,
      "escape": false
    }
  },
  {
    id: 3,
    name: 'A'
  },
  {
    id: 4,
    name: 'B'
  },
  {
    id: 5,
    name: 'C'
  },
  {
    id: 6,
    name: 'D'
  },
  {
    id: 7,
    name: 'E'
  },
  {
    id: 8,
    name: 'F'
  },
  {
    id: 9,
    name: 'G'
  },
  {
    id: 10,
    name: 'H'
  },
  {
    id: 11,
    name: 'I'
  },
  {
    id: 12,
    name: 'J'
  },
  {
    id: 13,
    name: 'K'
  },
  {
    id: 14,
    name: 'L'
  },
  {
    id: 15,
    name: 'M'
  },
  {
    id: 16,
    name: 'N'
  },
  {
    id: 17,
    name: 'O'
  },
  {
    id: 18,
    name: 'P'
  },
  {
    id: 19,
    name: 'Q'
  },
  {
    id: 20,
    name: 'R'
  },
  {
    id: 21,
    name: 'S'
  },
  {
    id: 22,
    name: 'T'
  },
  {
    id: 23,
    name: 'U'
  },
  {
    id: 24,
    name: 'V'
  },
  {
    id: 25,
    name: 'W'
  },
  {
    id: 26,
    name: 'X'
  },
  {
    id: 27,
    name: 'Y'
  },
  {
    id: 28,
    name: 'Z'
  },
];

// {
//   "id": 3,
//   "name": "",
//   "description": "",
//   "gender": "",
//   "attributes": {
//     "strength": "",
//     "agility": "",
//     "intelligence": ""
//   },
//   "skills": [
//     {
//       "name": "",
//       "description": "",
//       "improved": false,
//       "ability": "",
//       "affects": "",
//       "damage": "",
//       "mana": "",
//       "coldown": ""
//     }
//   ],
//   "roles": {
//     "carry": false,
//     "disabler": false,
//     "initiator": false,
//     "jungler": false,
//     "support": false,
//     "durable": false,
//     "nuker": false,
//     "pusher": false,
//     "escape": false
//   }
// }
