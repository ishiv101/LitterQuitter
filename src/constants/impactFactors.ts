// Sources: EPA WARM v15 (Waste Reduction Model), May 2019
// Net recycling-vs-landfilling emissions, per SHORT TON of material (2000 lbs / 907,185g)
export const CO2_FACTORS_MTCO2E_PER_SHORT_TON = {
    metal: 9.13,            // WARM: aluminum cans, recycling vs landfilling
    mixedRecyclables: 2.83, // WARM: blended paper/metal/plastic recycling factor
                             // (used here for glass, paper, and plastic combined)
  };
  
  // Average item weights in grams
  // Metal, glass, plastic sourced from multiple consistent web sources.
  // Paper is a rough ESTIMATE — revisit if precision matters later.
  export const ITEM_WEIGHT_GRAMS = {
    metal: 15,   // aluminum can
    glass: 190,  // glass bottle
    plastic: 25, // plastic bottle
    paper: 15,   // ⚠️ ESTIMATE — no clean source found for litter-scale paper items
  };
  
  export const GRAMS_PER_SHORT_TON = 907_185; // 1 short ton = 907.185 kg
  
  // EPA: average passenger vehicle emits ~400g CO2 per mile driven
  export const GRAMS_CO2_PER_MILE = 400;