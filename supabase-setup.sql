-- =====================================================
-- Gaetano Reale Immobilien — Supabase Setup SQL
-- In Supabase → SQL Editor ausführen
-- =====================================================

-- 1. Objekte Tabelle
CREATE TABLE IF NOT EXISTS objekte (
  id          TEXT PRIMARY KEY,
  name        TEXT NOT NULL,
  loc         TEXT NOT NULL,
  price       TEXT NOT NULL,
  type        TEXT NOT NULL DEFAULT 'kaufen',
  status      TEXT NOT NULL DEFAULT 'verfügbar',
  cat         TEXT DEFAULT 'Wohnung',
  area        TEXT,
  rooms       TEXT,
  year        TEXT,
  floor       TEXT,
  energy      TEXT,
  extra       TEXT,
  features    JSONB DEFAULT '[]',
  desc        TEXT,
  imgs        JSONB DEFAULT '[]',
  "isNew"     BOOLEAN DEFAULT false,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Settings Tabelle (für Config + Passwort)
CREATE TABLE IF NOT EXISTS settings (
  key   TEXT PRIMARY KEY,
  value JSONB NOT NULL
);

-- 3. Row Level Security (RLS) — öffentliches Lesen, Schreiben nur mit API-Key
ALTER TABLE objekte  ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- Jeder darf lesen
CREATE POLICY "Öffentlich lesen - objekte"
  ON objekte FOR SELECT USING (true);

CREATE POLICY "Öffentlich lesen - settings"
  ON settings FOR SELECT USING (true);

-- Nur mit API-Key schreiben (anon key reicht für single-user admin)
CREATE POLICY "API schreiben - objekte"
  ON objekte FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "API schreiben - settings"
  ON settings FOR ALL USING (true) WITH CHECK (true);

-- =====================================================
-- FERTIG! Jetzt in index.html eintragen:
-- SUPABASE_URL  = deine Project URL (z.B. https://abc123.supabase.co)
-- SUPABASE_KEY  = dein anon/public key
-- =====================================================
