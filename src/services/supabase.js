import SUPABASE_KEY from "../../env";

import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://eiqmbegnmyfzojgqabrp.supabase.co";

const supabaseKey = SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
