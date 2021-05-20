import styled from "styled-components";

import { withElevation } from "../Elevation";

import { Tweet as __Tweet } from "./Tweet";
import { TweetAction as __TweetAction } from "./TweetAction";
import { TweetActionBar as __TweetActionBar } from "./TweetActionBar";
import { TweetActionMenu as __TweetActionMenu } from "./TweetActionMenu";
import { TweetAside as __TweetAside } from "./TweetAside";
import { TweetAvatar as __TweetAvatar } from "./TweetAvatar";
import { TweetContent as __TweetContent } from "./TweetContent";
// import { TweetFooter as __TweetFooter } from "./TweetFooter";
import { TweetHeader as __TweetHeader } from "./TweetHeader";
import { TweetInfo as __TweetInfo } from "./TweetInfo";
import { TweetMain as __TweetMain } from "./TweetMain";
import { TweetPromotedIndicator as __TweetPromotedIndicator } from "./TweetPromotedIndicator";
import { TweetUsername as __TweetUsername } from "./TweetUsername";
import { TweetUserLabel as __TweetUserLabel } from "./TweetUserLabel";
import { TweetReplyContext as __TweetReplyContext } from "./TweetReplyContext";
import { TweetText as __TweetText } from "./TweetText";
// import { TweetThreadCTA as __TweetThreadCTA } from "./TweetThreadCTA";
import { TweetSocialContext as __TweetSocialContext } from "./TweetSocialContext";

const Tweet = withElevation(__Tweet, "Tweet");
const TweetAction = withElevation(__TweetAction, "TweetAction");
const TweetActionBar = withElevation(__TweetActionBar, "TweetActionBar");
const TweetActionMenu = withElevation(__TweetActionMenu, "TweetActionMenu");
const TweetAside = withElevation(__TweetAside, "TweetAside");
const TweetAvatar = withElevation(__TweetAvatar, "TweetAvatar");
const TweetContent = withElevation(__TweetContent, "TweetContent");
// const TweetFooter = withElevation(__TweetFooter, "TweetFooter");
const TweetHeader = withElevation(__TweetHeader, "TweetHeader");
const TweetInfo = withElevation(__TweetInfo, "TweetInfo");
const TweetMain = withElevation(__TweetMain, "TweetMain");
const TweetPromotedIndicator = withElevation(
  __TweetPromotedIndicator,
  "TweetPromotedIndicator"
);
const TweetUsername = withElevation(__TweetUsername, "TweetUsername");
const TweetUserLabel = withElevation(__TweetUserLabel, "TweetUserLabel");
const TweetReplyContext = withElevation(
  __TweetReplyContext,
  "TweetReplyContext"
);
// const TweetThreadCTA = withElevation(__TweetThreadCTA, "TweetThreadCTA");
const TweetText = withElevation(__TweetText, "TweetText");
const TweetSocialContext = withElevation(
  __TweetSocialContext,
  "TweetSocialContext"
);

const Skeleton = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: max-content 1fr;
`;

const UsernameRow = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr max-content;
`;

const Link = styled.span`
  color: rgb(27, 149, 224);
`;

export function TweetScreen() {
  return (
    <Tweet>
      <TweetHeader>
        <TweetSocialContext icon="🔃">Twitter Retweeted</TweetSocialContext>
      </TweetHeader>
      <Skeleton>
        <TweetAside>
          <TweetAvatar src="https://pbs.twimg.com/profile_images/1261086152963981312/0EgUgTUi_x96.jpg" />
        </TweetAside>
        <TweetMain>
          <TweetInfo>
            <UsernameRow>
              <TweetUsername
                accountName="m7z_faraway"
                username="Marina from Faraway"
              />
              <TweetActionMenu />
            </UsernameRow>
            <TweetUserLabel>Twitter island government official</TweetUserLabel>
          </TweetInfo>
          <TweetReplyContext accounts={["saranormous"]} />
          <TweetContent>
            <TweetText>
              Twitter Island! <Link>#AnimalCrossing</Link> <Link>#ACNH</Link>{" "}
              <Link>#NintendoSwitch</Link> <Link>@NintendoAmerica</Link>
            </TweetText>
            {/* <TweetRichContent><TweetMedia /><TweetForwardPivot /><TweetQuoteTweet /><TweetCard /></TweetRichContent> */}
          </TweetContent>
          <TweetActionBar>
            <TweetAction label="Replies" icon="💬" count="11.1k" />
            <TweetAction label="Retweets" icon="🔃" count="16k" />
            <TweetAction label="Likes" icon="❤️" count="56.9k" />
            <TweetAction label="Share" icon="🔗" />
          </TweetActionBar>
          <TweetPromotedIndicator />
          {/* <TweetFooter>
            <TweetThreadCTA />
          </TweetFooter> */}
        </TweetMain>
      </Skeleton>
    </Tweet>
  );
}
