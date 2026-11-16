/* Configuration publique du tableau de bord Sentinel.
   La clé « publishable » (sb_publishable_…) est PUBLIQUE par nature : la protection vient du compte
   propriétaire et de la fonction sentinel_overview. Ne mettez JAMAIS ici la clé service_role ni une clé secrète.
   Si « anon » reste vide, l'écran de connexion demande la clé une seule fois et la garde dans ce navigateur. */
window.SENTINEL_DASH = {
  url: "https://lnejzgasypajeqsnyjgh.supabase.co",
  anon: ""
};
