// Components
import Navbar from "@/components/Navbar";

/**
 * Layout component that wraps its children with a main element and includes a Navbar.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child elements to be rendered within the layout.
 * @returns {JSX.Element} The rendered layout component.
 */
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  );
}
