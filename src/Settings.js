import * as React from "react";

const SettingsContext = React.createContext([null, () => {}]);

export function useSettings() {
  const [state, dispatch] = React.useContext(SettingsContext);
  if (state == null) {
    throw new Error("TODO: need SettingsProvider");
  }
  return [state, dispatch];
}

export function useSetting(name) {
  const [state, dispatch] = useSettings();
  const set = React.useCallback((value) => dispatch([name, value]), [
    name,
    dispatch
  ]);

  return [state[name], set];
}

export function SettingsProvider({ children }) {
  const [state, dispatch] = React.useReducer(
    (state, [name, value]) => ({ ...state, [name]: value }),
    {
      elevated: false,
      elevation: "",
      explodeX: 0,
      explodeZ: 3,
      showLabels: true,
      showOutlines: false,
      showShadows: true
    }
  );

  return (
    <SettingsContext.Provider value={[state, dispatch]}>
      {children}
    </SettingsContext.Provider>
  );
}
