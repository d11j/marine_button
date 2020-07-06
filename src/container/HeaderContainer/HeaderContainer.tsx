import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Static from "../../components/Static";
import ExternalLink from "../../components/ExternalLink";

import { useAppState } from "src/state/AppState";
import DelayedShow from "src/components/DelayedShow";

export default () => {
  const { classes } = useAppState();
  return (
    <DelayedShow delayMs={1000}>
      <header className={`${classes.header} app-header`}>
        <article className={classes.headerArticle}>
          <ExternalLink
            className="fork-me-on-github"
            href="https://github.com/happou31/marine_button"
          >
            <img
              width="120"
              height="120"
              src="https://github.blog/wp-content/uploads/2008/12/forkme_right_red_aa0000.png?resize=149%2C149"
              className="attachment-full size-full"
              alt="Fork me on GitHub"
              data-recalc-dims="1"
            />
          </ExternalLink>

          <Grid className={classes.headerContainer} container spacing={1}>
            <Grid item className={`${classes.headerItem} ${classes.textLarge}`}>
              <img
                alt="宝鐘マリンボタン"
                className={`${classes.siteLogo} site-logo`}
                src="static/image/icon.png"
              />

              <Typography
                variant="h3"
                className={`${classes.nicomoji} header-contantainer-title`}
              >
                宝鐘マリンボタン
              </Typography>
            </Grid>
            <Grid
              item
              xs={1}
              className={`${classes.headerItem} ${classes.headerSocialIconContainer} header-social-container`}
            >
              <ExternalLink
                className="social-icon-youtube"
                href="https://www.youtube.com/channel/UCCzUftO8KOVkV4wQG1vkUvg"
              >
                <img
                  className={classes.headerSocialIconYoutube}
                  src="static/image/youtube_social_icon_red.png"
                  alt="
          Marine Ch. 宝鐘マリン"
                />
              </ExternalLink>
            </Grid>
            <Grid
              item
              xs={1}
              className={`${classes.headerItem} ${classes.headerSocialIconContainer} header-social-container`}
            >
              <ExternalLink
                className="social-icon-twitter"
                href="https://twitter.com/houshoumarine"
              >
                <img
                  className={`${classes.headerSocialIconTwitter} twitter-logo`}
                  src="static/image/Twitter_Logo_Blue.svg"
                  alt="
            宝鐘マリン🏴‍☠️＠ホロライブ3期生"
                />
              </ExternalLink>
            </Grid>
          </Grid>
        </article>
        <article className={`${classes.headerArticle} tweet-button`}>
          <Static>
            トゥイッターで共有→
            <a
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              className="twitter-share-button"
              data-text="宝鐘マリンボタン 🏴☠"
              data-url="https://button.houshou-marine.love"
              data-show-count="false"
            >
              Tweet
            </a>
            <script
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            />
          </Static>
        </article>
      </header>
    </DelayedShow>
  );
};
