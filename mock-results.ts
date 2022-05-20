export interface IResult {
  associatedGenome: Array<{ name: string; score: number }>;
  symptoms: Array<{ name: string; score: number }>;
}

export const MOCK_RESULTS: Record<string, IResult> = {
  "abs_AB010982.pdf": {
    associatedGenome: [
      {
        name: "abs_DQ181797.pdf",
        score: 0.9949477052981072,
      },
      {
        name: "abs_AF547232.pdf",
        score: 0.9982639800475089,
      },
      {
        name: "abs_AF547225.pdf",
        score: 0.9982639800475089,
      },
      {
        name: "abs_AY770511.pdf",
        score: 0.9995669786931357,
      },
      {
        name: "abs_AB010982.pdf",
        score: 1.0000000000000002,
      },
    ],
    symptoms: [
      {
        name: "anorexia",
        score: 6.01554893985163e-35,
      },
      {
        name: "fever",
        score: 0.994947705298107,
      },
      {
        name: "severe",
        score: 0.10039454029991408,
      },
    ],
  },
  "abs_AF192906.pdf": {
    associatedGenome: [
      {
        name: "abs_KY435454.pdf",
        score: 0.905313277863924,
      },
      {
        name: "abs_KY435455.pdf",
        score: 0.905313277863924,
      },
      {
        name: "abs_KF383015.pdf",
        score: 0.9053523027610052,
      },
      {
        name: "abs_LN999960.pdf",
        score: 0.9087407327802526,
      },
      {
        name: "abs_AF192906.pdf",
        score: 1.0,
      },
    ],
    symptoms: [
      {
        name: "anorexia",
        score: 1.1766071017035606e-33,
      },
      {
        name: "headache",
        score: 0.29591955672620196,
      },
      {
        name: "fever",
        score: 0.8586587493532598,
      },
      {
        name: "nausea",
        score: 0.29591955672620196,
      },
      {
        name: "myalgia",
        score: 0.29591955672620196,
      },
    ],
  },
  "abs_AF547225.pdf": {
    associatedGenome: [
      {
        name: "abs_HM067744.pdf",
        score: 0.9991335379574738,
      },
      {
        name: "abs_L11422.pdf",
        score: 0.9991335379574738,
      },
      {
        name: "abs_AF547225.pdf",
        score: 1.0,
      },
      {
        name: "abs_AY770511.pdf",
        score: 0.9995648215488647,
      },
      {
        name: "abs_AF547232.pdf",
        score: 1.0,
      },
    ],
    symptoms: [
      {
        name: "severe",
        score: 0.04161938645128282,
      },
      {
        name: "fever",
        score: 0.9991335379574738,
      },
    ],
  },
  "abs_AF547232.pdf": {
    associatedGenome: [
      {
        name: "abs_HM067744.pdf",
        score: 0.9991335379574738,
      },
      {
        name: "abs_L11422.pdf",
        score: 0.9991335379574738,
      },
      {
        name: "abs_AF547225.pdf",
        score: 1.0,
      },
      {
        name: "abs_AY770511.pdf",
        score: 0.9995648215488647,
      },
      {
        name: "abs_AF547232.pdf",
        score: 1.0,
      },
    ],
    symptoms: [
      {
        name: "severe",
        score: 0.04161938645128282,
      },
      {
        name: "fever",
        score: 0.9991335379574738,
      },
    ],
  },
  "abs_AY099337.pdf": {
    associatedGenome: [
      {
        name: "abs_AY770511.pdf",
        score: 0.0710743172066197,
      },
      {
        name: "abs_AB010982.pdf",
        score: 0.1003945402999141,
      },
      {
        name: "abs_AY099337.pdf",
        score: 1.0,
      },
      {
        name: "abs_AY593235.pdf",
        score: 0.7071067811865476,
      },
      {
        name: "abs_DQ678928.pdf",
        score: 0.17954295347272875,
      },
    ],
    symptoms: [
      {
        name: "severe",
        score: 1.0,
      },
    ],
  },
  "abs_AY099340.pdf": {
    associatedGenome: [
      {
        name: "abs_KU820897.pdf",
        score: 3.925231146709438e-17,
      },
      {
        name: "abs_KX879603.pdf",
        score: 1.0,
      },
      {
        name: "abs_KU752544.pdf",
        score: 0.0319938698523099,
      },
      {
        name: "abs_AY099340.pdf",
        score: 1.0,
      },
      {
        name: "abs_DQ859059.pdf",
        score: 0.054014580529716305,
      },
    ],
    symptoms: [
      {
        name: "anorexia",
        score: 1.0,
      },
    ],
  },
  "abs_AY326412.pdf": {
    associatedGenome: [
      {
        name: "abs_AY326412.pdf",
        score: 1.0,
      },
      {
        name: "abs_EU359008.pdf",
        score: 1.0,
      },
      {
        name: "abs_DQ181797.pdf",
        score: 1.0,
      },
      {
        name: "abs_U18425.pdf",
        score: 1.0,
      },
      {
        name: "abs_HM067744.pdf",
        score: 1.0,
      },
    ],
    symptoms: [
      {
        name: "fever",
        score: 1.0,
      },
    ],
  },
  "abs_AY593235.pdf": {
    associatedGenome: [
      {
        name: "abs_AF547232.pdf",
        score: 0.7359234503891621,
      },
      {
        name: "abs_AF547225.pdf",
        score: 0.7359234503891621,
      },
      {
        name: "abs_AY770511.pdf",
        score: 0.7555756559622233,
      },
      {
        name: "abs_AY593235.pdf",
        score: 1.0,
      },
      {
        name: "abs_AB010982.pdf",
        score: 0.7745239295824615,
      },
    ],
    symptoms: [
      {
        name: "fever",
        score: 0.7071067811865475,
      },
      {
        name: "severe",
        score: 0.7071067811865476,
      },
    ],
  },
  "abs_AY606062.pdf": {
    associatedGenome: [
      {
        name: "abs_AY326412.pdf",
        score: 1.0,
      },
      {
        name: "abs_EU359008.pdf",
        score: 1.0,
      },
      {
        name: "abs_DQ181797.pdf",
        score: 1.0,
      },
      {
        name: "abs_U18425.pdf",
        score: 1.0,
      },
      {
        name: "abs_HM067744.pdf",
        score: 1.0,
      },
    ],
    symptoms: [
      {
        name: "fever",
        score: 1.0,
      },
    ],
  },
  "abs_AY692465.pdf": {
    associatedGenome: [
      {
        name: "abs_AY326412.pdf",
        score: 1.0,
      },
      {
        name: "abs_EU359008.pdf",
        score: 1.0,
      },
      {
        name: "abs_DQ181797.pdf",
        score: 1.0,
      },
      {
        name: "abs_U18425.pdf",
        score: 1.0,
      },
      {
        name: "abs_HM067744.pdf",
        score: 1.0,
      },
    ],
    symptoms: [
      {
        name: "fever",
        score: 1.0,
      },
    ],
  },
  "abs_AY702030.pdf": {
    associatedGenome: [
      {
        name: "abs_AY326412.pdf",
        score: 1.0,
      },
      {
        name: "abs_EU359008.pdf",
        score: 1.0,
      },
      {
        name: "abs_DQ181797.pdf",
        score: 1.0,
      },
      {
        name: "abs_U18425.pdf",
        score: 1.0,
      },
      {
        name: "abs_HM067744.pdf",
        score: 1.0,
      },
    ],
    symptoms: [
      {
        name: "fever",
        score: 1.0,
      },
    ],
  },
  "abs_AY770511.pdf": {
    associatedGenome: [
      {
        name: "abs_DQ181797.pdf",
        score: 0.9974710228541043,
      },
      {
        name: "abs_AF547232.pdf",
        score: 0.9995648215488647,
      },
      {
        name: "abs_AF547225.pdf",
        score: 0.9995648215488647,
      },
      {
        name: "abs_AY770511.pdf",
        score: 1.0000000000000002,
      },
      {
        name: "abs_AB010982.pdf",
        score: 0.9995669786931357,
      },
    ],
    symptoms: [
      {
        name: "headache",
        score: 9.489566567562602e-41,
      },
      {
        name: "epistaxis",
        score: 9.489566567562602e-41,
      },
      {
        name: "rash",
        score: 9.489566567562602e-41,
      },
      {
        name: "fever",
        score: 0.9974710228541043,
      },
      {
        name: "severe",
        score: 0.0710743172066197,
      },
    ],
  },
  "abs_DQ181797.pdf": {
    associatedGenome: [
      {
        name: "abs_AY326412.pdf",
        score: 1.0,
      },
      {
        name: "abs_EU359008.pdf",
        score: 1.0,
      },
      {
        name: "abs_DQ181797.pdf",
        score: 1.0,
      },
      {
        name: "abs_U18425.pdf",
        score: 1.0,
      },
      {
        name: "abs_HM067744.pdf",
        score: 1.0,
      },
    ],
    symptoms: [
      {
        name: "fever",
        score: 1.0,
      },
    ],
  },
  "abs_DQ678928.pdf": {
    associatedGenome: [
      {
        name: "abs_KU820897.pdf",
        score: 0.2084139944149591,
      },
      {
        name: "abs_KM851039.pdf",
        score: 0.2477554047788549,
      },
      {
        name: "abs_KU556802.pdf",
        score: 0.3491040418458178,
      },
      {
        name: "abs_DQ678928.pdf",
        score: 1.0000000000000002,
      },
      {
        name: "abs_KX827268.pdf",
        score: 0.3945381096244816,
      },
    ],
    symptoms: [
      {
        name: "headache",
        score: 0.1795429534727287,
      },
      {
        name: "bilateral conjunctivitis",
        score: 0.5584289437689092,
      },
      {
        name: "severe",
        score: 0.1795429534727287,
      },
      {
        name: "rash",
        score: 0.5584289437689092,
      },
      {
        name: "conjunctivitis",
        score: 0.5584289437689092,
      },
    ],
  },
  "abs_DQ859059.pdf": {
    associatedGenome: [
      {
        name: "abs_U18425.pdf",
        score: 0.9956140192216041,
      },
      {
        name: "abs_HM067744.pdf",
        score: 0.9956140192216041,
      },
      {
        name: "abs_DQ181797.pdf",
        score: 0.9956140192216041,
      },
      {
        name: "abs_KU752544.pdf",
        score: 0.9978503351422918,
      },
      {
        name: "abs_DQ859059.pdf",
        score: 1.0000000000000002,
      },
    ],
    symptoms: [
      {
        name: "anorexia",
        score: 0.054014580529716305,
      },
      {
        name: "headache",
        score: 0.054014580529716374,
      },
      {
        name: "fever",
        score: 0.9956140192216041,
      },
      {
        name: "rash",
        score: 0.054014580529716374,
      },
    ],
  },
  "abs_EF555196.pdf": {
    associatedGenome: [
      {
        name: "abs_AY326412.pdf",
        score: 1.0,
      },
      {
        name: "abs_EU359008.pdf",
        score: 1.0,
      },
      {
        name: "abs_DQ181797.pdf",
        score: 1.0,
      },
      {
        name: "abs_U18425.pdf",
        score: 1.0,
      },
      {
        name: "abs_HM067744.pdf",
        score: 1.0,
      },
    ],
    symptoms: [
      {
        name: "fever",
        score: 1.0,
      },
    ],
  },
  "abs_EU359008.pdf": {
    associatedGenome: [
      {
        name: "abs_AY326412.pdf",
        score: 1.0,
      },
      {
        name: "abs_EU359008.pdf",
        score: 1.0,
      },
      {
        name: "abs_DQ181797.pdf",
        score: 1.0,
      },
      {
        name: "abs_U18425.pdf",
        score: 1.0,
      },
      {
        name: "abs_HM067744.pdf",
        score: 1.0,
      },
    ],
    symptoms: [
      {
        name: "fever",
        score: 1.0,
      },
    ],
  },
  "abs_FJ807886.pdf": {
    associatedGenome: [
      {
        name: "abs_AY326412.pdf",
        score: 1.0,
      },
      {
        name: "abs_EU359008.pdf",
        score: 1.0,
      },
      {
        name: "abs_DQ181797.pdf",
        score: 1.0,
      },
      {
        name: "abs_U18425.pdf",
        score: 1.0,
      },
      {
        name: "abs_HM067744.pdf",
        score: 1.0,
      },
    ],
    symptoms: [
      {
        name: "fever",
        score: 1.0,
      },
    ],
  },
  "abs_FJ882857.pdf": {
    associatedGenome: [
      {
        name: "abs_DQ181797.pdf",
        score: 0.9701975680597491,
      },
      {
        name: "abs_KU752544.pdf",
        score: 0.9783780047881445,
      },
      {
        name: "abs_DQ859059.pdf",
        score: 0.9790308565979061,
      },
      {
        name: "abs_LC146714.pdf",
        score: 0.9924507516536393,
      },
      {
        name: "abs_FJ882857.pdf",
        score: 1.0000000000000002,
      },
    ],
    symptoms: [
      {
        name: "severe",
        score: 5.821013845742935e-42,
      },
      {
        name: "rash",
        score: 0.2423152470046996,
      },
      {
        name: "fever",
        score: 0.9701975680597489,
      },
    ],
  },
  "abs_HM067744.pdf": {
    associatedGenome: [
      {
        name: "abs_AY326412.pdf",
        score: 1.0,
      },
      {
        name: "abs_EU359008.pdf",
        score: 1.0,
      },
      {
        name: "abs_DQ181797.pdf",
        score: 1.0,
      },
      {
        name: "abs_U18425.pdf",
        score: 1.0,
      },
      {
        name: "abs_HM067744.pdf",
        score: 1.0,
      },
    ],
    symptoms: [
      {
        name: "fever",
        score: 1.0,
      },
    ],
  },
  "abs_KF383015.pdf": {
    associatedGenome: [
      {
        name: "abs_U18425.pdf",
        score: 0.9165746292735139,
      },
      {
        name: "abs_DQ859059.pdf",
        score: 0.9341530185925182,
      },
      {
        name: "abs_KY435454.pdf",
        score: 0.99999985456201,
      },
      {
        name: "abs_KF383015.pdf",
        score: 1.0000000000000002,
      },
      {
        name: "abs_KY435455.pdf",
        score: 0.99999985456201,
      },
    ],
    symptoms: [
      {
        name: "headache",
        score: 0.3998636629804223,
      },
      {
        name: "fever",
        score: 0.9165746292735137,
      },
    ],
  },
  "abs_KM851039.pdf": {
    associatedGenome: [
      {
        name: "abs_FJ882857.pdf",
        score: 0.3499348274084102,
      },
      {
        name: "abs_AF192906.pdf",
        score: 0.46924137107162267,
      },
      {
        name: "abs_KU556802.pdf",
        score: 0.4896469593066916,
      },
      {
        name: "abs_KM851039.pdf",
        score: 1.0,
      },
      {
        name: "abs_LN999960.pdf",
        score: 0.5899515529947332,
      },
    ],
    symptoms: [
      {
        name: "anorexia",
        score: 2.79077611047382e-17,
      },
      {
        name: "arthalgiaasthenia",
        score: 6.990964408952316e-17,
      },
      {
        name: "fever",
        score: 0.24987490117434052,
      },
      {
        name: "myalgia",
        score: 0.8606531577436076,
      },
      {
        name: "rash",
        score: 0.44366504914075855,
      },
    ],
  },
  "abs_KU556802.pdf": {
    associatedGenome: [
      {
        name: "abs_KY435455.pdf",
        score: 0.615401336594141,
      },
      {
        name: "abs_AF192906.pdf",
        score: 0.6350034775150468,
      },
      {
        name: "abs_KU556802.pdf",
        score: 0.9999999999999998,
      },
      {
        name: "abs_KY435454.pdf",
        score: 0.615401336594141,
      },
      {
        name: "abs_LN999960.pdf",
        score: 0.6971235942347223,
      },
    ],
    symptoms: [
      {
        name: "myalgia",
        score: 0.26928711460391397,
      },
      {
        name: "chills",
        score: 0.33196091141044576,
      },
      {
        name: "arthritis",
        score: 0.33196091141044576,
      },
      {
        name: "fever",
        score: 0.5539206706994522,
      },
      {
        name: "muscle pain",
        score: 0.33196091141044576,
      },
    ],
  },
  "abs_KU752544.pdf": {
    associatedGenome: [
      {
        name: "abs_U18425.pdf",
        score: 0.9981642330786872,
      },
      {
        name: "abs_DQ181797.pdf",
        score: 0.9981642330786872,
      },
      {
        name: "abs_L11422.pdf",
        score: 0.9981642330786872,
      },
      {
        name: "abs_KU752544.pdf",
        score: 1.0,
      },
      {
        name: "abs_HM067744.pdf",
        score: 0.9981642330786872,
      },
    ],
    symptoms: [
      {
        name: "myalgia",
        score: 0.0034683726978524763,
      },
      {
        name: "conjunctivitis",
        score: 0.030496990865028387,
      },
      {
        name: "fever",
        score: 0.9981642330786872,
      },
      {
        name: "rash",
        score: 0.04110964313683675,
      },
      {
        name: "anorexia",
        score: 0.0319938698523099,
      },
    ],
  },
  "abs_KU820897.pdf": {
    associatedGenome: [
      {
        name: "abs_AF192906.pdf",
        score: 0.2955170770701918,
      },
      {
        name: "abs_KF383015.pdf",
        score: 0.39931980913274906,
      },
      {
        name: "abs_KY435454.pdf",
        score: 0.39981341415053195,
      },
      {
        name: "abs_KU820897.pdf",
        score: 1.0,
      },
      {
        name: "abs_KY435455.pdf",
        score: 0.39981341415053195,
      },
    ],
    symptoms: [
      {
        name: "anorexia",
        score: 3.925231146709437e-17,
      },
      {
        name: "headache",
        score: 0.9986399018014798,
      },
      {
        name: "rash",
        score: 0.05213776491115065,
      },
    ],
  },
  "abs_KX197192.pdf": {
    associatedGenome: [
      {
        name: "abs_AY326412.pdf",
        score: 1.0,
      },
      {
        name: "abs_EU359008.pdf",
        score: 1.0,
      },
      {
        name: "abs_DQ181797.pdf",
        score: 1.0,
      },
      {
        name: "abs_U18425.pdf",
        score: 1.0,
      },
      {
        name: "abs_HM067744.pdf",
        score: 1.0,
      },
    ],
    symptoms: [
      {
        name: "fever",
        score: 1.0,
      },
    ],
  },
  "abs_KX827268.pdf": {
    associatedGenome: [
      {
        name: "abs_DQ678928.pdf",
        score: 0.3945381096244816,
      },
      {
        name: "abs_KX827268.pdf",
        score: 0.9999999999999999,
      },
      {
        name: "abs_KU556802.pdf",
        score: 0.4160187629550266,
      },
      {
        name: "abs_LC146714.pdf",
        score: 0.3976741492876528,
      },
      {
        name: "abs_LN999960.pdf",
        score: 0.39566444176099064,
      },
    ],
    symptoms: [
      {
        name: "myalgia",
        score: 0.10853640674804535,
      },
      {
        name: "conjunctivitis",
        score: 0.5442063762095132,
      },
      {
        name: "fever",
        score: 0.35480906193808376,
      },
      {
        name: "rash",
        score: 0.16230805866503462,
      },
      {
        name: "abdominal pain",
        score: 0.7347284479058486,
      },
    ],
  },
  "abs_KX879603.pdf": {
    associatedGenome: [
      {
        name: "abs_KU820897.pdf",
        score: 3.925231146709438e-17,
      },
      {
        name: "abs_KX879603.pdf",
        score: 1.0,
      },
      {
        name: "abs_KU752544.pdf",
        score: 0.0319938698523099,
      },
      {
        name: "abs_AY099340.pdf",
        score: 1.0,
      },
      {
        name: "abs_DQ859059.pdf",
        score: 0.054014580529716305,
      },
    ],
    symptoms: [
      {
        name: "anorexia",
        score: 1.0,
      },
    ],
  },
  "abs_KY435454.pdf": {
    associatedGenome: [
      {
        name: "abs_U18425.pdf",
        score: 0.9163588378292039,
      },
      {
        name: "abs_KF383015.pdf",
        score: 0.99999985456201,
      },
      {
        name: "abs_DQ859059.pdf",
        score: 0.9339648717854648,
      },
      {
        name: "abs_KY435454.pdf",
        score: 1.0000000000000002,
      },
      {
        name: "abs_KY435455.pdf",
        score: 1.0000000000000002,
      },
    ],
    symptoms: [
      {
        name: "headache",
        score: 0.400357940263848,
      },
      {
        name: "fever",
        score: 0.9163588378292039,
      },
    ],
  },
  "abs_KY435455.pdf": {
    associatedGenome: [
      {
        name: "abs_U18425.pdf",
        score: 0.9163588378292039,
      },
      {
        name: "abs_KF383015.pdf",
        score: 0.99999985456201,
      },
      {
        name: "abs_DQ859059.pdf",
        score: 0.9339648717854648,
      },
      {
        name: "abs_KY435454.pdf",
        score: 1.0000000000000002,
      },
      {
        name: "abs_KY435455.pdf",
        score: 1.0000000000000002,
      },
    ],
    symptoms: [
      {
        name: "headache",
        score: 0.400357940263848,
      },
      {
        name: "fever",
        score: 0.9163588378292039,
      },
    ],
  },
  "abs_L11422.pdf": {
    associatedGenome: [
      {
        name: "abs_AY326412.pdf",
        score: 1.0,
      },
      {
        name: "abs_EU359008.pdf",
        score: 1.0,
      },
      {
        name: "abs_DQ181797.pdf",
        score: 1.0,
      },
      {
        name: "abs_U18425.pdf",
        score: 1.0,
      },
      {
        name: "abs_HM067744.pdf",
        score: 1.0,
      },
    ],
    symptoms: [
      {
        name: "severe",
        score: 2.6727647100921956e-51,
      },
      {
        name: "fever",
        score: 1.0,
      },
    ],
  },
  "abs_LC146714.pdf": {
    associatedGenome: [
      {
        name: "abs_DQ181797.pdf",
        score: 0.9904050798650366,
      },
      {
        name: "abs_FJ882857.pdf",
        score: 0.9924507516536393,
      },
      {
        name: "abs_KU752544.pdf",
        score: 0.9953497401004168,
      },
      {
        name: "abs_LC146714.pdf",
        score: 1.0,
      },
      {
        name: "abs_DQ859059.pdf",
        score: 0.9930967130429983,
      },
    ],
    symptoms: [
      {
        name: "severe",
        score: 2.6675211383677802e-102,
      },
      {
        name: "conjunctivitis",
        score: 0.04617445265928164,
      },
      {
        name: "rash",
        score: 0.13025243836161532,
      },
      {
        name: "fever",
        score: 0.9904050798650366,
      },
    ],
  },
  "abs_LN999960.pdf": {
    associatedGenome: [
      {
        name: "abs_KU752544.pdf",
        score: 0.9129292906572918,
      },
      {
        name: "abs_DQ859059.pdf",
        score: 0.9223349083601149,
      },
      {
        name: "abs_LN999960.pdf",
        score: 1.0,
      },
      {
        name: "abs_LC146714.pdf",
        score: 0.9295097545282704,
      },
      {
        name: "abs_FJ882857.pdf",
        score: 0.9426152176538066,
      },
    ],
    symptoms: [
      {
        name: "headache",
        score: 0.17477822671077511,
      },
      {
        name: "rash",
        score: 0.2795537202946185,
      },
      {
        name: "fever",
        score: 0.9017494144199447,
      },
      {
        name: "myalgia",
        score: 0.2795537202946185,
      },
    ],
  },
  "abs_U18425.pdf": {
    associatedGenome: [
      {
        name: "abs_AY326412.pdf",
        score: 1.0,
      },
      {
        name: "abs_EU359008.pdf",
        score: 1.0,
      },
      {
        name: "abs_DQ181797.pdf",
        score: 1.0,
      },
      {
        name: "abs_U18425.pdf",
        score: 1.0,
      },
      {
        name: "abs_HM067744.pdf",
        score: 1.0,
      },
    ],
    symptoms: [
      {
        name: "severe",
        score: 1.262177448353619e-29,
      },
      {
        name: "fever",
        score: 1.0,
      },
    ],
  },
};
