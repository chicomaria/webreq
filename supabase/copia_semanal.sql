-- Weekly copy of the whole back office (table docs) kept inside the database.
-- The app's key cannot read or delete these copies: RLS on, no policies, no grants.
-- Restore: select dados from public.copias order by feita desc limit 1;  -> { collection: { id: data } }
create extension if not exists pg_cron;

create table if not exists public.copias (
  id bigint generated always as identity primary key,
  feita timestamptz not null default now(),
  documentos integer not null,
  dados jsonb not null
);
comment on table public.copias is 'Cópia semanal da tabela docs (todas as coleções do back office). Guarda as 8 mais recentes. Para repor: ver dados -> {coleção: {id: data}}.';
alter table public.copias enable row level security;
revoke all on public.copias from anon, authenticated;

create or replace function public.fazer_copia() returns bigint
language plpgsql security definer set search_path = public as $$
declare novo bigint;
begin
  insert into public.copias (documentos, dados)
  select (select count(*) from public.docs),
         coalesce((select jsonb_object_agg(col, ids) from (select col, jsonb_object_agg(id, data) as ids from public.docs group by col) t), '{}'::jsonb)
  returning id into novo;
  delete from public.copias where id not in (select id from public.copias order by feita desc limit 8);
  return novo;
end $$;
revoke execute on function public.fazer_copia() from public, anon, authenticated;

-- every Monday at 04:00 UTC
select cron.schedule('copia-semanal-backoffice', '0 4 * * 1', 'select public.fazer_copia()');
