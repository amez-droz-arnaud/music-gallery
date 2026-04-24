import { createClient } from '@supabase/supabase-js'

export const SUPABASE_URL: string = 'https://fidfksvexbwqhbotefji.supabase.co';
const PUB_KEY: string = 'sb_publishable_765XxOUOwhe6Oo8EoVcVSg_bTJchDhT'

export const supabase = createClient(SUPABASE_URL, PUB_KEY)