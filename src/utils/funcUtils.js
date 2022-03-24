import ENUM from './enum';

const {SPEECH_MARKET_OVERVIEW, SPEECH_NEWS, SPEECH_ORDER, SPEECH_WATCHLIST} =
  ENUM;

export function convertSpeechToText({results, navigation}) {
  if (SPEECH_MARKET_OVERVIEW.includes(results[0])) {
    navigation.navigate('MarkertOverview');
  }
  if (SPEECH_NEWS.includes(results[0])) {
    navigation.navigate('News');
  }
  if (SPEECH_ORDER.includes(results[0])) {
    navigation.navigate('OrderEntry');
  }
  if (SPEECH_WATCHLIST.includes(results[0])) {
    navigation.navigate('WatchList');
  }
}
