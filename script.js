// ===============================
//  CURRICULUM DATA STRUCTURE
// ===============================

// beginner = white - blue intermediate = red - dbn 4 stripes advanced = dbn 5 stripes - black

const curriculum = {
    beginner: {
        hyung: [
            "Ki Cho Hyung",
            "Cho Geup Hung (part 1)",
        ],
        handstrikes: [
            "Juhng Kwon (Straight Punch)",
            "Soo Doh (Knife Hand)",

        ],
        legstrikes: [
            "Ahp Cha-ki (Front Kick)",
            "Hoo-Ryuh Cha-ki (Sweep Kick",
        ],
        techniques: [
            "Ki Bohn Soo",
        ]
    },

    intermediate: {
        hyung: [
            "Cho Geup Hyung",
            "Joong Geup Hyung",
        ],
        handstrikes: [
            "Hwoe-juhn Soo Doh",
            "Yuhk Pyung Soo"
        ],
        legstrikes: [
            "Ttui-ui Moo Reup cha-ki",
        ],
        techniques: [
            "Maek Chi Ki",
            "Maek Chaki",
        ]
    },
    advanced: {
        hyung: [
            "Goh Geup Hyung",
            "Guhm Moo Hyung",
        ],
        handstrikes: [
            "Ee Ji Kwon",
            "Ee Ji Kwon",
        ],
        legstrikes: [
            "Ssahng Bahl Cha-ki",
            "Yahng Bahl Cha-ki",
            "Gah-wee Cha-ki",
        ],
        techniques: [
            "Ki Bohn Bohn",
            "Gahk Doh Bub",
        ],

    }
};

// ===============================
//  RANDOM PICKER
// ===============================

function random(list) {
    return list[Math.floor(Math.random() * list.length)];
}

// ===============================
// GENERATE CLASS PLAN
// ===============================

function generateClass() {
    const level = document.getElementById("difficulty").value;
    const data = curriculum[level];

    const plan = `
    Difficulty: ${level.toUpperCase()}
    
    Hyung: ${random(data.hyung)}
    Hand Strike: ${random(data.handstrikes)}
    Leg Strike: ${random(data.legstrikes)}
    Technique: ${random(data.techniques)}
    `;

    document.getElementById("output").innerText = plan;
}

// ===============================
// COPY TO CLIPBOARD
// ===============================

function copyPlan() {
    const text = document.getElementById("output").innerText;
    navigator.clipboard.writeText(text);
}