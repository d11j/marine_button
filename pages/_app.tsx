import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import playAudioReducer from "../src/reducers/PlayAudioReducer";
import appReducer from "src/reducers/AppReducer";

const store = createStore(
  combineReducers({ playAudio: playAudioReducer, app: appReducer })
);

export default ({
  Component,
  pageProps,
}: {
  // ここは真面目に型を付けるだけ無駄
  Component: React.ComponentClass;
  pageProps: Record<string, unknown>;
}) => (
  <>
    <title>宝鐘マリンボタン🏴☠</title>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
);
