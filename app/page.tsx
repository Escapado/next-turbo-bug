import { createClient } from '@supabase/supabase-js';

const supabaseClient = createClient('https://example.com', 'key');

export default function Page() {
  return <div>Hello World!</div>;
}
