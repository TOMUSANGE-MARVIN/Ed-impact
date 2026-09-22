import * as migration_20260911_115357_initial from './20260911_115357_initial';
import * as migration_20260913_102457_add_program_body_and_stat_three from './20260913_102457_add_program_body_and_stat_three';
import * as migration_20260913_110143_add_reports_collection from './20260913_110143_add_reports_collection';
import * as migration_20260916_144812_add_knowledge_partner_text from './20260916_144812_add_knowledge_partner_text';
import * as migration_20260921_110219_add_legacy_documents from './20260921_110219_add_legacy_documents';
import * as migration_20260921_122816_add_partners from './20260921_122816_add_partners';
import * as migration_20260922_073623_add_team_member_about_me from './20260922_073623_add_team_member_about_me';

export const migrations = [
  {
    up: migration_20260911_115357_initial.up,
    down: migration_20260911_115357_initial.down,
    name: '20260911_115357_initial',
  },
  {
    up: migration_20260913_102457_add_program_body_and_stat_three.up,
    down: migration_20260913_102457_add_program_body_and_stat_three.down,
    name: '20260913_102457_add_program_body_and_stat_three',
  },
  {
    up: migration_20260913_110143_add_reports_collection.up,
    down: migration_20260913_110143_add_reports_collection.down,
    name: '20260913_110143_add_reports_collection',
  },
  {
    up: migration_20260916_144812_add_knowledge_partner_text.up,
    down: migration_20260916_144812_add_knowledge_partner_text.down,
    name: '20260916_144812_add_knowledge_partner_text',
  },
  {
    up: migration_20260921_110219_add_legacy_documents.up,
    down: migration_20260921_110219_add_legacy_documents.down,
    name: '20260921_110219_add_legacy_documents',
  },
  {
    up: migration_20260921_122816_add_partners.up,
    down: migration_20260921_122816_add_partners.down,
    name: '20260921_122816_add_partners',
  },
  {
    up: migration_20260922_073623_add_team_member_about_me.up,
    down: migration_20260922_073623_add_team_member_about_me.down,
    name: '20260922_073623_add_team_member_about_me'
  },
];
