import BasePage from "../pages/BasePage";

export default function AboutPage(props) {
  return (
    <>
      <BasePage
        page="About"
        content={<div>Read all about Posematcher!</div>}
      ></BasePage>
    </>
  );
}
