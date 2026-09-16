import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_site_settings\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`site_name\` text DEFAULT 'Ed Impact Africa Foundation',
  	\`tagline\` text DEFAULT 'Because every African child deserves an education system that unlocks their potential.',
  	\`contact_email\` text DEFAULT 'info@edimpactafrica.org',
  	\`contact_partnerships_email\` text DEFAULT 'partnerships@edimpactafrica.org',
  	\`contact_phone_one\` text DEFAULT '+256 781 064 668',
  	\`contact_phone_two\` text DEFAULT '+256 414 696609',
  	\`contact_location\` text DEFAULT 'Kampala, Uganda',
  	\`contact_map_query\` text DEFAULT 'Kampala, Uganda',
  	\`social_facebook\` text DEFAULT 'https://www.facebook.com',
  	\`social_twitter_x\` text DEFAULT 'https://x.com',
  	\`social_linkedin\` text DEFAULT 'https://www.linkedin.com',
  	\`social_youtube\` text DEFAULT 'https://www.youtube.com',
  	\`logo_id\` integer,
  	\`logo_light_id\` integer,
  	\`stats_teachers_reached\` text DEFAULT '199,856',
  	\`stats_learners_reached\` text DEFAULT '5,892,477',
  	\`stats_literacy_programme\` text DEFAULT '73.1%',
  	\`stats_literacy_control\` text DEFAULT '57.0%',
  	\`stats_numeracy_programme\` text DEFAULT '66.7%',
  	\`stats_numeracy_control\` text DEFAULT '54.1%',
  	\`stats_social_return\` text DEFAULT '£3.12 for every £1 invested',
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`logo_light_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_site_settings\`("id", "site_name", "tagline", "contact_email", "contact_partnerships_email", "contact_phone_one", "contact_phone_two", "contact_location", "contact_map_query", "social_facebook", "social_twitter_x", "social_linkedin", "social_youtube", "logo_id", "logo_light_id", "stats_teachers_reached", "stats_learners_reached", "stats_literacy_programme", "stats_literacy_control", "stats_numeracy_programme", "stats_numeracy_control", "stats_social_return", "updated_at", "created_at") SELECT "id", "site_name", "tagline", "contact_email", "contact_partnerships_email", "contact_phone_one", "contact_phone_two", "contact_location", "contact_map_query", "social_facebook", "social_twitter_x", "social_linkedin", "social_youtube", "logo_id", "logo_light_id", "stats_teachers_reached", "stats_learners_reached", "stats_literacy_programme", "stats_literacy_control", "stats_numeracy_programme", "stats_numeracy_control", "stats_social_return", "updated_at", "created_at" FROM \`site_settings\`;`)
  await db.run(sql`DROP TABLE \`site_settings\`;`)
  await db.run(sql`ALTER TABLE \`__new_site_settings\` RENAME TO \`site_settings\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`site_settings_logo_idx\` ON \`site_settings\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_logo_light_idx\` ON \`site_settings\` (\`logo_light_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_home_page\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`hero_cta_primary_label\` text DEFAULT 'Discover Our Work',
  	\`hero_cta_secondary_label\` text DEFAULT 'Invest In Systemic Change',
  	\`model_section_subtitle\` text DEFAULT 'How We Create Change',
  	\`model_section_title\` text DEFAULT 'Our Model: Four Interventions',
  	\`model_section_description\` text DEFAULT 'A child cannot love learning without a teacher who loves teaching. We build the capacity of teachers, school leaders and officials together across both primary and secondary education, so motivation and quality take root and stay embedded in the system.',
  	\`ubuntu_section_subtitle\` text DEFAULT 'The Ubuntu Philosophy',
  	\`ubuntu_section_title\` text DEFAULT 'The well-being of a child is tied to the strength of their community',
  	\`ubuntu_section_description\` text DEFAULT 'Ubuntu means "I am because we are." We act with compassion, respect and collective responsibility, knowing that a child''s wellbeing is deeply connected to the wellbeing of their teacher, school and community.',
  	\`ubuntu_section_value_one_title\` text DEFAULT 'Co-Creation',
  	\`ubuntu_section_value_one_text\` text DEFAULT 'We don''t have all the answers upfront. We design solutions with educators, communities and learners.',
  	\`ubuntu_section_value_two_title\` text DEFAULT 'Shared Purpose',
  	\`ubuntu_section_value_two_text\` text DEFAULT 'United by one commitment: making education relevant, equitable and high quality for every African child.',
  	\`audience_section_subtitle\` text DEFAULT 'Audience Value Propositions',
  	\`audience_section_title\` text DEFAULT 'Partner With Us, However You Show Up',
  	\`audience_section_intro_title\` text DEFAULT 'Because Every Partner Plays A Different Role.',
  	\`audience_section_governments_text\` text DEFAULT 'We strengthen what already exists, aligning with your national policies to ensure scalable, sustainable educational development.',
  	\`audience_section_funders_text\` text DEFAULT 'Your investment translates into measurable, scalable reform, generating a high return on social impact.',
  	\`audience_section_communities_text\` text DEFAULT 'Your voice shapes the solution, ensuring our programs respect the principle of Ubuntu and reflect local realities.',
  	\`audience_section_knowledge_partner_text\` text DEFAULT 'Your research and technical expertise strengthen the evidence behind our work, co-authoring studies, shaping policy dialogue, and helping translate evidence into practice across Africa.',
  	\`cta_section_careers_label\` text DEFAULT 'Careers, internships & volunteering',
  	\`cta_section_careers_title\` text DEFAULT 'Want to join our team?',
  	\`cta_section_partner_label\` text DEFAULT 'Governments, funders & communities',
  	\`cta_section_partner_title\` text DEFAULT 'Ready to partner with us?',
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`INSERT INTO \`__new_home_page\`("id", "hero_cta_primary_label", "hero_cta_secondary_label", "model_section_subtitle", "model_section_title", "model_section_description", "ubuntu_section_subtitle", "ubuntu_section_title", "ubuntu_section_description", "ubuntu_section_value_one_title", "ubuntu_section_value_one_text", "ubuntu_section_value_two_title", "ubuntu_section_value_two_text", "audience_section_subtitle", "audience_section_title", "audience_section_intro_title", "audience_section_governments_text", "audience_section_funders_text", "audience_section_communities_text", "cta_section_careers_label", "cta_section_careers_title", "cta_section_partner_label", "cta_section_partner_title", "updated_at", "created_at") SELECT "id", "hero_cta_primary_label", "hero_cta_secondary_label", "model_section_subtitle", "model_section_title", "model_section_description", "ubuntu_section_subtitle", "ubuntu_section_title", "ubuntu_section_description", "ubuntu_section_value_one_title", "ubuntu_section_value_one_text", "ubuntu_section_value_two_title", "ubuntu_section_value_two_text", "audience_section_subtitle", "audience_section_title", "audience_section_intro_title", "audience_section_governments_text", "audience_section_funders_text", "audience_section_communities_text", "cta_section_careers_label", "cta_section_careers_title", "cta_section_partner_label", "cta_section_partner_title", "updated_at", "created_at" FROM \`home_page\`;`)
  await db.run(sql`DROP TABLE \`home_page\`;`)
  await db.run(sql`ALTER TABLE \`__new_home_page\` RENAME TO \`home_page\`;`)
  await db.run(sql`CREATE TABLE \`__new_careers_page\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`why_work_title\` text DEFAULT 'Why Work With Us',
  	\`why_work_text\` text DEFAULT 'At Ed Impact Africa Foundation, you''ll work alongside governments, school leaders and teachers to strengthen education systems across Africa, reaching 199,856 teachers and 5,892,477 learners today, with more to come as we scale beyond Uganda.',
  	\`open_positions_text\` text DEFAULT 'We don''t have any open positions right now. Check back soon, or email us your CV and we''ll reach out when a role matching your experience opens up.',
  	\`internships_text\` text DEFAULT 'We welcome enquiries from early-career professionals and volunteers interested in education systems reform. Get in touch and we''ll reach out when an opportunity fits.',
  	\`diversity_text\` text DEFAULT 'Guided by Ubuntu, we are committed to equal opportunity and inclusive hiring, building a team as diverse as the communities we serve.',
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`INSERT INTO \`__new_careers_page\`("id", "why_work_title", "why_work_text", "open_positions_text", "internships_text", "diversity_text", "updated_at", "created_at") SELECT "id", "why_work_title", "why_work_text", "open_positions_text", "internships_text", "diversity_text", "updated_at", "created_at" FROM \`careers_page\`;`)
  await db.run(sql`DROP TABLE \`careers_page\`;`)
  await db.run(sql`ALTER TABLE \`__new_careers_page\` RENAME TO \`careers_page\`;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_site_settings\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`site_name\` text DEFAULT 'Ed Impact Africa Foundation',
  	\`tagline\` text DEFAULT 'Because every African child deserves an education system that unlocks their potential.',
  	\`contact_email\` text DEFAULT 'info@edimpactafricafoundation.org',
  	\`contact_partnerships_email\` text DEFAULT 'partnerships@edimpactafricafoundation.org',
  	\`contact_phone_one\` text DEFAULT '+256 781 064 668',
  	\`contact_phone_two\` text DEFAULT '+256 782 891 322',
  	\`contact_location\` text DEFAULT 'Kampala, Uganda',
  	\`contact_map_query\` text DEFAULT 'Kampala, Uganda',
  	\`social_facebook\` text DEFAULT 'https://www.facebook.com',
  	\`social_twitter_x\` text DEFAULT 'https://x.com',
  	\`social_linkedin\` text DEFAULT 'https://www.linkedin.com',
  	\`social_youtube\` text DEFAULT 'https://www.youtube.com',
  	\`logo_id\` integer,
  	\`logo_light_id\` integer,
  	\`stats_teachers_reached\` text DEFAULT '199,856',
  	\`stats_learners_reached\` text DEFAULT '5,892,477',
  	\`stats_literacy_programme\` text DEFAULT '73.1%',
  	\`stats_literacy_control\` text DEFAULT '57.0%',
  	\`stats_numeracy_programme\` text DEFAULT '66.7%',
  	\`stats_numeracy_control\` text DEFAULT '54.1%',
  	\`stats_social_return\` text DEFAULT '£3.12 for every £1 invested',
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`logo_light_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`INSERT INTO \`__new_site_settings\`("id", "site_name", "tagline", "contact_email", "contact_partnerships_email", "contact_phone_one", "contact_phone_two", "contact_location", "contact_map_query", "social_facebook", "social_twitter_x", "social_linkedin", "social_youtube", "logo_id", "logo_light_id", "stats_teachers_reached", "stats_learners_reached", "stats_literacy_programme", "stats_literacy_control", "stats_numeracy_programme", "stats_numeracy_control", "stats_social_return", "updated_at", "created_at") SELECT "id", "site_name", "tagline", "contact_email", "contact_partnerships_email", "contact_phone_one", "contact_phone_two", "contact_location", "contact_map_query", "social_facebook", "social_twitter_x", "social_linkedin", "social_youtube", "logo_id", "logo_light_id", "stats_teachers_reached", "stats_learners_reached", "stats_literacy_programme", "stats_literacy_control", "stats_numeracy_programme", "stats_numeracy_control", "stats_social_return", "updated_at", "created_at" FROM \`site_settings\`;`)
  await db.run(sql`DROP TABLE \`site_settings\`;`)
  await db.run(sql`ALTER TABLE \`__new_site_settings\` RENAME TO \`site_settings\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`site_settings_logo_idx\` ON \`site_settings\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_logo_light_idx\` ON \`site_settings\` (\`logo_light_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_home_page\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`hero_cta_primary_label\` text DEFAULT 'Discover Our Work',
  	\`hero_cta_secondary_label\` text DEFAULT 'Invest In Systemic Change',
  	\`model_section_subtitle\` text DEFAULT 'How We Create Change',
  	\`model_section_title\` text DEFAULT 'Our Model: Four Interventions',
  	\`model_section_description\` text DEFAULT 'A child cannot love learning without a teacher who loves teaching. We build the capacity of teachers, school leaders and officials together, so motivation and quality take root and stay embedded in the system.',
  	\`ubuntu_section_subtitle\` text DEFAULT 'The Ubuntu Philosophy',
  	\`ubuntu_section_title\` text DEFAULT 'The well-being of a child is tied to the strength of their community',
  	\`ubuntu_section_description\` text DEFAULT 'Ubuntu means "I am because we are." We act with compassion, respect and collective responsibility, knowing that a child''s wellbeing is deeply connected to the wellbeing of their teacher, school and community.',
  	\`ubuntu_section_value_one_title\` text DEFAULT 'Co-Creation',
  	\`ubuntu_section_value_one_text\` text DEFAULT 'We don''t have all the answers upfront. We design solutions with educators, communities and learners.',
  	\`ubuntu_section_value_two_title\` text DEFAULT 'Shared Purpose',
  	\`ubuntu_section_value_two_text\` text DEFAULT 'United by one commitment: making education relevant, equitable and high quality for every African child.',
  	\`audience_section_subtitle\` text DEFAULT 'Audience Value Propositions',
  	\`audience_section_title\` text DEFAULT 'Partner With Us, However You Show Up',
  	\`audience_section_intro_title\` text DEFAULT 'Because Every Partner Plays A Different Role.',
  	\`audience_section_governments_text\` text DEFAULT 'We strengthen what already exists, aligning with your national policies to ensure scalable, sustainable educational development.',
  	\`audience_section_funders_text\` text DEFAULT 'Your investment translates into measurable, scalable reform, generating a high return on social impact.',
  	\`audience_section_communities_text\` text DEFAULT 'Your voice shapes the solution, ensuring our programs respect the principle of Ubuntu and reflect local realities.',
  	\`cta_section_careers_label\` text DEFAULT 'Careers, internships & volunteering',
  	\`cta_section_careers_title\` text DEFAULT 'Want to join our team?',
  	\`cta_section_partner_label\` text DEFAULT 'Governments, funders & communities',
  	\`cta_section_partner_title\` text DEFAULT 'Ready to partner with us?',
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`INSERT INTO \`__new_home_page\`("id", "hero_cta_primary_label", "hero_cta_secondary_label", "model_section_subtitle", "model_section_title", "model_section_description", "ubuntu_section_subtitle", "ubuntu_section_title", "ubuntu_section_description", "ubuntu_section_value_one_title", "ubuntu_section_value_one_text", "ubuntu_section_value_two_title", "ubuntu_section_value_two_text", "audience_section_subtitle", "audience_section_title", "audience_section_intro_title", "audience_section_governments_text", "audience_section_funders_text", "audience_section_communities_text", "cta_section_careers_label", "cta_section_careers_title", "cta_section_partner_label", "cta_section_partner_title", "updated_at", "created_at") SELECT "id", "hero_cta_primary_label", "hero_cta_secondary_label", "model_section_subtitle", "model_section_title", "model_section_description", "ubuntu_section_subtitle", "ubuntu_section_title", "ubuntu_section_description", "ubuntu_section_value_one_title", "ubuntu_section_value_one_text", "ubuntu_section_value_two_title", "ubuntu_section_value_two_text", "audience_section_subtitle", "audience_section_title", "audience_section_intro_title", "audience_section_governments_text", "audience_section_funders_text", "audience_section_communities_text", "cta_section_careers_label", "cta_section_careers_title", "cta_section_partner_label", "cta_section_partner_title", "updated_at", "created_at" FROM \`home_page\`;`)
  await db.run(sql`DROP TABLE \`home_page\`;`)
  await db.run(sql`ALTER TABLE \`__new_home_page\` RENAME TO \`home_page\`;`)
  await db.run(sql`CREATE TABLE \`__new_careers_page\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`why_work_title\` text DEFAULT 'Why Work With Us',
  	\`why_work_text\` text DEFAULT 'At Ed Impact Africa Foundation, you''ll work alongside governments, school leaders and teachers to strengthen education systems across Africa, reaching 199,856 teachers and 5,892,477 learners today, with more to come as we scale beyond Uganda.',
  	\`open_positions_text\` text DEFAULT 'We don''t have any open positions right now. Check back soon, or send us your CV using the form and we''ll reach out when a role matching your experience opens up.',
  	\`internships_text\` text DEFAULT 'We welcome enquiries from early-career professionals and volunteers interested in education systems reform. Tell us about your interest in the form and we''ll get in touch when an opportunity fits.',
  	\`diversity_text\` text DEFAULT 'Guided by Ubuntu, we are committed to equal opportunity and inclusive hiring, building a team as diverse as the communities we serve.',
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`INSERT INTO \`__new_careers_page\`("id", "why_work_title", "why_work_text", "open_positions_text", "internships_text", "diversity_text", "updated_at", "created_at") SELECT "id", "why_work_title", "why_work_text", "open_positions_text", "internships_text", "diversity_text", "updated_at", "created_at" FROM \`careers_page\`;`)
  await db.run(sql`DROP TABLE \`careers_page\`;`)
  await db.run(sql`ALTER TABLE \`__new_careers_page\` RENAME TO \`careers_page\`;`)
}
