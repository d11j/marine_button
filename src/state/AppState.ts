import useStyles from "src/theme/Styles";
import { useSelector } from "react-redux";

export type VoiceList = {
  label: string;
  audios: {
    path: string;
    label: string;
  }[][];
}[];

type AppState = {
  localStorageRef: Storage | null;
  classes: ReturnType<typeof useStyles>;
};

export function useAppState() {
  const { app } = useSelector<unknown>(({ app }) => ({
    app,
  })) as {
    app: AppState;
  };

  return app;
}

export default AppState;
