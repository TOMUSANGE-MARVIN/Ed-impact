import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
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
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE TABLE \`__new_about_page\` (
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
  	\`what_we_do_explanation\` text DEFAULT 'Central to our programming is a child who loves learning and is prepared to thrive in the world after school. But we know that you cannot have a child who loves learning without having a teacher who loves teaching and is intrinsically motivated to teach. We therefore deliver a program that builds the capacity of teachers, hinged on the principles of Intrinsic Motivation: Relationships, Autonomy, Mastery and Purpose. But we also know that a teacher cannot love teaching unless the right conditions have been set at school level by the school leaders. We therefore work through the school leaders to build the capacity of the teachers, and ensure that they are setting the right environment and role modelling the right behaviours for teachers to love teaching. The school leaders also have a direct relationship with district officials, District Education Officers, Inspectors of Schools and others. The relationship that the school leaders have with the district officials will directly impact how the school leaders relate with the teachers, and hence how the teachers relate with the learners. The same applies to the relationship between the district officials and the national education leaders.',
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
  await db.run(sql`INSERT INTO \`__new_about_page\`("id", "background_subtitle", "background_title", "background_intro", "who_we_are_subtitle", "who_we_are_title", "who_we_are_description", "who_we_are_inherits_intro", "what_we_do_subtitle", "what_we_do_title", "what_we_do_intro", "what_we_do_explanation", "what_we_do_anchors_intro", "vision_mission_subtitle", "vision_mission_title", "vision_mission_reason_goal", "vision_mission_mission", "vision_mission_vision", "vision_mission_brand_promise", "strategic_priorities_subtitle", "strategic_priorities_title", "strategic_priorities_intro", "updated_at", "created_at") SELECT "id", "background_subtitle", "background_title", "background_intro", "who_we_are_subtitle", "who_we_are_title", "who_we_are_description", "who_we_are_inherits_intro", "what_we_do_subtitle", "what_we_do_title", "what_we_do_intro", "what_we_do_explanation", "what_we_do_anchors_intro", "vision_mission_subtitle", "vision_mission_title", "vision_mission_reason_goal", "vision_mission_mission", "vision_mission_vision", "vision_mission_brand_promise", "strategic_priorities_subtitle", "strategic_priorities_title", "strategic_priorities_intro", "updated_at", "created_at" FROM \`about_page\`;`)
  await db.run(sql`DROP TABLE \`about_page\`;`)
  await db.run(sql`ALTER TABLE \`__new_about_page\` RENAME TO \`about_page\`;`)
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
  await db.run(sql`ALTER TABLE \`programs\` ADD \`body\` text;`)
  await db.run(sql`ALTER TABLE \`programs\` ADD \`stat_three_label\` text DEFAULT '';`)
  await db.run(sql`ALTER TABLE \`programs\` ADD \`stat_three_value\` text DEFAULT '';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
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
  await db.run(sql`INSERT INTO \`__new_home_page\`("id", "hero_cta_primary_label", "hero_cta_secondary_label", "model_section_subtitle", "model_section_title", "model_section_description", "ubuntu_section_subtitle", "ubuntu_section_title", "ubuntu_section_description", "ubuntu_section_value_one_title", "ubuntu_section_value_one_text", "ubuntu_section_value_two_title", "ubuntu_section_value_two_text", "audience_section_subtitle", "audience_section_title", "audience_section_intro_title", "audience_section_governments_text", "audience_section_funders_text", "audience_section_communities_text", "cta_section_careers_label", "cta_section_careers_title", "cta_section_partner_label", "cta_section_partner_title", "updated_at", "created_at") SELECT "id", "hero_cta_primary_label", "hero_cta_secondary_label", "model_section_subtitle", "model_section_title", "model_section_description", "ubuntu_section_subtitle", "ubuntu_section_title", "ubuntu_section_description", "ubuntu_section_value_one_title", "ubuntu_section_value_one_text", "ubuntu_section_value_two_title", "ubuntu_section_value_two_text", "audience_section_subtitle", "audience_section_title", "audience_section_intro_title", "audience_section_governments_text", "audience_section_funders_text", "audience_section_communities_text", "cta_section_careers_label", "cta_section_careers_title", "cta_section_partner_label", "cta_section_partner_title", "updated_at", "created_at" FROM \`home_page\`;`)
  await db.run(sql`DROP TABLE \`home_page\`;`)
  await db.run(sql`ALTER TABLE \`__new_home_page\` RENAME TO \`home_page\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE TABLE \`__new_about_page\` (
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
  await db.run(sql`INSERT INTO \`__new_about_page\`("id", "background_subtitle", "background_title", "background_intro", "who_we_are_subtitle", "who_we_are_title", "who_we_are_description", "who_we_are_inherits_intro", "what_we_do_subtitle", "what_we_do_title", "what_we_do_intro", "what_we_do_explanation", "what_we_do_anchors_intro", "vision_mission_subtitle", "vision_mission_title", "vision_mission_reason_goal", "vision_mission_mission", "vision_mission_vision", "vision_mission_brand_promise", "strategic_priorities_subtitle", "strategic_priorities_title", "strategic_priorities_intro", "updated_at", "created_at") SELECT "id", "background_subtitle", "background_title", "background_intro", "who_we_are_subtitle", "who_we_are_title", "who_we_are_description", "who_we_are_inherits_intro", "what_we_do_subtitle", "what_we_do_title", "what_we_do_intro", "what_we_do_explanation", "what_we_do_anchors_intro", "vision_mission_subtitle", "vision_mission_title", "vision_mission_reason_goal", "vision_mission_mission", "vision_mission_vision", "vision_mission_brand_promise", "strategic_priorities_subtitle", "strategic_priorities_title", "strategic_priorities_intro", "updated_at", "created_at" FROM \`about_page\`;`)
  await db.run(sql`DROP TABLE \`about_page\`;`)
  await db.run(sql`ALTER TABLE \`__new_about_page\` RENAME TO \`about_page\`;`)
  await db.run(sql`CREATE TABLE \`__new_careers_page\` (
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
  await db.run(sql`INSERT INTO \`__new_careers_page\`("id", "why_work_title", "why_work_text", "open_positions_text", "internships_text", "diversity_text", "updated_at", "created_at") SELECT "id", "why_work_title", "why_work_text", "open_positions_text", "internships_text", "diversity_text", "updated_at", "created_at" FROM \`careers_page\`;`)
  await db.run(sql`DROP TABLE \`careers_page\`;`)
  await db.run(sql`ALTER TABLE \`__new_careers_page\` RENAME TO \`careers_page\`;`)
  await db.run(sql`ALTER TABLE \`programs\` DROP COLUMN \`body\`;`)
  await db.run(sql`ALTER TABLE \`programs\` DROP COLUMN \`stat_three_label\`;`)
  await db.run(sql`ALTER TABLE \`programs\` DROP COLUMN \`stat_three_value\`;`)
}
