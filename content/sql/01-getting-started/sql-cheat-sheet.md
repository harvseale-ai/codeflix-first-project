# SQL CHEAT SHEET

CORE: SELECT → FILTER → JOIN → GROUP → DEBUG

SQL = STORE, QUERY, AND ANALYSE STRUCTURED DATA

THINK:
What do I want from the policy intelligence database?

See data? → SELECT
Choose table? → FROM
Filter rows? → WHERE
Sort results? → ORDER BY
Limit results? → LIMIT
Combine tables? → JOIN
Count/summarise? → GROUP BY
Filter groups? → HAVING
Add data? → INSERT
Update data? → UPDATE
Delete data? → DELETE
Debug? → check table names, columns, joins, commas

## 1) CORE THINKING PATTERN

```text
SQL CHEAT SHEET — FINAL (PATTERN)

CORE: SELECT → FROM → WHERE → JOIN → GROUP → ORDER → DEBUG

READ: SELECT | FROM
FILTER: WHERE | AND | OR | IN | BETWEEN | LIKE | IS NULL
SORT: ORDER BY | ASC | DESC
LIMIT: LIMIT
JOIN: INNER JOIN | LEFT JOIN | ON
GROUP: GROUP BY | COUNT | SUM | AVG | MIN | MAX
GROUP FILTER: HAVING
CREATE: CREATE TABLE
ADD DATA: INSERT INTO
CHANGE DATA: UPDATE | SET
REMOVE DATA: DELETE
RELATIONSHIPS: primary key | foreign key
DEBUG: table? column? comma? quotes? join key? semicolon?
```

## 2) BASIC SELECT

```sql
SELECT *
FROM policies;
```

Meaning:

```text
SELECT = choose columns
* = all columns
FROM = choose table
policies = table name
```

Select specific columns:

```sql
SELECT title, category, risk_level
FROM policies;
```

## 3) POLICY INTELLIGENCE DATABASE EXAMPLE

```text
policies
- policy_id
- title
- category
- risk_level
- status
- published_date

evidence
- evidence_id
- policy_id
- source_title
- source_type
- reliability_score
- summary

actors
- actor_id
- name
- organisation_type

policy_actors
- policy_id
- actor_id
- role

relationships
- relationship_id
- source_policy_id
- target_policy_id
- relationship_type
```

## 4) SELECT COLUMNS

```sql
SELECT title, category
FROM policies;
```

Policy example:

```sql
SELECT title, risk_level, status
FROM policies;
```

Use when:

```text
You only want specific fields
You do not need every column
You want cleaner results
```

## 5) WHERE FILTERS

```sql
SELECT *
FROM policies
WHERE category = 'Housing';
```

More examples:

```sql
SELECT *
FROM policies
WHERE risk_level = 'High';
```

```sql
SELECT title, status
FROM policies
WHERE status = 'Under Review';
```

Rules:

```text
Text values use quotes
Numbers do not need quotes
WHERE filters rows
```

## 6) COMPARISON OPERATORS

```sql
SELECT *
FROM evidence
WHERE reliability_score > 80;
```

Operators:

```text
=    equals
!=   not equal
<>   not equal
>    greater than
<    less than
>=   greater than or equal
<=   less than or equal
```

Examples:

```sql
SELECT *
FROM evidence
WHERE reliability_score >= 75;
```

```sql
SELECT *
FROM policies
WHERE published_date >= '2026-01-01';
```

## 7) AND / OR / NOT

```sql
SELECT *
FROM policies
WHERE category = 'Climate'
AND risk_level = 'High';
```

```sql
SELECT *
FROM policies
WHERE category = 'Housing'
OR category = 'Health';
```

```sql
SELECT *
FROM policies
WHERE NOT status = 'Archived';
```

Rule:

```text
AND = both must be true
OR = either can be true
NOT = reverse condition
```

## 8) IN

```sql
SELECT *
FROM policies
WHERE category IN ('Housing', 'Health', 'Climate');
```

Use instead of many ORs:

```sql
SELECT *
FROM policies
WHERE risk_level IN ('High', 'Critical');
```

## 9) BETWEEN

```sql
SELECT *
FROM evidence
WHERE reliability_score BETWEEN 60 AND 90;
```

Date example:

```sql
SELECT *
FROM policies
WHERE published_date BETWEEN '2026-01-01' AND '2026-12-31';
```

Meaning:

```text
BETWEEN includes both start and end values
```

## 10) LIKE / SEARCHING TEXT

```sql
SELECT *
FROM policies
WHERE title LIKE '%housing%';
```

Patterns:

```text
% = any number of characters
_ = one character
```

Examples:

```sql
SELECT *
FROM evidence
WHERE summary LIKE '%emissions%';
```

```sql
SELECT *
FROM actors
WHERE name LIKE 'Department%';
```

## 11) NULL VALUES

```sql
SELECT *
FROM policies
WHERE published_date IS NULL;
```

```sql
SELECT *
FROM policies
WHERE published_date IS NOT NULL;
```

🚨 Important:

```text
Use IS NULL
Do not use = NULL
```

## 12) ORDER BY

```sql
SELECT title, risk_level, published_date
FROM policies
ORDER BY published_date DESC;
```

Options:

```text
ASC = low to high / oldest to newest
DESC = high to low / newest to oldest
```

Examples:

```sql
SELECT *
FROM evidence
ORDER BY reliability_score DESC;
```

```sql
SELECT *
FROM policies
ORDER BY category ASC, title ASC;
```

## 13) LIMIT

```sql
SELECT *
FROM policies
LIMIT 10;
```

Top 5 highest evidence scores:

```sql
SELECT *
FROM evidence
ORDER BY reliability_score DESC
LIMIT 5;
```

Use for:

```text
Testing queries
Previewing results
Avoiding huge outputs
```

## 14) DISTINCT

```sql
SELECT DISTINCT category
FROM policies;
```

Use when:

```text
You want unique values only
```

Example:

```sql
SELECT DISTINCT risk_level
FROM policies;
```

## 15) ALIASES

Column alias:

```sql
SELECT title AS policy_title
FROM policies;
```

Table alias:

```sql
SELECT p.title, p.category
FROM policies AS p;
```

Short version:

```sql
SELECT p.title, p.category
FROM policies p;
```

Use when:

```text
Queries get longer
Tables have similar column names
You are using joins
```

## 16) AGGREGATE FUNCTIONS

```sql
SELECT COUNT(*)
FROM policies;
```

Common aggregates:

```text
COUNT() = count rows
SUM() = total
AVG() = average
MIN() = smallest
MAX() = largest
```

Examples:

```sql
SELECT COUNT(*) AS total_policies
FROM policies;
```

```sql
SELECT AVG(reliability_score) AS average_reliability
FROM evidence;
```

```sql
SELECT MAX(reliability_score) AS strongest_evidence
FROM evidence;
```

## 17) GROUP BY

```sql
SELECT category, COUNT(*) AS total_policies
FROM policies
GROUP BY category;
```

Policy risk summary:

```sql
SELECT risk_level, COUNT(*) AS total
FROM policies
GROUP BY risk_level;
```

Average evidence reliability by policy:

```sql
SELECT policy_id, AVG(reliability_score) AS avg_reliability
FROM evidence
GROUP BY policy_id;
```

Rule:

```text
If you SELECT a normal column with an aggregate, that column usually needs GROUP BY
```

## 18) HAVING

```sql
SELECT category, COUNT(*) AS total_policies
FROM policies
GROUP BY category
HAVING COUNT(*) > 3;
```

Difference:

```text
WHERE filters rows before grouping
HAVING filters groups after grouping
```

Example:

```sql
SELECT policy_id, AVG(reliability_score) AS avg_score
FROM evidence
GROUP BY policy_id
HAVING AVG(reliability_score) >= 80;
```

## 19) BASIC JOIN

```sql
SELECT policies.title, evidence.source_title
FROM policies
INNER JOIN evidence
ON policies.policy_id = evidence.policy_id;
```

Meaning:

```text
JOIN combines tables
ON explains how tables connect
```

With aliases:

```sql
SELECT p.title, e.source_title
FROM policies p
INNER JOIN evidence e
ON p.policy_id = e.policy_id;
```

## 20) INNER JOIN

```sql
SELECT p.title, e.source_title, e.reliability_score
FROM policies p
INNER JOIN evidence e
ON p.policy_id = e.policy_id;
```

Meaning:

```text
Only returns rows that match in both tables
```

Use for:

```text
Policies that have evidence
Actors connected to policies
Relationships that have valid policy ids
```

## 21) LEFT JOIN

```sql
SELECT p.title, e.source_title
FROM policies p
LEFT JOIN evidence e
ON p.policy_id = e.policy_id;
```

Meaning:

```text
Returns all policies
Includes evidence when it exists
Shows NULL where there is no evidence
```

Find policies with no evidence:

```sql
SELECT p.title
FROM policies p
LEFT JOIN evidence e
ON p.policy_id = e.policy_id
WHERE e.evidence_id IS NULL;
```

## 22) MANY-TO-MANY JOIN

Policies connect to actors through `policy_actors`.

```sql
SELECT p.title, a.name, pa.role
FROM policies p
INNER JOIN policy_actors pa
ON p.policy_id = pa.policy_id
INNER JOIN actors a
ON pa.actor_id = a.actor_id;
```

Meaning:

```text
policies → policy_actors → actors
```

Use for:

```text
Which departments own which policies
Which organisations are stakeholders
Which actors oppose/support policies
```

## 23) POLICY RELATIONSHIP GRAPH QUERY

```sql
SELECT 
  source.title AS source_policy,
  target.title AS target_policy,
  r.relationship_type
FROM relationships r
INNER JOIN policies source
ON r.source_policy_id = source.policy_id
INNER JOIN policies target
ON r.target_policy_id = target.policy_id;
```

Example output:

```text
Clean Air Regulation → Transport Emissions Strategy → supports
Digital ID Framework → Data Protection Reform → depends_on
Housing Reform → Local Planning Policy → conflicts_with
```

## 24) INSERT DATA

```sql
INSERT INTO policies (title, category, risk_level, status, published_date)
VALUES ('Clean Air Regulation', 'Climate', 'High', 'Under Review', '2026-04-30');
```

Insert evidence:

```sql
INSERT INTO evidence (policy_id, source_title, source_type, reliability_score, summary)
VALUES (1, 'Air Quality Review 2026', 'Report', 88, 'Evidence links transport emissions to urban air quality.');
```

Rule:

```text
Columns and values must match in order
Text/date values use quotes
Numbers do not need quotes
```

## 25) UPDATE DATA

```sql
UPDATE policies
SET risk_level = 'Critical'
WHERE policy_id = 1;
```

Update multiple columns:

```sql
UPDATE policies
SET 
  risk_level = 'High',
  status = 'Reviewed'
WHERE policy_id = 2;
```

🚨 Critical rule:

```text
Always use WHERE with UPDATE
Without WHERE, every row changes
```

## 26) DELETE DATA

```sql
DELETE FROM policies
WHERE policy_id = 5;
```

🚨 Critical rule:

```text
Always use WHERE with DELETE
Without WHERE, every row is deleted
```

Safer pattern:

```sql
SELECT *
FROM policies
WHERE policy_id = 5;
```

Then:

```sql
DELETE FROM policies
WHERE policy_id = 5;
```

## 27) CREATE TABLE

```sql
CREATE TABLE policies (
  policy_id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  risk_level TEXT,
  status TEXT,
  published_date DATE
);
```

Evidence table:

```sql
CREATE TABLE evidence (
  evidence_id INTEGER PRIMARY KEY,
  policy_id INTEGER NOT NULL,
  source_title TEXT NOT NULL,
  source_type TEXT,
  reliability_score INTEGER,
  summary TEXT,
  FOREIGN KEY (policy_id) REFERENCES policies(policy_id)
);
```

## 28) DATA TYPES

Common SQL types:

```text
INTEGER = whole number
REAL = decimal number
TEXT = text
DATE = date
DATETIME = date and time
BOOLEAN = true/false, often stored as 0/1
```

Examples:

```sql
policy_id INTEGER
title TEXT
risk_score INTEGER
confidence_score REAL
published_date DATE
created_at DATETIME
is_reviewed BOOLEAN
```

## 29) CONSTRAINTS

```sql
CREATE TABLE actors (
  actor_id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  organisation_type TEXT DEFAULT 'Unknown',
  email TEXT UNIQUE
);
```

Common constraints:

```text
PRIMARY KEY = unique row id
FOREIGN KEY = links to another table
NOT NULL = value required
UNIQUE = no duplicates
DEFAULT = fallback value
CHECK = rule for allowed values
```

CHECK example:

```sql
CREATE TABLE policies (
  policy_id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  risk_level TEXT CHECK (risk_level IN ('Low', 'Medium', 'High', 'Critical'))
);
```

## 30) PRIMARY KEY / FOREIGN KEY

Primary key:

```sql
policy_id INTEGER PRIMARY KEY
```

Foreign key:

```sql
policy_id INTEGER REFERENCES policies(policy_id)
```

Meaning:

```text
Primary key = unique id in this table
Foreign key = id that points to another table
```

Relationship:

```text
policies.policy_id
→ evidence.policy_id
```

## 31) SUBQUERIES

```sql
SELECT title
FROM policies
WHERE policy_id IN (
  SELECT policy_id
  FROM evidence
  WHERE reliability_score >= 90
);
```

Meaning:

```text
Find policies connected to very strong evidence
```

Another example:

```sql
SELECT title, risk_level
FROM policies
WHERE policy_id IN (
  SELECT policy_id
  FROM evidence
  GROUP BY policy_id
  HAVING AVG(reliability_score) >= 80
);
```

## 32) CASE STATEMENTS

```sql
SELECT 
  title,
  risk_level,
  CASE
    WHEN risk_level = 'Critical' THEN 'Immediate review'
    WHEN risk_level = 'High' THEN 'Priority review'
    WHEN risk_level = 'Medium' THEN 'Standard review'
    ELSE 'Low priority'
  END AS review_action
FROM policies;
```

Use for:

```text
Creating labels
Converting scores into categories
Making readable outputs
```

Risk score example:

```sql
SELECT 
  source_title,
  reliability_score,
  CASE
    WHEN reliability_score >= 85 THEN 'Strong'
    WHEN reliability_score >= 60 THEN 'Moderate'
    ELSE 'Weak'
  END AS evidence_strength
FROM evidence;
```

## 33) VIEWS

```sql
CREATE VIEW high_risk_policies AS
SELECT title, category, risk_level, status
FROM policies
WHERE risk_level IN ('High', 'Critical');
```

Use view:

```sql
SELECT *
FROM high_risk_policies;
```

Meaning:

```text
A view is a saved query
Useful for repeated analysis
```

## 34) INDEXES

```sql
CREATE INDEX idx_policies_category
ON policies(category);
```

```sql
CREATE INDEX idx_evidence_policy_id
ON evidence(policy_id);
```

Use for:

```text
Speeding up searches
Speeding up joins
Large datasets
```

Do not overuse:

```text
Indexes make reads faster
But can make inserts/updates slower
```

## 35) ORDER OF SQL WRITING

```sql
SELECT
FROM
JOIN
WHERE
GROUP BY
HAVING
ORDER BY
LIMIT
```

Example:

```sql
SELECT p.category, COUNT(*) AS total
FROM policies p
LEFT JOIN evidence e
ON p.policy_id = e.policy_id
WHERE p.status != 'Archived'
GROUP BY p.category
HAVING COUNT(*) >= 2
ORDER BY total DESC
LIMIT 10;
```

## 36) ORDER OF SQL EXECUTION

```text
FROM / JOIN
WHERE
GROUP BY
HAVING
SELECT
ORDER BY
LIMIT
```

This explains why:

```text
WHERE cannot usually use SELECT aliases
HAVING is for grouped results
ORDER BY can use aliases
```

## 37) COMMON POLICY INTELLIGENCE QUERIES

Find high-risk policies:

```sql
SELECT title, category, risk_level
FROM policies
WHERE risk_level IN ('High', 'Critical')
ORDER BY title ASC;
```

Find strongest evidence:

```sql
SELECT source_title, reliability_score, summary
FROM evidence
ORDER BY reliability_score DESC
LIMIT 10;
```

Count policies by category:

```sql
SELECT category, COUNT(*) AS total
FROM policies
GROUP BY category
ORDER BY total DESC;
```

Find policies with weak evidence:

```sql
SELECT p.title, AVG(e.reliability_score) AS avg_evidence_score
FROM policies p
INNER JOIN evidence e
ON p.policy_id = e.policy_id
GROUP BY p.policy_id, p.title
HAVING AVG(e.reliability_score) < 50;
```

Find policy stakeholders:

```sql
SELECT p.title, a.name, pa.role
FROM policies p
INNER JOIN policy_actors pa
ON p.policy_id = pa.policy_id
INNER JOIN actors a
ON pa.actor_id = a.actor_id
ORDER BY p.title;
```

Find conflicting policies:

```sql
SELECT 
  source.title AS source_policy,
  target.title AS target_policy
FROM relationships r
INNER JOIN policies source
ON r.source_policy_id = source.policy_id
INNER JOIN policies target
ON r.target_policy_id = target.policy_id
WHERE r.relationship_type = 'conflicts_with';
```

## 38) DEBUGGING SQL

```text
Start simple
Run SELECT * first
Add WHERE
Add JOIN
Add GROUP BY
Add ORDER BY
Add LIMIT
```

Debug example:

```sql
SELECT *
FROM policies
LIMIT 5;
```

Then:

```sql
SELECT *
FROM policies
WHERE category = 'Housing';
```

Then:

```sql
SELECT p.title, e.source_title
FROM policies p
INNER JOIN evidence e
ON p.policy_id = e.policy_id;
```

## 39) COMMON SQL ERRORS

```text
❌ Misspelled table name
❌ Misspelled column name
❌ Missing comma between columns
❌ Missing quotes around text values
❌ Using quotes around column names incorrectly
❌ Forgetting FROM
❌ Forgetting ON in JOIN
❌ Joining on wrong key
❌ Using WHERE after GROUP BY
❌ Using aggregate function without GROUP BY
❌ Using = NULL instead of IS NULL
❌ UPDATE without WHERE
❌ DELETE without WHERE
❌ Semicolon missing in some tools
```

## 40) DEBUG CHECKLIST

```text
1. Is the table name correct?
2. Is the column name correct?
3. Did you include FROM?
4. Did you include commas between columns?
5. Are text/date values in quotes?
6. Are numbers not unnecessarily quoted?
7. Is WHERE before GROUP BY?
8. Is HAVING after GROUP BY?
9. Is ORDER BY near the end?
10. Is LIMIT last?
11. Is the JOIN using the correct key?
12. Are aliases clear?
13. Did you check for NULL correctly?
14. Did you use WHERE before UPDATE/DELETE?
15. Run a SELECT first before changing/deleting data
```

## 41) POLICY INTELLIGENCE FULL STARTER EXAMPLE

Create tables:

```sql
CREATE TABLE policies (
  policy_id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  risk_level TEXT CHECK (risk_level IN ('Low', 'Medium', 'High', 'Critical')),
  status TEXT DEFAULT 'Draft',
  published_date DATE
);

CREATE TABLE evidence (
  evidence_id INTEGER PRIMARY KEY,
  policy_id INTEGER NOT NULL,
  source_title TEXT NOT NULL,
  source_type TEXT,
  reliability_score INTEGER CHECK (reliability_score BETWEEN 0 AND 100),
  summary TEXT,
  FOREIGN KEY (policy_id) REFERENCES policies(policy_id)
);

CREATE TABLE actors (
  actor_id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  organisation_type TEXT
);

CREATE TABLE policy_actors (
  policy_id INTEGER NOT NULL,
  actor_id INTEGER NOT NULL,
  role TEXT,
  PRIMARY KEY (policy_id, actor_id),
  FOREIGN KEY (policy_id) REFERENCES policies(policy_id),
  FOREIGN KEY (actor_id) REFERENCES actors(actor_id)
);

CREATE TABLE relationships (
  relationship_id INTEGER PRIMARY KEY,
  source_policy_id INTEGER NOT NULL,
  target_policy_id INTEGER NOT NULL,
  relationship_type TEXT,
  FOREIGN KEY (source_policy_id) REFERENCES policies(policy_id),
  FOREIGN KEY (target_policy_id) REFERENCES policies(policy_id)
);
```

Insert sample data:

```sql
INSERT INTO policies (policy_id, title, category, risk_level, status, published_date)
VALUES
(1, 'Affordable Housing Reform', 'Housing', 'Medium', 'Under Review', '2026-02-15'),
(2, 'Clean Air Regulation', 'Climate', 'High', 'Reviewed', '2026-03-10'),
(3, 'Digital ID Framework', 'Technology', 'Critical', 'Draft', '2026-04-01');

INSERT INTO evidence (evidence_id, policy_id, source_title, source_type, reliability_score, summary)
VALUES
(1, 1, 'Housing Affordability Review', 'Report', 76, 'Evidence shows rising rent pressure in urban areas.'),
(2, 2, 'Air Quality Impact Study', 'Study', 88, 'Transport emissions are linked to poor air quality.'),
(3, 3, 'Digital Identity Risk Assessment', 'Assessment', 91, 'Privacy and data governance risks require review.');

INSERT INTO actors (actor_id, name, organisation_type)
VALUES
(1, 'Department for Housing', 'Government'),
(2, 'Environmental Standards Agency', 'Regulator'),
(3, 'Digital Governance Office', 'Government');

INSERT INTO policy_actors (policy_id, actor_id, role)
VALUES
(1, 1, 'Owner'),
(2, 2, 'Regulator'),
(3, 3, 'Owner');

INSERT INTO relationships (relationship_id, source_policy_id, target_policy_id, relationship_type)
VALUES
(1, 2, 3, 'depends_on'),
(2, 1, 2, 'indirectly_impacts');
```

Query intelligence view:

```sql
SELECT 
  p.title,
  p.category,
  p.risk_level,
  p.status,
  AVG(e.reliability_score) AS avg_evidence_score,
  COUNT(e.evidence_id) AS evidence_count
FROM policies p
LEFT JOIN evidence e
ON p.policy_id = e.policy_id
GROUP BY p.policy_id, p.title, p.category, p.risk_level, p.status
ORDER BY avg_evidence_score DESC;
```

## 42) QUICK SQL MEMORY MAP

```text
Read:
SELECT
FROM

Filter:
WHERE
AND
OR
IN
BETWEEN
LIKE
IS NULL

Sort:
ORDER BY
ASC
DESC
LIMIT

Summarise:
COUNT
SUM
AVG
MIN
MAX
GROUP BY
HAVING

Connect:
JOIN
INNER JOIN
LEFT JOIN
ON

Change:
INSERT
UPDATE
DELETE

Build:
CREATE TABLE
PRIMARY KEY
FOREIGN KEY
NOT NULL
UNIQUE
CHECK

Debug:
table names
column names
commas
quotes
join keys
WHERE safety
```

## FINAL MEMORY MODEL

```text
SQL = SELECT → FILTER → JOIN → GROUP → DEBUG

Select:
Choose columns from tables

Filter:
WHERE, AND, OR, IN, LIKE

Join:
Connect related tables using keys

Group:
COUNT, AVG, GROUP BY, HAVING

Debug:
Names, commas, quotes, joins, WHERE
```
