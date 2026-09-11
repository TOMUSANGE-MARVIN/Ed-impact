import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`users_sessions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`created_at\` text,
  	\`expires_at\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`users_sessions_order_idx\` ON \`users_sessions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`users_sessions_parent_id_idx\` ON \`users_sessions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`users\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`email\` text NOT NULL,
  	\`reset_password_token\` text,
  	\`reset_password_expiration\` text,
  	\`salt\` text,
  	\`hash\` text,
  	\`login_attempts\` numeric DEFAULT 0,
  	\`lock_until\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`users_updated_at_idx\` ON \`users\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`users_created_at_idx\` ON \`users\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_email_idx\` ON \`users\` (\`email\`);`)
  await db.run(sql`CREATE TABLE \`media\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`alt\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`url\` text,
  	\`thumbnail_u_r_l\` text,
  	\`filename\` text,
  	\`mime_type\` text,
  	\`filesize\` numeric,
  	\`width\` numeric,
  	\`height\` numeric,
  	\`focal_x\` numeric,
  	\`focal_y\` numeric
  );
  `)
  await db.run(sql`CREATE INDEX \`media_updated_at_idx\` ON \`media\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`media_created_at_idx\` ON \`media\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`media_filename_idx\` ON \`media\` (\`filename\`);`)
  await db.run(sql`CREATE TABLE \`team_members\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`role\` text NOT NULL,
  	\`category\` text DEFAULT 'executive' NOT NULL,
  	\`photo_id\` integer,
  	\`bio\` text,
  	\`linkedin_url\` text,
  	\`email\` text,
  	\`order\` numeric DEFAULT 0,
  	\`featured_on_home\` integer DEFAULT false,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`photo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`team_members_photo_idx\` ON \`team_members\` (\`photo_id\`);`)
  await db.run(sql`CREATE INDEX \`team_members_updated_at_idx\` ON \`team_members\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`team_members_created_at_idx\` ON \`team_members\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`programs\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`tag\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`image_id\` integer,
  	\`percent\` numeric DEFAULT 50,
  	\`stat_one_label\` text DEFAULT 'Coverage',
  	\`stat_one_value\` text DEFAULT '',
  	\`stat_two_label\` text DEFAULT 'Reach',
  	\`stat_two_value\` text DEFAULT '',
  	\`order\` numeric DEFAULT 0,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`programs_image_idx\` ON \`programs\` (\`image_id\`);`)
  await db.run(sql`CREATE INDEX \`programs_updated_at_idx\` ON \`programs\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`programs_created_at_idx\` ON \`programs\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`interventions\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`description\` text NOT NULL,
  	\`icon\` text DEFAULT 'icon-education',
  	\`order\` numeric DEFAULT 0,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`interventions_updated_at_idx\` ON \`interventions\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`interventions_created_at_idx\` ON \`interventions\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`testimonials\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`quote\` text NOT NULL,
  	\`name\` text NOT NULL,
  	\`role\` text NOT NULL,
  	\`order\` numeric DEFAULT 0,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`testimonials_updated_at_idx\` ON \`testimonials\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`testimonials_created_at_idx\` ON \`testimonials\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`posts\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`tag\` text NOT NULL,
  	\`excerpt\` text NOT NULL,
  	\`body\` text,
  	\`image_id\` integer,
  	\`author\` text DEFAULT 'Ed Impact Team',
  	\`read_time\` text DEFAULT '5 min read',
  	\`published_date\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`posts_image_idx\` ON \`posts\` (\`image_id\`);`)
  await db.run(sql`CREATE INDEX \`posts_updated_at_idx\` ON \`posts\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`posts_created_at_idx\` ON \`posts\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`faqs\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`question\` text NOT NULL,
  	\`answer\` text NOT NULL,
  	\`page\` text DEFAULT 'general' NOT NULL,
  	\`order\` numeric DEFAULT 0,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`faqs_updated_at_idx\` ON \`faqs\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`faqs_created_at_idx\` ON \`faqs\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_kv\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text NOT NULL,
  	\`data\` text NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`payload_kv_key_idx\` ON \`payload_kv\` (\`key\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`global_slug\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_global_slug_idx\` ON \`payload_locked_documents\` (\`global_slug\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_updated_at_idx\` ON \`payload_locked_documents\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_created_at_idx\` ON \`payload_locked_documents\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	\`media_id\` integer,
  	\`team_members_id\` integer,
  	\`programs_id\` integer,
  	\`interventions_id\` integer,
  	\`testimonials_id\` integer,
  	\`posts_id\` integer,
  	\`faqs_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`team_members_id\`) REFERENCES \`team_members\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`programs_id\`) REFERENCES \`programs\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`interventions_id\`) REFERENCES \`interventions\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`testimonials_id\`) REFERENCES \`testimonials\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`posts_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`faqs_id\`) REFERENCES \`faqs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_team_members_id_idx\` ON \`payload_locked_documents_rels\` (\`team_members_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_programs_id_idx\` ON \`payload_locked_documents_rels\` (\`programs_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_interventions_id_idx\` ON \`payload_locked_documents_rels\` (\`interventions_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_testimonials_id_idx\` ON \`payload_locked_documents_rels\` (\`testimonials_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_posts_id_idx\` ON \`payload_locked_documents_rels\` (\`posts_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_faqs_id_idx\` ON \`payload_locked_documents_rels\` (\`faqs_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text,
  	\`value\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_key_idx\` ON \`payload_preferences\` (\`key\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_updated_at_idx\` ON \`payload_preferences\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_created_at_idx\` ON \`payload_preferences\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_preferences\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_order_idx\` ON \`payload_preferences_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_parent_idx\` ON \`payload_preferences_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_path_idx\` ON \`payload_preferences_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_users_id_idx\` ON \`payload_preferences_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_migrations\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`batch\` numeric,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_migrations_updated_at_idx\` ON \`payload_migrations\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_migrations_created_at_idx\` ON \`payload_migrations\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`site_settings\` (
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
  await db.run(sql`CREATE INDEX \`site_settings_logo_idx\` ON \`site_settings\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_logo_light_idx\` ON \`site_settings\` (\`logo_light_id\`);`)
  await db.run(sql`CREATE TABLE \`home_page_hero_slides\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`subtitle\` text NOT NULL,
  	\`heading_before_accent\` text,
  	\`heading_accent\` text,
  	\`heading_after_accent\` text DEFAULT '.',
  	\`background_image_id\` integer,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`home_page\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`home_page_hero_slides_order_idx\` ON \`home_page_hero_slides\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`home_page_hero_slides_parent_id_idx\` ON \`home_page_hero_slides\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`home_page_hero_slides_background_image_idx\` ON \`home_page_hero_slides\` (\`background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`home_page\` (
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
  	\`ubuntu_section_value_one_text\` text DEFAULT 'We don''t have all the answers upfront — we design solutions with educators, communities and learners.',
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
  await db.run(sql`CREATE TABLE \`about_page_background_paragraphs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`about_page\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`about_page_background_paragraphs_order_idx\` ON \`about_page_background_paragraphs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`about_page_background_paragraphs_parent_id_idx\` ON \`about_page_background_paragraphs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`about_page_who_we_are_inherits\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`about_page\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`about_page_who_we_are_inherits_order_idx\` ON \`about_page_who_we_are_inherits\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`about_page_who_we_are_inherits_parent_id_idx\` ON \`about_page_who_we_are_inherits\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`about_page_program_anchors\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`text\` text NOT NULL,
  	\`icon\` text DEFAULT 'icon-education',
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`about_page\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`about_page_program_anchors_order_idx\` ON \`about_page_program_anchors\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`about_page_program_anchors_parent_id_idx\` ON \`about_page_program_anchors\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`about_page_core_values\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`about_page\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`about_page_core_values_order_idx\` ON \`about_page_core_values\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`about_page_core_values_parent_id_idx\` ON \`about_page_core_values\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`about_page_strategic_priority_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`about_page\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`about_page_strategic_priority_items_order_idx\` ON \`about_page_strategic_priority_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`about_page_strategic_priority_items_parent_id_idx\` ON \`about_page_strategic_priority_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`about_page\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`background_subtitle\` text DEFAULT 'Our Background',
  	\`background_title\` text DEFAULT 'From STiR Education Uganda To Ed Impact Africa Foundation',
  	\`background_intro\` text DEFAULT 'Ed Impact Africa Foundation is a local entity that has been mothered by STiR Education. STiR Education is an INGO (headquartered in the UK) that supports education systems to reignite intrinsic motivation (IM) so that every child, teacher, and official is motivated to learn and improve. Its vision is ''a world where teachers love teaching and children love learning''. STiR Education works towards achieving this through the provision of a system-led teacher Continuous Professional Development program hinged on the principles of intrinsic motivation. Since its inception in 2012, STiR Education has had presence/program operations in Uganda, India, Indonesia and Ethiopia.',
  	\`who_we_are_subtitle\` text DEFAULT 'Who We Are',
  	\`who_we_are_title\` text DEFAULT 'A Pan-African Organisation For Education Equity And Quality',
  	\`who_we_are_description\` text DEFAULT 'Ed Impact Africa Foundation is a Pan-African civil society organisation (CSO) focused on education equity and quality. We are headquartered in Uganda and are building on the legacy and achievements of STiR Education Uganda as we deepen programming in Uganda while expanding into new geographies across the continent.',
  	\`who_we_are_inherits_intro\` text DEFAULT 'As a successor organisation, Ed Impact Africa Foundation inherits:',
  	\`what_we_do_subtitle\` text DEFAULT 'What We Do',
  	\`what_we_do_title\` text DEFAULT 'Our Model, Reach And Programme Anchors',
  	\`what_we_do_intro\` text DEFAULT 'Ed Impact is inheriting the model, program reach in Uganda, the program anchors and theory of change for STiR Education.',
  	\`what_we_do_explanation\` text DEFAULT 'Central to our programming is a child who loves learning and is prepared to thrive in the world after school. But we know that you cannot have a child who loves learning without having a teacher who loves teaching and is intrinsically motivated to teach. We therefore deliver a program that builds the capacity of teachers, hinged on the principles of Intrinsic Motivation — Relationships, Autonomy, Mastery and Purpose. But we also know that a teacher cannot love teaching unless the right conditions have been set at school level by the school leaders. We therefore work through the school leaders to build the capacity of the teachers, and ensure that they are setting the right environment and role modelling the right behaviours for teachers to love teaching. The school leaders also have a direct relationship with district officials — District Education Officers, Inspectors of Schools and others. The relationship that the school leaders have with the district officials will directly impact how the school leaders relate with the teachers, and hence how the teachers relate with the learners. The same applies to the relationship between the district officials and the national education leaders.',
  	\`what_we_do_anchors_intro\` text DEFAULT 'In our programming therefore, we design, deliver and monitor the program through our five programme anchors:',
  	\`vision_mission_subtitle\` text DEFAULT 'Vision, Mission & Values',
  	\`vision_mission_title\` text DEFAULT 'Because Education Is The Greatest Socio-Economic Equaliser',
  	\`vision_mission_reason_goal\` text DEFAULT 'As Nelson Mandela is quoted to have said: ''It is through education that the daughter of a peasant can become a doctor, that the son of a mineworker can become the head of the mine; that a child of farm workers can become the president of a great nation''.',
  	\`vision_mission_mission\` text DEFAULT 'Working with existing education systems across Africa, we provide needs based and evidence grounded education equity and quality improvement interventions, based on the principles of sustainability and scalability.',
  	\`vision_mission_vision\` text DEFAULT 'Quality, Equitable and relevant education for all children in Africa.',
  	\`vision_mission_brand_promise\` text DEFAULT 'Africa''s systems reform partner, co-creating scalable solutions that turn policy into belonging.',
  	\`strategic_priorities_subtitle\` text DEFAULT '2026-2031 Strategic Plan',
  	\`strategic_priorities_title\` text DEFAULT 'Where We''re Headed',
  	\`strategic_priorities_intro\` text DEFAULT 'Our new strategic direction positions Ed Impact Africa Foundation as a thought leader in education equity and quality, starting with Uganda and East Africa, over the next five years.',
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`CREATE TABLE \`careers_page_reasons\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`careers_page\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`careers_page_reasons_order_idx\` ON \`careers_page_reasons\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`careers_page_reasons_parent_id_idx\` ON \`careers_page_reasons\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`careers_page\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`why_work_title\` text DEFAULT 'Why Work With Us',
  	\`why_work_text\` text DEFAULT 'At Ed Impact Africa Foundation, you''ll work alongside governments, school leaders and teachers to strengthen education systems across Africa — reaching 199,856 teachers and 5,892,477 learners today, with more to come as we scale beyond Uganda.',
  	\`open_positions_text\` text DEFAULT 'We don''t have any open positions right now. Check back soon, or send us your CV using the form and we''ll reach out when a role matching your experience opens up.',
  	\`internships_text\` text DEFAULT 'We welcome enquiries from early-career professionals and volunteers interested in education systems reform. Tell us about your interest in the form and we''ll get in touch when an opportunity fits.',
  	\`diversity_text\` text DEFAULT 'Guided by Ubuntu, we are committed to equal opportunity and inclusive hiring — building a team as diverse as the communities we serve.',
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`users_sessions\`;`)
  await db.run(sql`DROP TABLE \`users\`;`)
  await db.run(sql`DROP TABLE \`media\`;`)
  await db.run(sql`DROP TABLE \`team_members\`;`)
  await db.run(sql`DROP TABLE \`programs\`;`)
  await db.run(sql`DROP TABLE \`interventions\`;`)
  await db.run(sql`DROP TABLE \`testimonials\`;`)
  await db.run(sql`DROP TABLE \`posts\`;`)
  await db.run(sql`DROP TABLE \`faqs\`;`)
  await db.run(sql`DROP TABLE \`payload_kv\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_migrations\`;`)
  await db.run(sql`DROP TABLE \`site_settings\`;`)
  await db.run(sql`DROP TABLE \`home_page_hero_slides\`;`)
  await db.run(sql`DROP TABLE \`home_page\`;`)
  await db.run(sql`DROP TABLE \`about_page_background_paragraphs\`;`)
  await db.run(sql`DROP TABLE \`about_page_who_we_are_inherits\`;`)
  await db.run(sql`DROP TABLE \`about_page_program_anchors\`;`)
  await db.run(sql`DROP TABLE \`about_page_core_values\`;`)
  await db.run(sql`DROP TABLE \`about_page_strategic_priority_items\`;`)
  await db.run(sql`DROP TABLE \`about_page\`;`)
  await db.run(sql`DROP TABLE \`careers_page_reasons\`;`)
  await db.run(sql`DROP TABLE \`careers_page\`;`)
}
