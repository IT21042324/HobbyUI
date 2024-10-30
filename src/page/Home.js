import { ChatBar } from "../component/chatBar/chatBar";
import { ImageContentBlockMapper } from "../component/imageContentBlock/imageContentBlockMapper";
import { WelcomeMessage } from "../component/welcomeMessage/welcomeMessage";

export const Home = () => {
  return (
    <>
      <WelcomeMessage message={"Good morning, Reezan"} />
      <ImageContentBlockMapper />
      <ChatBar />
    </>
  );
};
