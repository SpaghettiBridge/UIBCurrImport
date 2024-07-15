{{
ui.inp_targ_text.value.split(/\n/).filter(x=> x != "").map(x=> {return{
pillar:ui.slct_targ_pill.value,
subject:ui.slct_targ_subj.value,
target:x,
category:ui.slct_targ_type.value,
level:ui.inp_targ_level.value,
topic:ui.slct_targ_top.value } })

}}