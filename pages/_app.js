import SettingsContextProvider from "contexts/SettingsContext";
import "../Resources/style.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <audio preload='auto'>
        <source src='/sound/drop1.mp3' type='audio/mp3' />
      </audio>
      <audio preload='auto'>
        <source src='/sound/open.mp3' type='audio/mp3' />
      </audio>
      <audio preload='auto'>
        <source src='/sound/roll.mp3' type='audio/mp3' />
      </audio>
      <audio preload='auto'>
        <source src='/sound/drop2.mp3' type='audio/mp3' />
      </audio>
      <audio preload='auto'>
        <source src='/sound/drop3.mp3' type='audio/mp3' />
      </audio>
      <audio preload='auto'>
        <source src='/sound/drop4.mp3' type='audio/mp3' />
      </audio>
      <audio preload='auto'>
        <source src='/sound/drop5.mp3' type='audio/mp3' />
      </audio>

      <SettingsContextProvider>
        <Component {...pageProps} />
      </SettingsContextProvider>
    </>
  );
}
