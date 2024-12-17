import Hero from "@/components/hero";

export default async function Private() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
      <h1 className="font-bold text-3xl mb-4">About Us</h1>
        <p className="mb-4 text-muted-foreground">
          Welcome to Miskatonic University! We are committed to providing an exceptional education and fostering a community of scholars and researchers. Our faculty and staff are dedicated to helping students achieve their academic and professional goals.
        </p>
        <h2 className="font-medium text-xl mb-4">Our Mission</h2>
        <p className="mb-4 text-muted-foreground">
          Our mission is to advance knowledge and educate students in science, technology, and other areas of scholarship that will best serve the nation and the world in the 21st century. We strive to create, disseminate, preserve, and apply knowledge.
        </p>
        <h2 className="font-medium text-xl mb-4">Contact Us</h2>
        <p className="mb-2 text-muted-foreground">
          <strong>Address:</strong> 123 University Ave, Arkham, MA 01923
        </p>
        <p className="mb-2 text-muted-foreground">
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p className="mb-2 text-muted-foreground">
          <strong>Email:</strong> <a href="mailto:herbert.west@miskatonicuniversity.us" className="text-blue-500 underline">herbert.west@miskatonicuniversity.us</a>
        </p>
        <h2 className="font-medium text-xl mb-4">Our Campuses</h2>
        <p className="mb-2 text-muted-foreground">
          <strong>Main Campus:</strong> 123 University Ave, Arkham, MA 01923
        </p>
        <p className="mb-2 text-muted-foreground">
          <strong>Downtown Campus:</strong> 456 College St, Arkham, MA 01923
        </p>
      </main>
    </>
  );
}
