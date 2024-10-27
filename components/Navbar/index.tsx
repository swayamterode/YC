import Link from "next/link";
import Image from "next/image";
// Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// Auth
import { auth, signOut, signIn } from "@/auth";
// Icons
import { BadgePlus, LogOut } from "lucide-react";

/**
 * Navbar component that displays a navigation bar with authentication features.
 *
 * This component fetches the current session using the `auth` function and displays
 * different navigation options based on the user's authentication status.
 *
 * @returns {JSX.Element} The rendered Navbar component.
 *
 * @async
 * @function Navbar
 *
 * @remarks
 * - If the user is authenticated, the Navbar displays links to create a startup, logout, and the user's profile.
 * - If the user is not authenticated, the Navbar displays a login button.
 *
 * @component
 */
const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex justify-center items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-6 sm:hidden text-red-500 mt-1" />
                </button>
              </form>

              <Link href={`/user/${session?.user?.email}`}>
                <Avatar>
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
