{{

let yearnum = actions.get_acYears.data.filter(x=> x.id ==ui.slct_acYear.value)[0].sorting -1
actions.get_services.data.map(x=> {return {
"year":ui.slct_acYear.value,
"term":ui.slct_term.value,
"yearDisp":actions.get_acYears.data.filter(x=> x.id ==ui.slct_acYear.value)[0].name,
"termDisp":actions.get_terms.data.filter(x=> x.id ==ui.slct_term.value)[0].name,
  "service":x.id,
  "yearT":ui.inp_YearlyTheme.value,
  "termT":ui.inp_TermlyTheme.value,
  "safeT":ui.inp_SafeguardingTheme.value,
  "psheT":ui.inp_psheTheme.value,
  "fbvT":ui.inp_fbvTheme.value,
  "num": yearnum
} })
}}