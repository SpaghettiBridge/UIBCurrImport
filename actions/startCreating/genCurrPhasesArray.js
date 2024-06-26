{{
let PhaseIDs = [...ui.slct_phase_CommunityReady.value, ...ui.slct_phase_OvercomingBarriers.value, ...ui.slct_phase_21stCenturySkills.value];
let combinedObjects = [];

for (let phaseID of PhaseIDs) {
    for (let curriculumMap of data) {
        combinedObjects.push({
            curr_map_header_id: curriculumMap.id,
            phase_id: phaseID
        });
    }
}
return combinedObjects
}}