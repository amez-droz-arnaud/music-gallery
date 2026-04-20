import { createClient } from '@supabase/supabase-js'

const URL: string = 'https://fidfksvexbwqhbotefji.supabase.co';
const PUB_KEY: string = 'sb_publishable_765XxOUOwhe6Oo8EoVcVSg_bTJchDhT'

export const supabase = createClient(URL,PUB_KEY)