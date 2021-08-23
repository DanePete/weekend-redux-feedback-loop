-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES (4, 4, 5, 'Doing Great!');

-- Table Alters
ALTER TABLE "public"."feedback" ALTER COLUMN "support" TYPE float;
ALTER TABLE "public"."feedback" ALTER COLUMN "understanding" TYPE float;
ALTER TABLE "public"."feedback" ALTER COLUMN "feeling" TYPE float;