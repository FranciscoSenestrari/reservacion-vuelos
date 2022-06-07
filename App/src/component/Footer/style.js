import {StyleSheet} from 'react-native';
import themeStyle from '../../styles/theme.style';
export const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: 'row',
    width: themeStyle.CONTAINER_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {fontSize: themeStyle.FONT_SIZE_MEDIUM, color: 'grey'},
  redirect: {
    fontSize: themeStyle.FONT_SIZE_MEDIUM,
    marginLeft: 4,
    color: themeStyle.SECONDARY_COLOR,
  },
});
