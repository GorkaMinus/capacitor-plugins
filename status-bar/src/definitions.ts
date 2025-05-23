/// <reference types="@capacitor/cli" />

declare module '@capacitor/cli' {
  export interface PluginsConfig {
    /**
     * These config values are available:
     */
    StatusBar?: {
      /**
       * Whether the statusbar is overlaid or not.
       * For applications targeting Android 15, this property has no effect unless
       * the property windowOptOutEdgeToEdgeEnforcement is added to the application layout file.
       * Otherwise, the application assumes always overlays as true.
       * More details in https://developer.android.com/reference/android/R.attr#windowOptOutEdgeToEdgeEnforcement
       *
       * @since 1.0.0
       * @default true
       * @example false
       */
      overlaysWebView?: boolean;

      /**
       * Style of the text of the status bar.
       *
       * @since 1.0.0
       * @default default
       * @example "DARK"
       */
      style?: string;

      /**
       * Color of the background of the statusbar in hex format, #RRGGBB.
       * Doesn't work if `overlaysWebView` is true.
       *
       * @since 1.0.0
       * @default #000000
       * @example "#ffffffff"
       */
      backgroundColor?: string;
    };
  }
}

export interface StyleOptions {
  /**
   * Style of the text of the status bar.
   *
   * @since 1.0.0
   */
  style: Style;
}

export enum Style {
  /**
   * Light text for dark backgrounds.
   *
   * @since 1.0.0
   */
  Dark = 'DARK',

  /**
   * Dark text for light backgrounds.
   *
   * @since 1.0.0
   */
  Light = 'LIGHT',

  /**
   * The style is based on the device appearance.
   * If the device is using Dark mode, the statusbar text will be light.
   * If the device is using Light mode, the statusbar text will be dark.
   *
   * @since 1.0.0
   */
  Default = 'DEFAULT',
}

export interface AnimationOptions {
  /**
   * The type of status bar animation used when showing or hiding.
   *
   * This option is only supported on iOS.
   *
   * @default Animation.Fade
   *
   * @since 1.0.0
   */
  animation: Animation;
}

export enum Animation {
  /**
   * No animation during show/hide.
   *
   * @since 1.0.0
   */
  None = 'NONE',

  /**
   * Slide animation during show/hide.
   * It doesn't work on iOS 15+.
   *
   * @deprecated Use Animation.Fade or Animation.None instead.
   *
   * @since 1.0.0
   */
  Slide = 'SLIDE',

  /**
   * Fade animation during show/hide.
   *
   * @since 1.0.0
   */
  Fade = 'FADE',
}

export interface BackgroundColorOptions {
  /**
   * A hex color to which the status bar color is set.
   *
   * @since 1.0.0
   */
  color: string;
}

export interface StatusBarInfo {
  /**
   * Whether the status bar is visible or not.
   *
   * @since 1.0.0
   */
  visible: boolean;

  /**
   * The current status bar style.
   *
   * @since 1.0.0
   */
  style: Style;

  /**
   * The current status bar color.
   *
   * @since 1.0.0
   */
  color?: string;

  /**
   * Whether the statusbar is overlaid or not.
   *
   * @since 1.0.0
   */
  overlays?: boolean;
}

export interface SetOverlaysWebViewOptions {
  /**
   * Whether to overlay the status bar or not.
   *
   * @since 1.0.0
   */
  overlay: boolean;
}

export interface StatusBarPlugin {
  /**
   * Set the current style of the status bar.
   *
   * @since 1.0.0
   */
  setStyle(options: StyleOptions): Promise<void>;

  /**
   * Set the background color of the status bar.
   *
   * @since 1.0.0
   */
  setBackgroundColor(options: BackgroundColorOptions): Promise<void>;

  /**
   * Show the status bar.
   * On iOS, if the status bar is initially hidden and the initial style is set to
   * `UIStatusBarStyleLightContent`, first show call might present a glitch on the
   * animation showing the text as dark and then transition to light. It's recommended
   * to use `Animation.None` as the animation on the first call.
   *
   * @since 1.0.0
   */
  show(options?: AnimationOptions): Promise<void>;

  /**
   * Hide the status bar.
   *
   * @since 1.0.0
   */
  hide(options?: AnimationOptions): Promise<void>;

  /**
   * Get info about the current state of the status bar.
   *
   * @since 1.0.0
   */
  getInfo(): Promise<StatusBarInfo>;

  /**
   * Set whether or not the status bar should overlay the webview to allow usage
   * of the space underneath it.
   *
   * @since 1.0.0
   */
  setOverlaysWebView(options: SetOverlaysWebViewOptions): Promise<void>;
}

/**
 * @deprecated Use `StyleOptions`.
 * @since 1.0.0
 */
export type StatusBarStyleOptions = StyleOptions;

/**
 * @deprecated Use `BackgroundColorOptions`.
 * @since 1.0.0
 */
export type StatusBarBackgroundColorOptions = BackgroundColorOptions;

/**
 * @deprecated Use `SetOverlaysWebViewOptions`.
 * @since 1.0.0
 */
export type StatusBarOverlaysWebviewOptions = SetOverlaysWebViewOptions;

/**
 * @deprecated Use `StatusBarInfo`.
 * @since 1.0.0
 */
export type StatusBarInfoResult = StatusBarInfo;

/**
 * @deprecated Use `AnimationOptions`.
 * @since 1.0.0
 */
export type StatusBarAnimationOptions = AnimationOptions;

/**
 * @deprecated Use `Animation`.
 * @since 1.0.0
 */
export const StatusBarAnimation = Animation;

/**
 * @deprecated Use `Style`.
 * @since 1.0.0
 */
export const StatusBarStyle = Style;
