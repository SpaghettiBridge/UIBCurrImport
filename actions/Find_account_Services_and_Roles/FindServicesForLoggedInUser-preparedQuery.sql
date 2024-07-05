SELECT *, join_application_accounts.role as system_role 
FROM public.accounts
JOIN public.join_account_services
ON public.accounts.id = public.join_account_services.account_id
JOIN public.join_application_accounts
ON public.accounts.id = public.join_application_accounts.account_id
WHERE public.accounts.email = ?
and join_application_accounts.app_id = '2d6e478d-f0cc-41f3-a863-7f2f180a032e'

-- for tests
-- WHERE email = 'user@spbridge.co.uk'