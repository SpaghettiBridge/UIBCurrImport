select * from public.curr_map_topics cmt
left join public.lu_pillar_topic_cache lptc on lptc.id =  cmt.topic_id
where cmt.curr_map_header_id = ?