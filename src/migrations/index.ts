import * as migration_20260911_115357_initial from './20260911_115357_initial';

export const migrations = [
  {
    up: migration_20260911_115357_initial.up,
    down: migration_20260911_115357_initial.down,
    name: '20260911_115357_initial'
  },
];
