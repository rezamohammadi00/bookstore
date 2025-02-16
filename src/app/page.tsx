import Container from "@/src/components/Container";
import Hero from "@/src/components/Hero";
import { Metadata } from "next";

//If a metadata object with a default title is defined in the root layout, that title is used for the page.
//However, if the page itself defines a title, that title (used by the browser) overrides the default title from the root layout.
//The template used in the root layout does not override the page's title.
//summary: title.template applies to child route segments and not the segment it's defined in.
export const metadata: Metadata = {
  title: "خانه | کتابان", //browser shows "خانه | کتابان"  no  "خانه | کتابان | کتابان"
};

const HomePage = () => {
  return (
    <main>
      <Container>
        <Hero />
      </Container>
    </main>
  );
};

export default HomePage;
