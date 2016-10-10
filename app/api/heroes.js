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
    "name": "Huskar",
    "description": "",
    "gender": "",
    "attributes": {
      "strength": "",
      "agility": "",
      "intelligence": ""
    },
    "skills": [
      {
        "name": "",
        "description": "",
        "improved": "",
        "ability": "",
        "affects": "",
        "damage": "",
        "mana": "",
        "coldown": ""
      }
    ],
    "roles": {
      "carry": false,
      "disabler": false,
      "initiator": false,
      "jungler": false,
      "support": false,
      "durable": false,
      "nuker": false,
      "pusher": false,
      "escape": false
    }
  }
];
