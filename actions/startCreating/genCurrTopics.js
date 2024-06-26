{{
let topics = [...ui.tbl_fueTopics.selectedRows.data, ...ui.tbl_folTopics.selectedRows.data, ...ui.tbl_fumTopics.selectedRows.data,...ui.tbl_fomTopics.selectedRows.data,...ui.tbl_sTopics.selectedRows.data,...ui.tbl_caaTopics.selectedRows.data,...ui.tbl_tadTopics.selectedRows.data,...ui.tbl_psheTopics.selectedRows.data,...ui.tbl_peTopics.selectedRows.data,...ui.tbl_pfaTopics.selectedRows.data,...ui.tbl_hasTopics.selectedRows.data];
let combinedObjects = [];

for (let topic of topics) {
    for (let curriculumMap of steps.createCurrHead.data) {
        combinedObjects.push({
            curr_map_header_id: curriculumMap.id,
            topic_id: topic.id
        });
    }
}
return combinedObjects
}}