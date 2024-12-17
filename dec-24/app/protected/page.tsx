import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <>
      <p>
        <em>
        “The world is indeed comic, but the joke is on mankind.” 
        </em>
        </p>
        <p>flag::easy::4a7314c446cfb28b31118bc606a82627ac18779e</p>
    </>
  );
}
