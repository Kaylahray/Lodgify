import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ateemucadjmcmrpikmrm.supabase.co",
  import.meta.env.VITE_SUPABASE_KEY
);

export const checkAuth = (setSession) => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    setSession(session);
  });

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session);
  });

  return subscription;
};

export async function signInWithEmail(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
}

export const logout = async () => {
  await supabase.auth.signOut();
};
