// ===============================
//  CURRICULUM DATA STRUCTURE
// ===============================

// beginner = white - blue
// intermediate = red - dbn 4 stripes
// advanced = dbn 5 stripes - black

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

// Pick MULTIPLE random items (no repeats)
function pickMultiple(list, count) {
    const copy = [...list];
    const results = [];

    for (let i = 0; i < count && copy.length > 0; i++) {
        const index = Math.floor(Math.random() * copy.length);
        results.push(copy[index]);
        copy.splice(index, 1);
    }
    return results;
}

// ===============================
// GENERATE CLASS PLAN
// ===============================

function generateClass() {
    const level = document.getElementById("difficulty").value;
    const data = curriculum[level];

    const counts = {
        beginner: { hyung: 2, hand: 2, leg: 2, tech: 3},
        intermediate: { hyung: 2, hand: 3, leg: 3, tech: 4},
        advanced: { hyung: 2, hand: 4, leg: 4, tech: 5},
    };

    const c = counts[level];

    const hyungs = pickMultiple(data.hyung, c.hyung);
    const hands = pickMultiple(data.handstrikes, c.hand);
    const legs = pickMultiple(data.legstrikes, c.leg);
    const techs = pickMultiple(data.techniques, c.tech);

    const plan = `
    Difficulty: ${level.toUpperCase()}
    
    Hyungs: 
    ${hyungs.map(x => "• " + x).join("\n")}

    Hand Strike: 
    ${hands.map(x => "• " + x).join("\n")}

    Leg Strike:
    ${legs.map(x => "• " + x).join("\n")}
    Technique: 
    ${techs.map(x => "• " + x).join("\n")}
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