import React from "react";
import { Button, Container, Heading, Text } from "@chakra-ui/react";
import PopupWindow, { toQuery } from "libs/popup-window";

const Page = ({ onLogin }: any) => {
  const [isLoading, setLoading] = React.useState(false);

  const spotifyLogin = async () => {
    setLoading(true);

    try {
      const data = await PopupWindow.open(
        "spotify-oauth-auth",
        `https://accounts.spotify.com/authorize?${toQuery({
          client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
          response_type: "token",
          redirect_uri: process.env.NEXT_PUBLIC_APP_URL,
          scope: "user-top-read user-library-read",
        })}`,
        {
          height: 800,
          width: 600,
        }
      );

      localStorage.setItem("spotify_token", JSON.stringify(data));
      onLogin();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container py={20} textAlign="center">
      <Heading>Musically</Heading>
      <Text>Your interface for music discovery, powered by Spotify.</Text>

      <Button mt={8} rounded="xl" onClick={() => spotifyLogin()} isLoading={isLoading}>
        Log in with spotify
      </Button>
    </Container>
  );
};

export default Page;
