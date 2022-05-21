import React from "react";
import MainPage from "containers/main-page";
import LandingPage from "containers/landing-page";

enum PageView {
  MainPage = "main-page",
  LandingPage = "landing-page",
}

const Page = () => {
  const [page, setPage] = React.useState<PageView | null>(null);

  React.useEffect(() => {
    const spotifyToken = localStorage.getItem("spotify_token");
    if (spotifyToken) {
      setPage(PageView.MainPage);
    } else {
      setPage(PageView.LandingPage);
    }
  }, []);

  const onLogin = () => {
    setPage(PageView.MainPage);
  };

  if (page === PageView.MainPage) return <MainPage />;
  if (page === PageView.LandingPage) return <LandingPage onLogin={onLogin} />;

  return null;
};

export default Page;
