{{
let texts = [...ui.publicLuLiteracyTextsTable.selectedRows.data];
let combinedObjects = [];

for (let text of texts) {
    for (let curriculumMap of steps.createCurrHead.data) {
        combinedObjects.push({
            curr_map_header_id: curriculumMap.id,
            literacy_text_id: text.id
        });
    }
}
return combinedObjects
}}