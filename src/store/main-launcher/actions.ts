export enum LAUNCHER {
  SHOW = 'LAUNCHER_SHOW',
  HIDE = 'LAUNCHER_HIDE',
  SHOWN = 'LAUNCHER_SHOWN',
  HIDDEN = 'LAUNCHER_HIDDEN',
}

interface ShowLauncherAction {
  readonly type : LAUNCHER.SHOW;
}

interface HideLauncherAction {
  readonly type: LAUNCHER.HIDE;
}

interface LauncherShownAction {
  readonly type : LAUNCHER.SHOWN;
}

interface LauncherHiddenAction {
  readonly type: LAUNCHER.HIDDEN;
}

export const showLauncher = () : ShowLauncherAction => ({
  type : LAUNCHER.SHOW,
})

export const hideLauncher = () : HideLauncherAction => ({
  type : LAUNCHER.HIDE,
})

export type LauncherActions = LauncherShownAction | LauncherHiddenAction | HideLauncherAction;

export const launcherShown = () : LauncherShownAction => ({
  type : LAUNCHER.SHOWN,
})

export const launcherHidden = () : LauncherHiddenAction => ({
  type : LAUNCHER.HIDDEN,
})