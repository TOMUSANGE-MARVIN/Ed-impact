import * as migration_20260911_115357_initial from './20260911_115357_initial';
import * as migration_20260913_102457_add_program_body_and_stat_three from './20260913_102457_add_program_body_and_stat_three';

export const migrations = [
  {
    up: migration_20260911_115357_initial.up,
    down: migration_20260911_115357_initial.down,
    name: '20260911_115357_initial',
  },
  {
    up: migration_20260913_102457_add_program_body_and_stat_three.up,
    down: migration_20260913_102457_add_program_body_and_stat_three.down,
    name: '20260913_102457_add_program_body_and_stat_three'
  },
];
