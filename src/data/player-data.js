const batting = [
    {
        C: 'Tests',
        Mat: "17",
        Inns: "8",
        NO: "3",
        Runs: "15",
        HS: "7",
        Ave: "12.22",
        BF: "12",
        SR: "14",
        _100: "23",
        _50: "22",
        _4s: "11",
        _6s: "12",
        Ct: "11",
        St: "123"

    },
    {
        C: 'First-class',
        Mat: "17",
        Inns: "8",
        NO: "3",
        Runs: "15",
        HS: "7",
        Ave: "12.22",
        BF: "12",
        SR: "14",
        _100: "23",
        _50: "22",
        _4s: "11",
        _6s: "12",
        Ct: "11",
        St: "123"
    },
    {
        C: 'List A',
        Mat: "17",
        Inns: "8",
        NO: "3",
        Runs: "15",
        HS: "7",
        Ave: "12.22",
        BF: "12",
        SR: "14",
        _100: "23",
        _50: "22",
        _4s: "11",
        _6s: "12",
        Ct: "11",
        St: "123"

    },
    {
        C: 'T20s',
        Mat: "17",
        Inns: "8",
        NO: "3",
        Runs: "15",
        HS: "7",
        Ave: "12.22",
        BF: "12",
        SR: "14",
        _100: "23",
        _50: "22",
        _4s: "11",
        _6s: "12",
        Ct: "11",
        St: "123"

    }
];

const bowling = [
    {
        C: 'Tests',
        Mat: "17",
        Inns: "8",
        Balls: "3",
        Runs: "15",
        Wkts: "7",
        BBI: "12.22",
        BBM: "12",
        Ave: "14",
        Econ: "23",
        SR: "22",
        _4w: "11",
        _5w: "12",
        _10: "11"

    },
    {
        C: 'First-class',
        Mat: "17",
        Inns: "8",
        Balls: "3",
        Runs: "15",
        Wkts: "7",
        BBI: "12.22",
        BBM: "12",
        Ave: "14",
        Econ: "23",
        SR: "22",
        _4w: "11",
        _5w: "12",
        _10: "11"
    },
    {
        C: 'List A',
        Mat: "17",
        Inns: "8",
        Balls: "3",
        Runs: "15",
        Wkts: "7",
        BBI: "12.22",
        BBM: "12",
        Ave: "14",
        Econ: "23",
        SR: "22",
        _4w: "11",
        _5w: "12",
        _10: "11"

    },
    {
        C: 'T20s',
        Mat: "17",
        Inns: "8",
        Balls: "3",
        Runs: "15",
        Wkts: "7",
        BBI: "12.22",
        BBM: "12",
        Ave: "14",
        Econ: "23",
        SR: "22",
        _4w: "11",
        _5w: "12",
        _10: "11"
    }
];

// const playerIndex = [
//     {
//         C: 'Test',
//     },
//     {
//         C: 'One-day International',
//     },
//     {
//         C: 'Twenty20 International'

//     }
// ];

// export function getPlayerIndex() {
//     return playerIndex;
// }

const careerStat = [
    {
        C: 'Test debut',
        team1: 'Australia',
        team2: 'Pakistan',
        city: 'Karachi',
        date: Date()
    },
    {
        C: 'Last Test',
        team1: 'India',
        team2: 'Pakistan',
        city: 'Lahore',
        date: Date()
    },
    {
        C: 'Test statistics',
        team1: 'Bangladesh',
        team2: 'Pakistan',
        city: 'Multan',
        date: Date()

    }
];

export function getBatting() {
    return batting;
}
export function getBowling() {
    return bowling;
}
export function getInningsStats() {
    return careerStat;
}
    // export function getBat(id) {
    //   return batting.find(m => m._id === id);
    // }

    // export function saveBat(bat) {
    //   let battingInDb = batting.find(m => m._id === bat._id) || {};
    //     battingInDb.C = bat.C;
    //     battingInDb.Mat = bat.Mat;
    //     battingInDb.Inns = bat.Inns;
    //     battingInDb.NO = bat.title3;
    //     battingInDb.Runs = bat.title3;
    //     battingInDb.HS = bat.title3;
    //     battingInDb.Ave = bat.title3;
    //     battingInDb.BF = bat.title3;
    //     battingInDb.SR = bat.title3;
    //     battingInDb._100 = bat._100;
    //     battingInDb._50 = bat._50;
    //     battingInDb._4s = bat._4s;
    //     battingInDb._6s = bat._6s;
    //     battingInDb.Ct = bat.Ct;
    //     battingInDb.St = bat.St;
    //   if (!battingInDb._id) {
    //     battingInDb._id = Date.now();
    //     batting.push(battingInDb);
    //   }

    //   return battingInDb;
    // }

    // export function deleteBat(id) {
    //   let battingInDb = batting.find(m => m._id === id);
    //   batting.splice(batting.indexOf(battingInDb), 1);
    //   return battingInDb;
    // }