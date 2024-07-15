{{
let topics = [...ui.tbl_fueTopics2.selectedRows.data, ...ui.tbl_folTopics2.selectedRows.data, ...ui.tbl_fumTopics2.selectedRows.data,...ui.tbl_fomTopics2.selectedRows.data,...ui.tbl_sTopics2.selectedRows.data,...ui.tbl_caaTopics2.selectedRows.data,...ui.tbl_tadTopics2.selectedRows.data,...ui.tbl_psheTopics2.selectedRows.data,...ui.tbl_peTopics2.selectedRows.data,...ui.tbl_pfaTopics2.selectedRows.data,...ui.tbl_hasTopics2.selectedRows.data];
let combinedObjects = [];

for (let topic of topics) {
    for (let curriculumMap of steps.get_curriculum_maps.data) {
        combinedObjects.push({
            curr_map_header_id: curriculumMap.id,
            topic_id: topic.id
        });
    }
}
return combinedObjects
}}